// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');

const PORT = 3000;
const app = express();

app.use(cors, bodyParser.json(), express.static(path.join(__dirname, 'public')));

app.use(mainRoute, gamesRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
