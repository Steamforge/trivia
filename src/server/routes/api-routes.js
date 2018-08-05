const request = require('request');

const mockData = require('../mock.json');
const dataUrl = 'https://opentdb.com/api.php?amount=10';
const db = require('../models');

module.exports = (app) => {

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
            res.status(404).json({ error: 404, message: `${req.params.model} not found in database` });
        }
    });

    //create new game
    app.post('/api/game/new/:dataType?', (req, res) => {
        const gameObject = req.body;
        if (req.params.dataType === 'mock') {
            //use mock data
            gameObject.gameData = mockData;
            db.Game.create(gameObject).then((dbGame) => {
                res.json(dbGame);
            });
        } else {
            //use api data
            request(dataUrl, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    gameObject.gameData = JSON.parse(body);
                    db.Game.create(gameObject).then((dbGame) => {
                        res.json(dbGame);
                    });
                } else {
                    res.status(500).json({ error: 500, message: 'Problem creating game. PLease try again.' });
                }
            });
        }
    });
};
