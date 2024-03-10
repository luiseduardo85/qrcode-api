const express = require('express');
const QRCode = require('qrcode');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Geração do QR Code
QRCode.toString('localhost:3000/buscar-produto', function (err, string) {
  if (err) throw err;
  console.log(string);
});

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/buscar-produto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
