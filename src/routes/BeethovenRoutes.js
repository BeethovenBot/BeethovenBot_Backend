const express = require('express');
const router = express.Router();
const multer = require('multer');
const multer = require('multer');

const { consultaMano } = require('../controllers/BeethovenController');
const upload = multer({ storage: multer.memoryStorage() });

// Rutas
router.post('/consulta', consultaMano);
router.post('/ocr', upload.array('imagenes'), procesarOCR);

module.exports = router;
