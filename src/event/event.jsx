import React from 'react';
import "./event.css";
import { useNavigate } from "react-router-dom";
export function Event() {
  const navigate = useNavigate();
    const handleClick = () => {
    navigate("/calendar");
    };

    return(
        <main className="event_page">
            <h1 className='event-title'>Event</h1>
            <div className='event-container'>
                <h2 className='eventName'>Event name</h2>
                <h3 className='heading3'>January 5, 2025</h3>
                <p>2:00 PM - 3:00 PM</p>
                <h3 className='heading3'>📄Description:</h3>
                <section className='description-box'>
                    <p>this is where the description of the event will go</p>
                </section>
                <button className='back-to-calendar' onClick={handleClick}>Back to Calendar
                </button>  
            </div>
        </main>
    );
}  