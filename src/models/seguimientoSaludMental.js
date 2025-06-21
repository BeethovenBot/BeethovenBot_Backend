const mongoose = require('mongoose');

const seguimientoSaludMentalSchema = mongoose.Schema({
  atencionUrgenciaSummary: {
    informacionProporcionada: {
      type: String,
      required: true
    },
    solicitudPaciente: {
      tipo: {
        type: String,
        required: true
      },
      detalle: {
        type: String,
        required: true
      }
    },
    accionMozart: {
      tipo: {
        type: String,
        required: true
      },
      detalle: {
        type: String,
        required: true
      }
    },
    resultadoAgendamiento: {
      especialidad: {
        type: String,
        required: true
      },
      fechaHoraConfirmada: {
        type: String,
        required: true
      },
      modalidad: {
        type: String,
        required: true
      },
      estado: {
        type: String,
        required: true
      }
    },
    resultadoPHQ2: {
      item1Score: {
        type: Number,
        required: true
      },
      item2Score: {
        type: Number,
        required: true
      },
      puntajeTotal: {
        type: Number,
        required: true
      },
      interpretacionRiesgo: {
        type: String,
        required: true
      }
    },
    observacionesGenerales: {
      type: String,
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const seguimientoSaludMental = mongoose.model('seguimientoSaludMental', seguimientoSaludMentalSchema);

module.exports = seguimientoSaludMental;