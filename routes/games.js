const gamesRouter = require('express').Router();
const { sendAllGames, sendUpdatedGames } = require('../controllers/games');
const {
  getAllGames,
  checkIsTitleArray,
  updateGamesArray,
  updateGamesFile,
  deleteGame,
  findGameById,
} = require('../middlewares/games');

gamesRouter.get('/games', getAllGames, sendAllGames);
gamesRouter.post(
  '/games',
  getAllGames,
  checkIsTitleArray,
  updateGamesArray,
  updateGamesFile,
  sendUpdatedGames,
);
gamesRouter.delete(
  '/games/:id',
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpdatedGames,
);

module.exports = gamesRouter;
