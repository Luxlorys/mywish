const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const giftRouter = require('./src/routes/giftRoutes');

const app = express();

// third-party middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


// custom middlewares

// routers
app.use(giftRouter);

module.exports = app;