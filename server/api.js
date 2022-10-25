const express = require('express');
const apiRouter = express.Router();

// import routers from files
const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./ideas');

// mount routers for use
apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);


module.exports = apiRouter;
