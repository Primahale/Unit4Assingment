const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://PriyankaMahale:Priyanka31@cluster0.g6uh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
