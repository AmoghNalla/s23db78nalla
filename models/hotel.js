const mongoose = require("mongoose")
const hotelSchema = mongoose.Schema({
name: String,
numOfrooms: Number,
rate: Number
})
module.exports = mongoose.model("hotel",
hotelSchema)