import React, { useState } from "react";
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
     <div className="login-page">
      <h1>ULTIMATE CALENDAR</h1>
      <main>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
           <div className="input-group">
            <span>@</span>
             <input
           type="text"
               placeholder="your@email.com"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              required
             />
           </div>
            <div className="input-group">
            <span>🔒</span>
             <input
               type="password"
               placeholder="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
             />
         </div> 
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
    // <div className="login-page">
    //   <h1>ULTIMATE CALENDAR</h1>

    //   <main>
    //     <div className="main-body">
    //     <h1>Sign In</h1>

    //     <form onSubmit={handleSubmit}>
    //       <div className="input-group">
    //         <span>@</span>
    //         <input
    //           type="text"
    //           placeholder="your@email.com"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //       </div>

    //       <div className="input-group">
    //         <span>🔒</span>
    //         <input
    //           type="password"
    //           placeholder="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //         />
    //     </div> 
    //       <button type="submit">Login</button>
    //     </form>
    //     </div>.
    //   </main>
    // </div>
  );
}