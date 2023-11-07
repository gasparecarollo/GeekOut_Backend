const db = require('../db/dbConfig');

const getAllGames = async () => {

    try {
        const allGames = await db.any("SELECT * FROM games");
        return allGames;
    } catch (error) {
        return error;
    }
}

const getGame = async (id) => {
    try {

        const oneGame = await db.one("SELECT * FROM games WHERE id = $1 ", id)
        return oneGame;
    } catch (error) {

        return error;
    }

}
const deleteGame = async (id) => {
    try {
        const deletedGame = await db.one("DELETE FROM songs WHERE ID = $1 RETURNING *", id)

        return deletedGame
    } catch (error) {
        return error
    }

}

const updateGame = async (id, game) => {

    try {
        const updatedGame = await db.one("UPDATE games SET name=$1, is_favorite=$2, genre=$3, storyline=$4, video_id=$5, image_id=$6, cost=$7 WHERE id=$8 RETURNING *", [game.name, game.is_favorite, game.genre, game.storyline, game.video_id, game.image_id, game.cost, id])

        return updatedGame;

    } catch (error) {

        return error;
    }

}

module.exports = { getAllGames, getGame, createGame, deleteGame, updateGame }