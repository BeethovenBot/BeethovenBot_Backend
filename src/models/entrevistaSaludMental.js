const mongoose = require('mongoose');

const entrevistaSaludMentalSchema = mongoose.Schema({
  TamizajeInicial: {
    CriteriosInclusion: {
      PreguntasRespuestas: {
        edad_18_60: { type: Boolean, required: true },
        reside_bogota_urbano: { type: Boolean, required: true },
        conectividad_internet: { type: Boolean, required: true },
        sintomas_atenuados_post_hosp: { type: Boolean, required: true },
        red_apoyo_funcional: { type: Boolean, required: true },
        cuidador_mismo_domicilio: { type: Boolean, required: true },
        perdida_capacidades_impide_metas: { type: Boolean, required: true },
        consumo_sustancias_problema: { type: Boolean, required: true },
        adherencia_previa_tratamiento: { type: Boolean, required: true },
      },
      VeredictoElegibilidad: { type: String, required: true },
      JustificacionElegibilidad: { type: String, required: true },
      RecomendacionesElegibilidad: { type: String, required: true },
    },
    EvaluacionFuncionamientoGlobal: {
      DificultadesRelacionarseUltimoAnio: { type: String, required: true },
      MantenidoActividadesEstructuradas: { type: String, required: true },
      EpisodiosCriticosRecientes: { type: String, required: true },
      NivelEnergiaMotivacion: { type: String, required: true },
      ConductasRiesgo: { type: String, required: true },
      ParticipacionSocialComunitaria: { type: String, required: true },
      ComentariosAdicionalesEvaluador: { type: String },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const entrevistaSaludMental = mongoose.model('entrevistaSaludMental', entrevistaSaludMentalSchema);

module.exports = entrevistaSaludMental;