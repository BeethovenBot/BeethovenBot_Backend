const mongoose = require('mongoose');

const historialSchema = new mongoose.Schema({
  id_mano: { type: String, unique: true },
  cartas_jugador: [String],
  cartas_mesa: [String],
  posicion: String,
  pote: String,
  jugadores: [
    {
      jugador: Number,
      stack: String,
      apuesta: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Historial', historialSchema);
