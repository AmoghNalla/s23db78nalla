const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  name: {
    type: String,
    minlength : 2,
    maxlength : 8,
    required: true // Example: The name is required
  },
  numOfRooms: {
    type: Number,
    min : 1,
    max : 100000,
    required: true
  },
  rate: {
    type: Number,
    min: 50,
    max: 1000
  },
});

module.exports = mongoose.model("hotel", hotelSchema);
