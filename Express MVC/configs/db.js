const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect(
        "mongodb+srv://PriyankaMahale:Priyanka31@cluster0.g6uh2.mongodb.net/mvc"

    )
}

module.exports = connect;