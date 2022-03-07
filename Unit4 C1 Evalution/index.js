
const express = require("express")
const app = express();
// console.log(app);

app.use(logger);

app.get("/books",(req,res)=>{
    
 // console.log("All Books")
        return res.send({route: "/books"})
})


app.use(CheckPermission);



app.get("/libraries",CheckPermission,(req,res)=>{
    return res.send({route:"/libraries",permission:true})
})

app.get("/authors", CheckPermission,(req,res)=>{
    return res.send({route:"/authors",permission:true})
})


function logger(req,res,next){
    console.log("before route handle")
    next();
    console.log("after route handle")
}
function CheckPermission(req,res,next){
    if("/libraries"){
        console.log("librarian")
    }
    if("/authors"){
            console.log("author")    
    }
    
    // console.log("before 1")
    next();
    // console.log("after 1");
}



app.listen(5200,()=>{
    console.log("on port")
})