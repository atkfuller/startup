import React, { useState } from "react";
import "./eventform.css";
import { useNavigate } from "react-router-dom";

export default function AddEvent({setEvents}) {
  const navigate = useNavigate();
  const [formData, setEvents] = useState({
    eventTitle: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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