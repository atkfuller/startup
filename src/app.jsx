import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login  from './login/login.jsx';
import AddEvent from './addEvent/eventform.jsx';
import Calendar from './calendar/calendar.jsx';
import  Event  from './event/event.jsx';

export default function App() {
  const [events, setEvents] = useState([]);
  return (
    <BrowserRouter>
    <div className='body'>
      <Routes>
    <Route path='/' element={<Login />} exact />
    <Route path='/addEvent' element={<AddEvent setEvents={setEvents}/>} />
    <Route path='/calendar' element={<Calendar events={events} />} />
    <Route path='/event' element={<Event />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
      <footer>
            <p>Created by <a href="https://github.com/atkfuller/startup.git" target="_blank">My GitHub</a></p>
        </footer>
    </div>
    </BrowserRouter>
  );
  
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}