const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '/tmp' }); // En Vercel se usa /tmp como directorio temporal

const { consultaMano } = require('../controllers/BeethovenController');
const { procesarOCR } = require('../controllers/OcrController');

// Rutas
router.post('/consulta', consultaMano);
router.post('/ocr', upload.array('imagenes'), procesarOCR); // 👈 importante

module.exports = router;
