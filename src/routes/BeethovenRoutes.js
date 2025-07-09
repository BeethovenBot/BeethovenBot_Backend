const express = require('express');
const router = express.Router();

const { consultaMano, procesarOCR } = require('../controllers/BeethovenController');
const { procesarOCR } = require('../controllers/OcrController');

router.post('/consulta', consultaMano);
router.post('/ocr', procesarOCR); 

module.exports = router;
