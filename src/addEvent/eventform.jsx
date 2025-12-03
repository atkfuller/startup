import React, { useState } from "react";
import "./eventform.css";
import { useNavigate } from "react-router-dom";

export default function AddEvent() {
  console.log("AddEvent current user:", localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const [eventTitle, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      alert("No user logged in! Please log in first.");
      navigate("/");
      return;
    }
    const utcStart = new Date(startTime).toISOString();
    const utcEnd = new Date(endTime).toISOString();

    const newEvent = {
      id: Date.now(),
      eventTitle,
      startTime: utcStart,
      endTime: utcEnd,
      description,
    };
    const res = await fetch("/api/events", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventTitle, startTime, endTime, description}),
    });
    const existingEvents = JSON.parse(localStorage.getItem(currentUser)) || [];
    const updatedEvents = [...existingEvents, newEvent];

    localStorage.setItem(currentUser, JSON.stringify(updatedEvents));

    navigate("/calendar");
  };

  return (
    <div className="eventform-page">
      <main>
        <h1>Add New Calendar Event</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="eventTitle">Event Title:</label>
            <input
              type="text"
              id="eventTitle"
              name="eventTitle"
              value={eventTitle}
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
              value={startTime}
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
              value={endTime}
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
              value={description}
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
