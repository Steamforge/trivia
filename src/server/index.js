const express = require('express');
const request = require('request');
const path = require('path');

const mockData = require('./mock.json');
const dataUrl = 'https://opentdb.com/api.php?amount=10';

const app = express();
const PORT = process.env.PORT || 8080;

//site
app.use(express.static(path.join(__dirname, '../../dist')));

//endpoint
app.get('/api/questions/:dataType?', (req, res) => {
    if (req.params.dataType === 'mock') {
        res.json(mockData);
    } else {
        request(dataUrl, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.json(JSON.parse(body));
            } else {
                res.json({});
            }
        });
    }
});

//send everything else to react
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); //eslint-disable-line
