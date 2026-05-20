const express = require("express");

const router = express.Router();

const Note = require("../models/Note");


// CREATE NOTE
router.post("/notes", async (req, res) => {

  try {

    const note = new Note(req.body);

    await note.save();

    res.status(201).json(note);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// GET ALL NOTES
router.get("/notes", async (req, res) => {

  try {

    const notes = await Note.find();

    res.json(notes);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// ANALYTICS: NOTES PER CATEGORY
router.get("/notes-per-category", async (req, res) => {

  try {

    const analytics = await Note.aggregate([

      {
        $group: {
          _id: "$category",
          totalNotes: { $sum: 1 }
        }
      },

      {
        $project: {
          _id: 0,
          category: "$_id",
          totalNotes: 1
        }
      }

    ]);

    res.json(analytics);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// ANALYTICS: NOTES PER USER
router.get("/notes-per-user", async (req, res) => {

  try {

    const analytics = await Note.aggregate([

      {
        $group: {
          _id: "$user",
          totalNotes: { $sum: 1 }
        }
      },

      {
        $project: {
          _id: 0,
          user: "$_id",
          totalNotes: 1
        }
      }

    ]);

    res.json(analytics);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// ANALYTICS WITH FILTER (USER + DATE RANGE)
router.get("/filtered-analytics", async (req, res) => {

  try {

    const { user, startDate, endDate } = req.query;

    const matchStage = {};

    // FILTER BY USER
    if (user) {
      matchStage.user = user;
    }

    // FILTER BY DATE RANGE
    if (startDate && endDate) {

      matchStage.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };

    }

    const analytics = await Note.aggregate([

      {
        $match: matchStage
      },

      {
        $group: {
          _id: "$category",
          totalNotes: { $sum: 1 }
        }
      },

      {
        $project: {
          _id: 0,
          category: "$_id",
          totalNotes: 1
        }
      }

    ]);

    res.json(analytics);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

module.exports = router;