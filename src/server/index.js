const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//site
app.use(express.static(path.join(__dirname, '../../dist')));

//api
require('./routes/api-routes.js')(app);

//send everything else to react
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); //eslint-disable-line
});
