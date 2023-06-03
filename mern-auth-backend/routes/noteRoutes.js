const express = require("express");
const router = express.Router();

// Note Model
const Note = require("../models/Notes");

// Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get non-public notes
router.get("/private", async (req, res) => {
  try {
    const nonPublicNotes = await Note.find({ isPublic: false });
    res.json(nonPublicNotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new note
router.post("http://localhost:3000/Createnotes", async (req, res) => {
    console.log("skdjnclsjdnlsjd")
  const { title, content, isPublic } = req.body;

  try {
    const newNote = new Note({
      title,
      content,
      isPublic,
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
