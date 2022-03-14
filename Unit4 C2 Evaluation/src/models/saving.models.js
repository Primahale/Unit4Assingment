const mongoose = require("mongoose");

const savingSchema = mongoose.Schema({
    account_number:{ type: Number , required : true},
    balance : { type:Number, required: true},
    interestRate : { type:Number, required: true},
},
{
    versionKey: false,
    timestamps:true,
})

const Saving = mongoose.model("saving",savingSchema);
module.exports = Saving