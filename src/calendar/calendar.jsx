import React, { useEffect, useState } from "react";
import "./calendar.css";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Calendar(props) {
  const [events, setEvents] = useState([]);
  const [reminder, setReminder] = useState(null);
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('currentUser');
    props.onLogout();
  }
  useEffect(() => { 
    fetch('/api/events').then(res => res.json()).then(data => {
      console.log("Fetched events:", data);
    });
    const username = localStorage.getItem("currentUser"); 
    if (username) { 
      const userEvents = JSON.parse(localStorage.getItem(username)) || []; 
      setEvents(userEvents); 
    } 
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const username = localStorage.getItem("currentUser");
      if (!username) return;

      const userEvents = JSON.parse(localStorage.getItem(username)) || [];
      const now = new Date();

      const upcoming = userEvents.find(ev => {
        const eventTime = new Date(ev.startTime);
        const diffMinutes = (eventTime - now) / 60000;
        return diffMinutes > 0 && diffMinutes <= 5;
      });

      if (upcoming) {
        setReminder(`🔔 Reminder: "${upcoming.eventTitle}" starts soon!`);
        setTimeout(() => setReminder(null), 10000);
      }
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthNames = [
    "January","February","March","April","May","June","July","August",
    "September","October","November","December"
  ];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks = [];
  let day = 1 - firstDay;

  while (day <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(day > 0 && day <= daysInMonth ? day : null);
      day++;
    }
    weeks.push(week);
  }

  const getEventsForDay = (dayNum) => {
    if (!dayNum) return [];
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
    return events.filter(ev => ev.startTime?.startsWith(date));
  };

  return (
    <div className="calendar-page">
      <h2>Welcome, {props.userName}</h2>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={() => navigate("/addEvent")}>+</button>
      </div>

      <h2 style={{ textAlign: "center" }}>{monthNames[month]} {year}</h2>

      <br />

      <table style={{ margin: "0 auto" }} cellSpacing="30" cellPadding="30">
        <thead>
          <tr>
            <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th>
            <th>Thu</th><th>Fri</th><th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((dayNum, j) => {
                const isToday =
                  dayNum &&
                  dayNum === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();

                return (
                  <td
                    key={j}
                    className={isToday ? "today" : ""}
                    style={{
                      border: isToday ? "2px solid #007bff" : "1px solid #ccc",
                      borderRadius: "8px",
                      minWidth: "60px",
                      verticalAlign: "top",
                      padding: "10px"
                    }}
                  >
                    {dayNum && (
                      <>
                        <div>{dayNum}</div>
                        {getEventsForDay(dayNum).map((ev) => (
                          <div key={ev.id}>
                            <button
                              onClick={() => navigate(`/event/${ev.id}`)}
                              style={{
                                display: "block",
                                width: "100%",
                                marginTop: "5px"
                              }}
                            >
                              {ev.eventTitle}
                            </button>
                          </div>
                        ))}
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='logout-section'>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
      </div>
      {reminder && (
        <div className="reminder-popup">
          {reminder}
        </div>
      )}
    </div>
  );
}
