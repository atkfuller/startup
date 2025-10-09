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
     <div className="flex flex-col items-center min-h-screen w-full bg-white text-gray-700">
        
        {/* Replicating the body > h1 with custom CSS class for gradient */}
        <h1 className="gradient-text-h1 mt-8">ULTIMATE CALENDAR</h1>

        {/* Replicating the main element with custom CSS class */}
        <main className="main-container">
          
          {/* Main heading inside the colored container */}
          <h1>Sign In</h1>

          {/* Form setup */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm px-6">
            
            {/* Input Group 1: Email */}
            {/* Note: 'input-group' class used here for custom focus-within styling */}
            <div className="input-group flex items-center mb-5 border border-gray-300 rounded-xl p-3 bg-white transition-all duration-300">
              {/* Using a span for the icon/emoji */}
              <span className="text-xl mr-3">@</span>
              {/* Input field. Note the self-closing tag and 'className' */}
              <input
                type="text"
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
                className="border-none outline-none text-black text-base flex-1 bg-transparent placeholder-gray-500"
              />
            </div>

            {/* Input Group 2: Password */}
            <div className="input-group flex items-center mb-8 border border-gray-300 rounded-xl p-3 bg-white transition-all duration-300">
              <span className="text-xl mr-3">🔒</span>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-none outline-none text-black text-base flex-1 bg-transparent placeholder-gray-500"
              />
            </div>

            {/* Submit Button */}
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