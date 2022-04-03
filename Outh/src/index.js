const express = require("express");

const app = express();

app.use(express.json());

app.listen(5000,async ()=> {
    try{
        console.log("on port 5000");
    }
    catch(err){
        console.log(err.message);
    }
})