const request = require('request');

const mockData = require('../mock.json');
const dataUrl = 'https://opentdb.com/api.php?amount=10';
const db = require('../models');

module.exports = (app) => {

    //get questions
    app.get('/api/questions/:dataType?', (req, res) => {
        if (req.params.dataType === 'mock') {
            res.json(mockData);
        } else {
            request(dataUrl, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    res.json(JSON.parse(body));
                } else {
                    res.status(500).json({ error: 500, message: 'There was a problem retieving questions. Please try again.' });
                }
            });
        }
    });

    //get Game or Player
    app.get('/api/:model/:id?', (req, res) => {
        let Model;
        switch (req.params.model) {
            case 'games':
                Model = 'Game';
                break;
            case 'players':
                Model = 'Player';
                break;
            default:
                break;
        }
        const query = req.params.id ? { where: { id: req.params.id } } : {};

        if (Model) {
            db[Model].findAll(query).then((dbGames) => {
                res.json(dbGames);
            });
        } else {
            res.status(404).json({ error: 404, message: `/api/${req.params.model} does not exist` });
        }
    });

    //create new game
    app.post('/api/game/new', (req, res) => {
        db.Game.create(req.body).then((dbGame) => {
            res.json(dbGame);
        });
    });
};
