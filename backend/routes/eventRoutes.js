import express from "express";
import Event from "../models/Event.js";
const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new event
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

// Delete an event
router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    console.log("Event Deleted");
    res.json({ message: "Event deleted" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: error.message });
  }
});

// Update an event by ID
router.put("/:id", async (req, res) => {
  const eventId = req.params.id;
  const { title, date, reminder } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Update the event properties
    event.date = date;
    event.title = title;
    event.reminder = reminder;
    console.log("Event updated", event.reminder);

    // Save the updated event
    await event.save();
    res.json(event);
  } catch (error) {
    console.error("Error updating event", error);
    res.status(500).json({ message: "Internal Serever Error" });
  }
});

export default router;
