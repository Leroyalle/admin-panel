const gamesRouter = require('express').Router();
const { sendAllGames, deleteGame, addGameController } = require('../controllers/games');
const { getAllGames, checkIsTitleArray, updateGamesArray } = require('../middlewares/games');

gamesRouter.get('/games', getAllGames, sendAllGames);
gamesRouter.post('/games', getAllGames, checkIsTitleArray, updateGamesArray, addGameController);
gamesRouter.delete('/games/:id', getAllGames, deleteGame);

module.exports = gamesRouter;
