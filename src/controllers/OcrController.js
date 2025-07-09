const axios = require('axios');

exports.procesarOCR = async (req, res) => {
  const { imagenes } = req.body;

  if (!imagenes || !Array.isArray(imagenes)) {
    return res.status(400).json({ error: 'Formato de imágenes incorrecto' });
  }

  try {
    const response = await axios.post('http://3.212.146.65:8000/ocr', { imagenes });
    const data = response.data;

    return res.json(data);
  } catch (error) {
    console.error('Error al consultar OCR:', error.message);
    return res.status(500).json({ error: 'Fallo al consultar OCR externo' });
  }
};
