const express = require("express");

// const {body.validationResult} = require("express-validator");

const User = require("../model/user.model");
const uplode = require("../middlewares/upload");
const router = express.Router();

router.post("/",
body("firstName")
.trim()
.not()
.isEmpty()
.withMessage("First name must be min 3 and max 30 length "),

body("lastName")
.trim()
.not()
.isEmpty()
.withMessage("last name must be min 3 and max 30 length "),

body("age")
.not()
.isEmpty()
.withMessage("age cannot be empty")
.isNumeric()
.withMessage("age must  be number between 1 to 150")
.custom((val) => {
    if (val < 1 || val > 150) {
      throw new Error("Incorrect age provided")
    }
    return true;
  })),

router.post("/multiple",uplode.any("profileImages"),async(res,req)=>{
    try{
        const filePaths = req.files.map((file)=>{
            return file.path;
        });

        const user = await User.create({
            firstName : req.body.firstName,
            profileImage: filePaths,
        });
        return res.statusCode(200).send(user);
    }catch(err){
        return res.statusCode(500).send({message:err.message});

    }
});

module.exports = router;