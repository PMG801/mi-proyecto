const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde Docker y Jenkins!');
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));

