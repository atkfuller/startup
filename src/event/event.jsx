import React from "react";
import "./event.css";
import { useNavigate } from "react-router-dom";

export default function Event() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Event</h1>

      <main>
        <h2>Event name</h2>
        <h3>January 5, 2025</h3>
        <p>2:00 PM - 3:00 PM</p>

        <h3>📄 Description:</h3>
        <section>
          <p>This is where the description of the event will go.</p>
        </section>

        
         <button onClick={() => navigate("/calendar")}>Go to Calendar</button>
      </main>
    </div>
  );
}