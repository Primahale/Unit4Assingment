 
const express = require("express");
const app = express();

const connect = require("./src/config/db")

const userRoutes = require("./src/routes/user.routes");
const BranchRoutes = require("./src/routes/branch.routes");
const fixedRoutes = require("./src/routes/fixed.routes");
const masterRoutes = require("./src/routes/master.routes");
const savingRoutes = require("./src/routes/saving.routes");


app.use(express.json());
app.use("/user",userRoutes)
app.use("/bank",BranchRoutes)
app.use("/master",masterRoutes)
app.use("/fixed",fixedRoutes)
app.use("/saving",savingRoutes)

app.listen(5000,()=>{
    try{
        await connect();
        console.log(" on port");
    }
    catch(err){
        console.log("error")
    }
    console.log("on port 5000")
})

module.exports = connect