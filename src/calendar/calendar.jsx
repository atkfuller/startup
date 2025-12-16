import React, { useEffect, useState } from "react";
import "./calendar.css";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Calendar(props) {
  const [events, setEvents] = useState([]);
  const [reminder, setReminder] = useState(null);
  const navigate = useNavigate();
  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'DELETE',
      credentials: 'include',
    }).then((response) => {
      console.log("Logout response:", response.status);
      if (!response.ok && response.status !== 204) {
        return response.text().then((text) => {
          throw new Error(`Logout failed: ${text}`);
        });
      }
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        navigate("/");
      });
  }
  useEffect(() => {
  async function fetchData() {
    try {
      const [eventsRes, holidaysRes] = await Promise.all([
        fetch("/api/events", { credentials: "include" }),
        fetch("/api/holidays/2025/US"),
      ]);

      const events = eventsRes.ok ? await eventsRes.json() : [];
      const holidays = holidaysRes.ok ? await holidaysRes.json() : [];
      console.log("Fetched events:", events);
      console.log("Fetched holidays:", holidays);

      const holidayEvents = holidays.map((h, index) => ({
        id: `holiday-${index}`,
        eventTitle: h.name,
        startTime: h.date.iso,
        endTime: h.date.iso,
        description: h.description || "Holiday",
      }));

      setEvents([...events, ...holidayEvents]);
    } catch (err) {
      console.error("Error fetching events/holidays:", err);
    }
  }

  fetchData();
}, []);
 //websocket for reminders
 
 useEffect(() => {
  const token = document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];

  if (!token) return;

  const isLocal = window.location.hostname === "localhost";

  const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";

  // If local dev: connect to backend port 4000
  // If deployed: connect to same origin as website
  const wsHost = isLocal 
    ? "localhost:4000" 
    : window.location.host;

  const ws = new WebSocket(`${wsProtocol}://${wsHost}/?token=${token}`);



  ws.onmessage = (msg) => {
    try {
      const data = JSON.parse(msg.data);

      if (data.type === "reminder") {
        setReminder(`🔔 Reminder: "${data.eventTitle}" starts in the next 5 minutes!`);
        setTimeout(() => setReminder(null), 12000);
      }
    } catch (err) {
      console.error("WS error:", err);
    }
  };

  ws.onopen = () => console.log("WebSocket connected");
  ws.onclose = () => console.log("WebSocket closed");

  return () => ws.close();
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
      {reminder && (
        <div className="reminder-popup">
          {reminder}
        </div>
      )}
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
                                  marginTop: "5px",
                                  backgroundColor: String(ev.id).startsWith("holiday-") ? "#a39ff7ff" : "" ,
                                  border: "none",      
                                  fontSize: String(ev.id).startsWith("holiday-") ? "10px" :"12px",
                                  opacity: String(ev.id).startsWith("holiday-") ? "0.5" : "1.0",
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
      
    </div>
  );
}
