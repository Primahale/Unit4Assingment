const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    likes:{type:Number,required:false},
    coverImage:{type:String,required:false},
    content:{type:String,required:true},

},{
    versionKey:false,
    timestamps:true,

});

module.exports = mongoose.model("book",bookSchema)