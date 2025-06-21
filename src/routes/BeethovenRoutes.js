// backend/src/routes/callRoutes.js
const express = require('express');
const router = express.Router();

// Ruta para consultar la mano que tiene el jugador
router.post('/consulta', consultaMano);

const { consultaMano } = require('../controllers/BeethovenController');
module.exports = router;