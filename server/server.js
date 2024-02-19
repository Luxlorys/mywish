const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/routes/Routes');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;


// third party middlewares
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
  }));
app.use(cookieParser());


// my middlewares
app.use(router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})