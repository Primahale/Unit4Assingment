
const express =  require("express");
const app = express();

const AllBooks = (req,res,next)=>{
    console.log("Fetching All Books");
    next();
}
 
app.get("/books",AllBooks,(req,res)=>{
    return res.send("AllBooks");
});

const SingleBook = (req,res,next)=>{
    req.name = req.params.name;
    next();
}
app.get("/books/:name",SingleBook,(req,res)=>{
    return res.send({"Book Name ": req.params.name})
});


app.listen(5310,()=>{
    console.log("on port 5310");
    
})


