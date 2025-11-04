import React, { useEffect, useState } from "react";
import "./event.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Event() {
  const navigate = useNavigate();
  const { id } = useParams(); // get event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
  fetch(`/api/events/${id}`, { credentials: 'include' })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setEvent(data);
      } else if (response.status === 404) {
        console.warn("Event not found");
        setEvent(null);
      } else if (response.status === 401) {
        alert("Please log in again.");
        navigate("/");
      }
    })
    .catch((err) => console.error("Failed to fetch event:", err));
}, [id, navigate]);

  if (!event) {
    return (
      <div className="event-page">
        <h1>Event Not Found</h1>
        <p>We couldn’t find this event. It may have been deleted.</p>
        <button onClick={() => navigate("/calendar")}>Back to Calendar</button>
      </div>
    );
  }

  // Format date/time nicely
  const start = new Date(event.startTime);
  const end = new Date(event.endTime);

  const dateString = start.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeString = `${start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

  return (
    <div className="event-page">
      <h1>Event Details</h1>
      <main>
        <h2>{event.eventTitle}</h2>
        <h3>{dateString}</h3>
        <p>{timeString}</p>

        <h3>📄 Description:</h3>
        <section>
          <p>{event.description || "No description provided."}</p>
        </section>

        <button onClick={() => navigate("/calendar")}>Go to Calendar</button>
      </main>
    </div>
  );
}
