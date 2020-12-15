const express = require('express');
require('./db/mongoose');
const battleRouter = require('./router/battle');

const app = express();

app.use(express.json());
app.use(battleRouter);

module.exports = app;