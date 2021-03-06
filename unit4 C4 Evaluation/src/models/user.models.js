const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {type:String, required:true},
    lastName : {type:String,required:false},
    email : {type:String,required:false},
    password : {type:String,required:false}
},
{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("user",userSchema)