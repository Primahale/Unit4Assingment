const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { v4:uuidv4} = require("uuid");

// const User = require("")

require("dotenv").config()

// passport.use(new GoogleStrategy({
//     clientID: process.env.
// }))