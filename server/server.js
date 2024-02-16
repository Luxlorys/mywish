const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/routes/Routes');
const pg = require('./src/db/mywish');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


// third party middlewares
app.use(bodyParser.json());
app.use(cors());


// my middlewares
app.use(router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})