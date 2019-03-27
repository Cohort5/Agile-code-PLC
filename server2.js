const express = require ('express'); // require express for AJAX calls
const bodyParser = require("body-parser"); //middle-ware
const app = express(); // intialize the express 

app.use("/", express.static('public'))

app.use ("/", (req, res,)=>{
    res.send("Hello CareerDevs")
})

app.post()

const port = process.env.PORT;
const ip = process.env.IP;

app.listen(process.env.PORT, process.env.IP, function(){
    console.log(`App connected ${port}`);
}) 


//package.json - "server": nodemon


