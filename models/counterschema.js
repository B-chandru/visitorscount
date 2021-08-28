const mongoose = require("mongoose");

const counterschema= new mongoose.Schema({
    counter: {
        type: Number,
        required: true,
     
    }
})

module.exports = mongoose.model('counter',counterschema)