import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/calendar");
  };

  return (
     <div className="flex flex-col items-center min-h-screen w-full bg-white text-gray-700">
      
        <h1 className="gradient-text-h1 mt-8">ULTIMATE CALENDAR</h1>

        <main className="main-container">
         <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
        </main>
      </div>
  );
}