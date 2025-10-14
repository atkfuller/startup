import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('user');
    props.onLogout();
  }

  return (
    <div>
      <div className='authenticated'>{props.email}</div>
      <Button variant='primary' onClick={() => navigate('/calendar')}>
        Play
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}