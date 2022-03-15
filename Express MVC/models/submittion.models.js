const mongoose = require("mongoose");

const submittionSchema = new mongoose.Schema({
    evaluationId:{type:mongoose.Schema.Types.ObjectId,
    ref:"evaluation",
    require:"true"},
    studentId:{type:mongoose.Schema.Types.ObjectId,
    ref:"student",
    require:"true"},
    marks:{type:Number,require:true},
},{
    versionKey:false,
    timestamps:true,
})

const Submittion = mongoose.model("submittion",submittionSchema)

module.exports=Submittion;