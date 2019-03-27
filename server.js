const express = require ('express');
const app = express(); // intialize the express 
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res,)=>{
    res.send("Hello")
})

app.post("/post", (req, res,)=>{
    res.send(req.body);
    // console.log(req)
})

app.listen(process.env.PORT, ()=> {
    console.log("App connected");
})


