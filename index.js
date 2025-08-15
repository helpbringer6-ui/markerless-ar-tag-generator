const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Willkommen beim Markerless AR Tag Generator!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server läuft unter http://localhost:${port}`);
});