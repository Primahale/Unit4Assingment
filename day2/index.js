const express = require("express");
const app = express();
// console.log(app);

app.get("/user",function(req,res){
    // console.log("hello");
    res.send("hello");
});

app.get("/books",function(req,res){
    res.send([
    {Harry_Potter: "Harry Potter is a series of seven fantasy "},
    {Two_State: "Hindi is the lingua franca of the Hindi Belt."},
    {Wings_Of_Fire:"Kalam was born on October 15, 1931, the son of a little educated boat owner "
}]);
})
// app.listen(5700,()=>{
//     console.log("on port 5700")
// })

app.listen(5200,()=>{
    console.log("on port 5200");
    
})
