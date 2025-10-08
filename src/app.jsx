import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { AddEvent } from './addEvent/adddEvent';
import { Calendar } from './calendar/calendar';
import { Event } from './event/event';

export default function App() {
  return (
    <BrowserRouter>
    <div className="body bg-light text-dark">

      <Routes>
    <Route path='/' element={<Login />} exact />
    <Route path='/play' element={<AddEvent />} />
    <Route path='/scores' element={<Calendar />} />
    <Route path='/about' element={<Event />} />
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