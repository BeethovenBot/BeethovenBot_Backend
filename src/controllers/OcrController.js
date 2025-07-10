const posiblesCampos = ['imagen', 'image', 'file'];

for (let idx = 0; idx < imagenes.length; idx++) {
  const file = imagenes[idx];
  let exito = false;

  for (const campo of posiblesCampos) {
    const form = new FormData();
    form.append(campo, file.buffer, {
      filename: file.originalname || `imagen${idx}.png`,
      contentType: file.mimetype
    });

    console.log(`📤 Probando campo "${campo}" para imagen ${idx + 1}`);

    try {
      const response = await axios.post('https://beethoven.mozartai.com.co/ocr', form, {
        headers: form.getHeaders(),
        maxBodyLength: Infinity
      });

      console.log(`✅ Campo "${campo}" aceptado para imagen ${idx + 1}`);
      resultados.push(response.data);
      exito = true;
      break; // salir del bucle de campos
    } catch (err) {
      console.error(`❌ Campo "${campo}" falló:`, err.response?.status, err.response?.data?.detail || err.message);
    }
  }

  if (!exito) {
    resultados.push({ error: `Ningún campo funcionó para imagen ${idx + 1}` });
  }
}
