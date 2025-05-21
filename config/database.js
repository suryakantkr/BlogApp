const mongoose = require("mongoose");
require("dotenv").config();

const connectWithData = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("DB connection successfully");
        })
        .catch((err) => {
            console.log("DB connection issue.");
            console.log(err);
        });
};
module.exports = connectWithData;