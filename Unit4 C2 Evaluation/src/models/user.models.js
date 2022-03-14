const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    FirstName: {type:String, required:true},
    middleName:{type:String, required:true},
    lastName: {type:String, required:true},
    age: { type:String,required:true},
    email : {type: String,required:true},
    address:{type: String,required:true},

},
{
    versionKey: false,
    timestamps:true,
})

const User = mongoose.model("user",userSchema);
module.exports = User