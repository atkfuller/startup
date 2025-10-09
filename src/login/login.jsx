import React from 'react';
import "./login.css";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/calendar");
  };
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
            <button type="submit">Login</button>
         </form>
        </div>  
     </main>

  );
}