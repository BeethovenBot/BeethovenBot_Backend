const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

exports.procesarOCR = async (req, res) => {
  try {
    const imagenes = req.files; // Multer guarda los archivos en req.files

    if (!imagenes || imagenes.length === 0) {
      return res.status(400).json({ error: 'No se enviaron imágenes' });
    }

    const form = new FormData();
    imagenes.forEach((file) => {
      form.append('imagenes', fs.createReadStream(file.path), file.originalname);
    });

    const response = await axios.post('http://3.212.146.65:8000/ocr', form, {
      headers: form.getHeaders(),
      maxBodyLength: Infinity
    });

    return res.json(response.data);
  } catch (error) {
    console.error('❌ Error al procesar OCR:', error.message);
    if (error.response) {
      console.error('Respuesta del OCR:', error.response.data);
    }
    return res.status(500).json({ error: 'Fallo en el procesamiento OCR' });
  }
};
