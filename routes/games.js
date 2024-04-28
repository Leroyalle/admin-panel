// routes/games.js
const gamesRouter = require('express').Router(); // Создали роутер
const { sendAllGames, deleteGame, addGameController } = require('../controllers/games');
const { getAllGames } = require('../middlewares/games');

gamesRouter.get('/games', getAllGames, sendAllGames);
gamesRouter.post('/games', getAllGames, addGameController);
gamesRouter.delete('/games/:id', getAllGames, deleteGame);

module.exports = gamesRouter;
