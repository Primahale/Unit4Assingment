const express = require("express");
const Branch = require("../models/branch.models");
const Master = require("../models/master.models");
const Fixed = require("../models/fixed.models");
const Saving = require("../models/saving.models");

const router = express.Router();

router.post("",async(req,res) => {
    try{
        const branch = await Branch.create(req.body)
        return res.send(branch)
    }catch(err){
        return res.status(500).send("error")
    }
})

router.get("",async(res,req) => {
    try{
        const branch = await Branch.find().lean().exec()
    }catch(err){
        return res.status(500).send("error")
    }
})

router.post("",async(req,res) =>{
    try{
        const master = await Master.create(req.body)
        return res.send(master)
    }catch{
        return res.send("error")
    }
})