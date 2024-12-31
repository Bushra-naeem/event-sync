import { useEffect, useState } from "react";
import axios from "axios";
import EventForm from "./components/EventForm";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // fetch events from the server
    axios
      .get("http://localhost:5000/api/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEventAdd = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  return (
    <div>
      <h1>Event Management App</h1>
      <EventForm onEventAdd={handleEventAdd} />
    </div>
  );
}

export default App;
