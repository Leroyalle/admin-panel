const { writeData } = require('../utils/data');

const addGameController = async (req, res) => {
  await writeData('./data/games.json', req.games);
  res.send({
    games: req.games,
    updated: req.updatedObject,
  });
};

const sendAllGames = async (req, res) => {
  res.send(req.games);
};

const deleteGame = async (req, res) => {
  const id = Number(req.params.id);

  req.game = req.games.find((item) => item.id === id);

  const index = req.games.findIndex((item) => item.id === req.game.id);

  req.games.splice(index, 1);

  await writeData('./data/games.json', req.games);

  res.send({
    games: req.games,
    updated: req.game,
  });
};

module.exports = { sendAllGames, deleteGame, addGameController };
