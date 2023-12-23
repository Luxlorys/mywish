const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT | 3000;
const CLUSTER = process.env.CLUSTER;
const DB_NAME = process.env.DB_NAME;

async function dbConnection() {
    try {
        await mongoose.connect(CLUSTER, {dbName: DB_NAME});
        console.log('connected to db');
    } catch (error) {
        console.log("error connection to db", error);
    }
}

dbConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    })
})