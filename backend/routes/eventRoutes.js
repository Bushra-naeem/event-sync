import express from "express";
import { Router as router } from "express";
import Event from "../models/Event.js";

// create a new event
router.post("/", async (req, res) => {
  const event = new Event({
    title: req.body.title,
    date: req.body.date,
    reminder: req.body.reminder || false,
  });
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
