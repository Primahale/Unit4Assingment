const express= require("express");
const app = express();

const connect = require("./config/db")
const userController = require("./controllers/user.controllers");
const todoController = require("./controllers/todo.controllers");


app.use(express.json());

app.use("/todos",todoController);
app.use("/user",userController)

app.listen(5001,async()=>{
    try{
        await connect();
        console.log("On port 5001")
    }catch(err){
        console.log(err.message)
    }
})