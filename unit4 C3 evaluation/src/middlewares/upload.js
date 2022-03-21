const path = require("path");
const multer = require("multer");
const req = require("express/lib/request");
const { error } = require("console");

const Storage = multer.diskStorage({
    destination:function(req,file,callback){
        const uniquePrefix = Date.now();
        callback(null,uniquePrefix + "-"+file.originalname);
    }
});


const fileFilter = (req,file,callback)=>{
    if(file,mimetype ==="image/jpeg" || file.mimetype === "image/png"){
        callback(null,true);
    }
    else{
        callback(new error("IIncorrect mime type"),false)
    }
};

const options = {
    Storage,
    fileFilter,
    limits:{
        fileSize : 1024*1024*5
    },
};

const uplode = multer(options);

module.exports = uplode