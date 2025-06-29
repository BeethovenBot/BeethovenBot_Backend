// backend/src/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const BeethovenRoutes = require('./src/routes/BeethovenRoutes');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar cors
const app = express();

dotenv.config(); // Cargar variables de entorno
connectDB(); // Conectar a la base de datos

// Aumentar el límite del tamaño del cuerpo
app.use(bodyParser.json({ limit: '10mb' })); // Ajusta el límite según sea necesario
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Middleware para permitir CORS desde cualquier origen (puedes restringirlo a tu frontend en producción)
app.use(cors());

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json());

// Montar las rutas de llamadas
app.use('/api', BeethovenRoutes);

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('API de Beeethoven está respirando...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});