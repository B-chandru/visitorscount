
const express = require('express')
const app = express();
const connection = require('./db')
const counterschema = require("./models/counterschema");
const cors = require("cors");

// middlewares
app.use(cors());
app.use((req,res,next)=>{ console.log(req.url,req.method); next() } );
connection()

//Before this step you should create a collection and store the counter value with 0 and then get that id.
//whenever any user request to this url the value of counter will be increased by 1.
const increment =()=>{
    counterschema.findByIdAndUpdate("612a45315bd32285849affcf", {$inc:{counter: 1}},{new:true})
    .then(data=> console.log(data.counter))
    .catch((err)=> console.log(err))   
 }

 //get request
app.get("/", async(req,res)=>{
    try {
        increment()
         const counter_value = await counterschema.findById("612a45315bd32285849affcf");
        res.status(200).json(counter_value);
        
    } catch (error) {
        res.status(500).json({msg:error.message});
        
    }
})


// server running
const PORT= process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}...`)
})

