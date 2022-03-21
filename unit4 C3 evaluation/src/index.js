const express = require("express");
const connect = require("./config/db");
const userController = require("./controllers/user.controller");
const bookController = require("./controllers/book.controller")
 
const app = express();
app.use(express.json());

app.use("/user",userController);
app.use("/book",bookController)

app.listen(5000,async()=>{
    try{
        await connect();
        console.log("on port 5000");
    }
    catch(err){
        console.log(err.message);
    }
})