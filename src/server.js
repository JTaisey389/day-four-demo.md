'use strict';

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404');
const errors = require('./error-handlers/500');

const logger = require('./middleware/logger');

const plantRoutes = require('./routes/plant');
const treesRoutes = require('./routes/tree');

app.use(express.json());

app.use(logger);
app.use(plantRoutes);
app.use(treesRoutes);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server is up on ${port}`));
  }
}