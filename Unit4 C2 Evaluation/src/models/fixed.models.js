const mongoose = require("mongoose");

const fixedSchema = mongooseSchema({
    account_number:{ type: Number , required : true},
    balance : { type:Number, required: true},
    interestRate : { type:Number, required: true},
    startDate : {type:Number, required:true},
    maturityDate : {type:Number, required:true},

},
{
    versionKey: false,
    timestamps:true,
})

const Fixed = mongoose.model("fixed",fixedSchema);
module.exports = Fixed