import React from "react";
import "./calendar.css";
import { useNavigate } from "react-router-dom";

export default function Calendar({events}) {
   const [events, setEvents] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("currentUser");
    if (username) {
      const userEvents = JSON.parse(localStorage.getItem(username)) || [];
      setEvents(userEvents);
    }
  }, []);
  const navigate = useNavigate();
  const today= new Date();
  const year= today.getFullYear();
  const month= today.getMonth();
  const monthNames= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const firstDay= new Date(year, month, 1).getDay();
  const daysInMonth= new Date(year, month + 1, 0).getDate();
  const weeks=[];
  let day = 1-firstDay.getDay();
 
  while(day<=daysInMonth){
    const week=[];
    for(let i=0; i<7; i++){
      if(day>0 && day<=daysInMonth){
        week.push(day);
      } else {
        week.push(null);
      }
      day++;
    } 
    weeks.push(week);
  }
 const getEventsForDay = (dayNum) => {
  if(!dayNum) return [];
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
    return events.filter(ev => ev.date === date);
 };

  return (
    <div className="calendar-page">
      <h1>Welcome to Ultimate Calendar</h1>

      <div style={{ textAlign: "center", margin: "20px" }}>
       <button onClick={() => navigate("/addEvent")}>+</button>
      </div>

      <h2 style={{ textAlign: "center" }}> {monthNames[month]} {year}</h2>

      <br />

      <table
        style={{ margin: "0 auto" }}
        cellSpacing="30"
        cellPadding="30"
      >
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
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
                            <a href={`/event/${ev.id}`}>{ev.title}</a>
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

    </div>
  );
}
