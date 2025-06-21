const mongoose = require('mongoose');

const onBoardingSaludMentalSchema = mongoose.Schema({
  NombreCompleto: {
    type: String,
    required: true,
  },
  Telefono: {
    type: String,
    required: true,
  },
  DocumentoIdentidad: {
    Tipo: {
      type: String,
      required: true,
    },
    Numero: {
      type: String,
      required: true,
    },
  },
  FechaEntrevista: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const onBoardingSaludMental = mongoose.model('onBoardingSaludMental', onBoardingSaludMentalSchema);

module.exports = onBoardingSaludMental;