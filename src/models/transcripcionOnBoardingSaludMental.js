// models/onBoardingSaludMentalTranscripcion.js

const mongoose = require('mongoose');

const transcripcionSchema = new mongoose.Schema({
  onboardingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'onBoardingSaludMental',
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transcripcion_onBoardingSaludMental', transcripcionSchema);
