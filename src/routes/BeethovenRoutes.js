const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // ✅ guardar en memoria

const { consultaMano } = require('../controllers/BeethovenController');
const { procesarOCR } = require('../controllers/OcrController');

router.post('/consulta', consultaMano);
router.post('/ocr', upload.array('imagenes'), procesarOCR);

module.exports = router;
