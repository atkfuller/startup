import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('currentUser');
    props.onLogout();
  }

  return (
    <div>
      <div className='authenticated'></div>
      <h2>Welcome, {props.userName}</h2>
      <Button variant='primary' onClick={() => navigate('/calendar')}>
        Go to Calendar
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}