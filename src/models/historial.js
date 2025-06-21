// Historial.js
const mongoose = require('mongoose');

const historialSchema = new mongoose.Schema({
  id_mano: { type: String, unique: true },
  respuesta_gpt: String,
  origen: String,
  cartas_jugador: [String],
  cartas_mesa: [String],
  posicion: String
}, { timestamps: true });

module.exports = mongoose.model('Historial', historialSchema);