const mongoose = require("mongoose");

const masterSchema = mongoose.Schema({
    balance: { type :Number, required : true},
    user_id : { type: mongoose.Schema.Types.ObjectId, ref:"User" ,required: true},
    branch_id : { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    manager_id: { type: mongoose.Schema.Types.ObjectId, ref:"Branch"}
},
{
    versionKey: false,
    timestamps:true,
})

const Master = mongoose.model("master",masterSchema);
module.exports = Master