const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Willkommen beim Markerless AR Tag Generator!');
});

app.listen(port, () => {
  console.log(`Server läuft unter http://localhost:${port}`);
});