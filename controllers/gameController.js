const express = require('express');
const games = express.Router();

const { getAllGames, getGame, createGame, deleteGame, updateGame } = require('../queries/game')


games.get('/', async (req, res) => {
    const allGames = await getAllGames

    if (allGames[0]) {
        res.status(200).json(allGames)
    } else {

        res.status(500).json({ error: "server error" });
    }
});

games.get('/:id', async (req, res) => {
    const id = req.params.id;
    const oneGame = await getGame(id);

    if (oneGame.id) {
        res.status(200).json(oneGame)

    } else {
        res.status(404).json({ error: "Game not found" })
    }
});

games.post('/', async (res, req) => {
    const body = req.body;
    const game = await createGame(body)

    res.json
})

games.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const deletedGame = await deleteGame(id);

    if (deletedGame.id) {
        res.status(200).json(deletedGame)
    } else {
        res.status(404).json({ error: "Game not found" })
    }
})

games.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updatedGame = await updateGame(id, body)

})

if (updatedGame.id) {
    res.status(200).json(updatedGame)

} else {

    res.status(404).json({ error: "Game not found" })
}

module.exports = games;