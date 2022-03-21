const express = require("express");

// const {body.validationResult} = require("express-validator");

const Book = require("../model/book.model");
const uplode = require("../middlewares/upload");
const router = express.Router();

router.post("likes")
.trim()
.not()
.isEmpty()
.withMessage("minimum default is 0");


router.post("",uplode.single("profileImage"),async (req,res)=>{
    try{
        const books = await Book.create({
            coverImage:req.file.path,
        });
        return res.status(200).send(books);
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});
