import React from 'react';
import "./eventform.css";
import { useNavigate } from "react-router-dom";

export function Event() {
const navigate = useNavigate();
const [formData, setFormData] = useState({
    eventTitle: "",
    startTime: "",
    endTime: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/calendar");
  };
    return(

<main className="eventform-page">
            <h1 className='h1-text'>
                ULTIMATE CALENDAR
            </h1>
            <div className='main-container'>
            <h2 className='eventform-text'>
                Create Event
            </h2>
             <form className="w-full max-w-sm px-6">
                <div className='form-sheet'>
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
                <button type="submit">Create Event</button>
             </form>
            </div>  
         </main>
    );
}
