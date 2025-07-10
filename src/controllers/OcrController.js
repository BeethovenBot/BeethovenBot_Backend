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

      // IMPORTANTE: aquí puedes probar cambiar 'imagen' a 'file' o 'image' si sigue fallando
      form.append('files', file.buffer, {
        filename: file.originalname || `imagen${idx}.png`,
        contentType: file.mimetype
      });

      console.log(`📤 Enviando imagen ${idx + 1}: ${file.originalname}, tamaño: ${file.buffer.length} bytes`);

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
      console.error('🔍 Código de estado:', error.response.status);
      console.error('🔍 Headers:', error.response.headers);
      console.error('🔍 Respuesta del servidor OCR:', error.response.data);
    } else {
      console.error('❌ Error sin respuesta del servidor:', error);
    }
    return res.status(500).json({ error: 'Fallo al reenviar imágenes al OCR' });
  }
};
