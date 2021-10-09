require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async function connection(){
    try{

const connectionParamas= {
    useNewUrlParser: true,
     useUnifiedTopology: true
}
await mongoose.connect(process.env.MONGODBURL,connectionParamas);
console.log("Connected to the Database");
}catch(error){
 console.log(error);
 console.log('Could not connected to database!');
    }
}
