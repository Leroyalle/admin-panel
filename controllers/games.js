const { writeData } = require('../utils/data');

const sendAllGames = async (req, res) => {
  res.send(req.games);
};

const sendUpdatedGames = async (req, res) => {
  res.send({
    games: req.games,
    updated: req.updatedObject,
  });
};

module.exports = { sendAllGames, sendUpdatedGames };
