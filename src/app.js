const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const battleRouter = require('./router/battle');

const app = express();

app.use(cors())
app.use(express.json());
app.use(battleRouter);

module.exports = app;