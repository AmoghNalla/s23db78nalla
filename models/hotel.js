const mongoose = require("mongoose")
const hotelSchema = mongoose.Schema({
name: String,
numOfrooms: Number,
rate: { type: Number,
    min: 50,
    max: 1000
  }
})
module.exports = mongoose.model("hotel",
hotelSchema)