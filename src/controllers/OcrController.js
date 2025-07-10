const axios = require('axios');
const FormData = require('form-data');

exports.procesarOCR = async (req, res) => {
  try {
    const imagenes = req.files;

    if (!imagenes || imagenes.length === 0) {
      return res.status(400).json({ error: 'No se enviaron imágenes' });
    }

    const resultados = [];

    for (let idx = 0; idx < imagenes.length; idx++) {
      const file = imagenes[idx];
      const form = new FormData();

      // Suponemos que el OCR espera el campo "imagen"
      form.append('imagen', file.buffer, {
        filename: file.originalname || `imagen${idx}.png`,
        contentType: file.mimetype
      });

      const response = await axios.post('https://beethoven.mozartai.com.co/ocr', form, {
        headers: form.getHeaders(),
        maxBodyLength: Infinity
      });

      resultados.push(response.data);
    }

    return res.json({ results: resultados });
  } catch (error) {
    console.error('❌ Error al procesar OCR:', error.message);
    if (error.response) {
      console.error('Detalles del OCR:', error.response.data);
    }
    return res.status(500).json({ error: 'Fallo al reenviar imágenes al OCR' });
  }
};
