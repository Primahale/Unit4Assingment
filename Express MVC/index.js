const express = require("express");

const userController = require("./controllers/user.controllers");
const studantsController = require("./controllers/studants.controllers");
const batchController = require("./controllers/batch.controller");
const evaluationController = require("./controllers/evaluation.controller");
const submittionController = require("./controllers/submittion.controller");

const app = express();

app.use(express.json());

app.use("/users",userController);
app.use("/studants",studantsController);
app.use("/batchs",batchController);
app.use("/evaluations",evaluationController);
app.use("/submitions",submittionController);

module.exports = app;