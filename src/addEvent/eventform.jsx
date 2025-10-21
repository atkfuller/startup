import React, { useState } from "react";
import "./eventform.css";
import { useNavigate } from "react-router-dom";

export default function AddEvent({setEvents}) {
  const navigate = useNavigate();
  const [eventTitle, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState(""); 


  const handleSubmit = (e) => {
    e.preventDefault();
     const newEvent = {
      id: Date.now(),
      eventTitle,
      startTime,
      endTime,
      description,
    };
    const username = localStorage.getItem("currentUser");
    if (username) {
      const userEvents = JSON.parse(localStorage.getItem(username)) || [];
      userEvents.push(newEvent);
      localStorage.setItem(username, JSON.stringify(userEvents));
    }
    setEvents((prev) => [...prev, newEvent]);
    navigate("/calendar");
  };

  return (
    <div class ="eventform-page">
    <main>
      <h1>Event</h1>
      <form onSubmit={handleSubmit}>
        <h2>Add New Calendar Event</h2>

        <div>
          <label htmlFor="eventTitle">Event Title:</label>
          <input
            type="text"
            id="eventTitle"
            name="eventTitle"
            value={formData.eventTitle}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="datetime-local"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="endTime">End Time:</label>
          <input
            type="datetime-local"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="Add Event" />
        </div>
      </form>
    </main>
    </div>
  );
}