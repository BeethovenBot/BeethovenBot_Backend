const mongoose = require('mongoose');

const oxiTamizajeSchema = mongoose.Schema({
  tamizajeOxyayuda: {
    riesgoClinico: {
      satOxigenoReposo: {
        type: String,
        required: true
      },
      flujoOxigeno: {
        type: String,
        required: true
      },
      hospitalizaciones3Meses: {
        type: String,
        required: true
      },
      capacidadFuncionalActual: {
        type: String,
        required: true
      },
      cuidadorApoyoFamiliar: {
        type: String,
        required: true
      },
      usoHorasOxigeno: {
        type: String,
        required: true
      },
      condicionesHogarSeguridad: {
        type: String,
        required: true
      }
    },
    indiceBarthel: {
      alimentacion: {
        type: String,
        required: true
      },
      bano: {
        type: String,
        required: true
      },
      aseoPersonal: {
        type: String,
        required: true
      },
      vestido: {
        type: String,
        required: true
      },
      controlHeces: {
        type: String,
        required: true
      },
      controlOrina: {
        type: String,
        required: true
      },
      usoRetrete: {
        type: String,
        required: true
      },
      trasladosCamaSilla: {
        type: String,
        required: true
      },
      movilidadDeambulacion: {
        type: String,
        required: true
      },
      subirBajarEscaleras: {
        type: String,
        required: true
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const oxiTamizaje = mongoose.model('oxiTamizaje', oxiTamizajeSchema);

module.exports = oxiTamizaje;