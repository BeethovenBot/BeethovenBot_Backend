const axios = require('axios');

const Historial = require('../models/historial');
const tablasPreflop = require('../archivos/tablasPreflop');

const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.consultaMano = async (req, res) => {

  const { timestamp, cartas_jugador, cartas_mesa, boton_posicion, asiento_jugador, prompt_gpt } = req.body;

  if (!cartas_jugador || cartas_jugador.length < 2 || boton_posicion == null || asiento_jugador == null) {
    return res.status(400).json({ error: 'Datos insuficientes para procesar.' });
  }

  const posiciones = ['BTN', 'SB', 'BB', 'UTG', 'MP', 'CO'];
  const pos_relativa = posiciones[(6 + asiento_jugador - boton_posicion) % 6];

  const fase = cartas_mesa.length === 0 ? 'preflop' :
               cartas_mesa.length === 3 ? 'flop' :
               cartas_mesa.length === 4 ? 'turn' :
               cartas_mesa.length === 5 ? 'river' : 'desconocida';

  const normalizarCarta = (str) => {
    const partes = str.trim().split(' ');
    const valor = partes[0].toUpperCase();
    const paloLimpio = partes[1]?.toLowerCase() || '';
    const palos = { 'Corazon': 'C', 'Pica': 'S', 'Trebol': 'T', 'Diamante': 'D', '♥': 'C', '♠': 'S', '♣': 'T', '♦': 'D' };
    const palo = palos[paloLimpio] || 'x';
    return `${valor}${palo}`;
  };

  const cartas_jug_norm = cartas_jugador.map(normalizarCarta);
  const cartas_mesa_norm = cartas_mesa.map(normalizarCarta);
  const [c1, c2] = cartas_jug_norm;
  const mano = formatearMano(c1, c2);
  const id_mano = `${timestamp.split('T')[0]}-${asiento_jugador}-${mano}-${fase}`;

  try {
    const historialGuardado = await Historial.findOne({ id_mano });
    if (historialGuardado) {
      return res.json({
        accion_sugerida: historialGuardado.respuesta_gpt,
        origen: historialGuardado.origen,
        posicion: historialGuardado.posicion
      });
    }

    if (fase === 'preflop') {
      const tabla = tablasPreflop[pos_relativa] || {};
      const decision = tabla[mano];
      if (decision) {
        await Historial.create({
          id_mano,
          respuesta_gpt: decision,
          origen: 'tabla',
          cartas_jugador: cartas_jug_norm,
          cartas_mesa: cartas_mesa_norm,
          posicion: pos_relativa
        });
        return res.json({
          accion_sugerida: decision,
          origen: 'tabla',
          posicion: pos_relativa
        });
      }
    }

    if (prompt_gpt) {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Eres Phil Hellmuth, jugador profesional de póker. Responde como un experto. Comienza tu respuesta con una sola palabra (Fold, Call o Raise), luego explica brevemente por qué. Mantén un tono profesional y claro."
          },
          { role: "user", content: req.body.prompt_gpt }
        ],
        temperature: 0.0001,
        max_tokens: 150
      });

      const respuesta = completion.choices[0].message.content;

      await Historial.create({
        id_mano,
        respuesta_gpt: respuesta,
        origen: 'gpt',
        cartas_jugador: cartas_jug_norm,
        cartas_mesa: cartas_mesa_norm,
        posicion: pos_relativa
      });

      return res.json({
        accion_sugerida: respuesta,
        origen: 'gpt',
        posicion: pos_relativa
      });
    }
    return res.json({ mensaje: 'Esperando prompt para GPT o acción preflop válida.' });
  } catch (error) {
    console.error('❌ Error en el endpoint /consulta:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

function formatearMano(c1, c2) {
  const valor1 = c1.slice(0, -1);
  const valor2 = c2.slice(0, -1);
  const palo1 = c1.slice(-1);
  const palo2 = c2.slice(-1);
  const valoresOrdenados = [valor1, valor2].sort((a, b) => valorNumerico(b) - valorNumerico(a));
  const suited = palo1 === palo2 ? 's' : 'o';
  return valor1 === valor2 ? `${valor1}${valor2}` : `${valoresOrdenados[0]}${valoresOrdenados[1]}${suited}`;
}

function valorNumerico(carta) {
  const orden = { 'A': 14, 'K': 13, 'Q': 12, 'J': 11, 'T': 10 };
  return orden[carta] || parseInt(carta);
}