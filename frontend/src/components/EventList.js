import React, { useState } from "react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventItem key={event._id} />
      ))}
    </div>
  );
};

export default EventList;
