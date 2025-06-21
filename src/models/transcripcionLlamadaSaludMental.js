const mongoose = require('mongoose');

const transcripcionSchema = new mongoose.Schema({
  entrevistaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EntrevistaSaludMental',
    required: true
  },
  texto: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('TranscripcionEntrevista', transcripcionSchema);
