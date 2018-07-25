const express = require('express');
const path = require('path');

const mockData = require('./mock');

const app = express();
const PORT = process.env.PORT || 8080;

//site
app.use(express.static(path.join(__dirname, '../../dist')));

//endpoint
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/mock', (req, res) => res.send(mockData));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));