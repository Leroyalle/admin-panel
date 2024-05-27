const { readData } = require('../utils/data');
const getAllGames = async (req, res, next) => {
  const games = await readData('./data/games.json');
  if (!games) {
    res.status(400);
    res.send({
      status: 'error',
      message: 'Нет игр в базе данных. Добавьте игру.',
    });
    return;
  }
  req.games = games;
  next();
};

const checkIsTitleArray = (req, res, next) => {
  req.isNew = !Boolean(req.games.find((item) => item.title === req.body.title));
  next();
};

const updateGamesArray = async (req, res, next) => {
  if (req.isNew) {
    const inArray = req.games.map((item) => Number(item.id));
    let maximalId;
    if (inArray.length > 0) {
      maximalId = Math.max(...inArray);
    } else {
      maximalId = 0;
    }
    req.updatedObject = {
      id: maximalId + 1,
      title: req.body.title,
      image: req.body.image,
      link: req.body.link,
      description: req.body.description,
    };

    req.games = [...req.games, req.updatedObject];
    next();
  } else {
    res.status(400);
    res.send({ status: 'error', message: 'Игра с таким именем уже есть.' });
    return;
  }
};

module.exports = { getAllGames, checkIsTitleArray, updateGamesArray };
