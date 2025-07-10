const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

const { consultaMano } = require('../controllers/BeethovenController');
const { procesarOCR } = require('../controllers/OcrController');
const { guardarHistorial } = require('../controllers/historialController');

router.post('/consulta', consultaMano);
router.post('/ocr', upload.array('imagenes'), procesarOCR);
router.post('/historial', guardarHistorial);

module.exports = router;
