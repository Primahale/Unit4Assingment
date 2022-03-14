const mongoose = require("mongoose");
 
const branchSchema = mongoose.Schema({
    name:{ type: String, require:true},
    adddress :{ type:String,require:true},
    IFSC : { type: String,require:true},
    MICR : { type:String,require:true}
   
},
{
    versionKey: false,
    timestamps:true,
})

const Branch = mongoose.model("branch",branchSchema);
module.exports = Branch