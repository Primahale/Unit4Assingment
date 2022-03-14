const express = require("express");
const User = require("../models/user.models")
const router = express.Router();



router.post("",async(req,res) => {
    try{
        const user = await User.create(req.body)
        return res.status(201).send(user)
    }catch(err){
        return res.send("error")
    }
})

router.get("",async(res,req) => {
    try{
        const user = await User.find().lean().exec()
        return res.status(201).send(user)
    }catch(err){
        return res.send("error")
    }
})

module.exports = router