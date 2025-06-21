const mongoose = require('mongoose');

const oxiOnBoardingSchema = mongoose.Schema({
  onboardingInicialOxyayuda: {
    usuarioPrincipal: {
      nombreCompleto: {
        type: String,
        required: true
      },
      documentoIdentidad: {
        tipo: {
          type: String,
          required: true
        },
        numero: {
          type: String,
          required: true
        }
      },
      telefonoMovil: {
        type: String,
        required: true
      }
    },
    tieneCuidador: {
      type: Boolean,
      required: true
    },
    datosCuidador: {
      nombreCompleto: {
        type: String,
        required: function() {
          return this.tieneCuidador;
        }
      },
      telefono: {
        type: String,
        required: function() {
          return this.tieneCuidador;
        }
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const oxiOnBoarding = mongoose.model('oxiOnBoarding', oxiOnBoardingSchema);

module.exports = oxiOnBoarding;