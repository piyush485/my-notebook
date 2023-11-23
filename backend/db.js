const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/";

const connectToMongo = () => {
    mongoose.connect(mongoURL)
    .then((res) => {
        console.log("connected")
    }).catch((err) => {
        console.log("not connected")
    })
}

module.exports = connectToMongo