const Historial = require('../models/historial');

// Guardar nueva entrada en el historial
exports.guardarHistorial = async (req, res) => {
  try {
    const {
      cartas_jugador,
      cartas_mesa,
      posicion,
      pote,
      jugadores
    } = req.body;

    const nuevaEntrada = new Historial({
      id_mano: Date.now().toString(),
      cartas_jugador,
      cartas_mesa,
      posicion,
      pote,
      jugadores
    });

    await nuevaEntrada.save();
    res.status(201).json({ ok: true, mensaje: 'Historial guardado' });
  } catch (err) {
    console.error('❌ Error al guardar historial:', err.message);
    res.status(500).json({ error: 'Error al guardar historial' });
  }
};

// Obtener historial ordenado (más reciente primero)
exports.obtenerHistorial = async (req, res) => {
  try {
    const historial = await Historial.find().sort({ createdAt: -1 });
    res.status(200).json(historial);
  } catch (err) {
    console.error('❌ Error al obtener historial:', err.message);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
};
