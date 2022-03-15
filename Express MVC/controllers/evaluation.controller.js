const express = require("express");

const Evaluation = require("../models/evaluation.models.js");

const router = express.Router();

// Student
router.get("", async (req, res) => {
  try {
    const evl = await Evaluation.find().lean().exec();

    return res.status(200).send({ student: evl }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const evl = await Evaluation.findById(req.params.id).lean().exec();

    return res.status(200).send(evl);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const evl = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(evl);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const evl = await Evaluation.create(req.body);

    return res.status(200).send(evl);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const evl = await Evaluation.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(evl);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
