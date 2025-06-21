// backend/src/routes/callRoutes.js
const express = require('express');
const router = express.Router();

const { consultaMano } = require('../controllers/BeethovenController');

// Ruta para consultar la mano que tiene el jugador
router.post('/consulta', consultaMano);


module.exports = router;