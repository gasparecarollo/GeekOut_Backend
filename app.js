//DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors');
const gameController = require('./controllers/gameController');

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/games', gameController)


//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to Geek Out')
});

app.get('*', (req, res) => {
    res.status(404).send("Nadda")
})

module.exports = app;