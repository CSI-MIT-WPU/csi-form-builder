const mongoose = require("mongoose");
require("dotenv").config();

const main = () => {
    mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(
        () => {
            const dbName = mongoose.connection.db.databaseName;
            console.log(`Connnected to Mongodb database: ${dbName}`);
        },
        (err) => {
            console.log("Error while connecting" + err);
        }
    );
}

module.exports = {main};