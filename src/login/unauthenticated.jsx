import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Button } from "react-bootstrap";
export function Unauthenticated({userName, onLogin}) {
  const [email, setEmail] = React.useState(userName || '');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  async function handleLogin(e) {
    if (!email || !password) {
      setDisplayError("Please enter both email and password.");
      return;
    }
    localStorage.setItem("currentUser", email);
    onLogin(email);
  }
  async function handleRegister(e) {
     e.preventDefault();
    if (!email || !password) {
      setDisplayError("Please enter both email and password.");
      return;
    }
    localStorage.setItem("currentUser", email);
    onLogin(email);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleLogin();
  }
  return (
    <main className="login_page">
        <h1 className='gradient-title'>
            ULTIMATE CALENDAR
        </h1>
        <div className='main-container'>
        <h2 className='sign-in-text'>
            Sign In
        </h2>
         <form onSubmit={handleSubmit} className="w-full max-w-sm px-6">
            <div className='inputgroup'>
                <input
                type="text"
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
                className="border-none outline-none text-black text-base flex-1 bg-transparent placeholder-gray-500"
              />
            </div>
            <div className='inputgroup'>
                <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-none outline-none text-black text-base flex-1 bg-transparent placeholder-gray-500"
              />
            </div>
            <Button variant='primary' onClick={() => handleLogin()} disabled={!email || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => handleRegister()} disabled={!email || !password}>
          Create
        </Button>
         </form>
        </div>  
     </main>

  );
}