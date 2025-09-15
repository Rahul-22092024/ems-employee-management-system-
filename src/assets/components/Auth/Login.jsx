import React from "react";
import { useState } from "react";
const Login = ({handleLogin}) => {
  

 



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    handleLogin(email, password);    // passing data from child to parent component
    setEmail("");
    setPassword("");
    
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center ">
        <div className="border-2  border-emerald-600 p-20 rounded-md ">
            <form 
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center">
              <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               required className="border-2  border-emerald-600  py-4 px-5 text-xl  text-white oultine-none bg-transparent rounded-full placeholder:text-gray-400 " type="email"  placeholder="enter your email"/>
              <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
              required className="border-2 mt-3 border-emerald-600 py-4 px-5 text-xl  text-white moultine-none bg-transparent rounded-full placeholder:text-gray-400 " type="password" placeholder=" enter password" />
              <button className="border-none mt-5 bg-emerald-600 py-4 px-5 text-xl  text-white oultine-none  rounded-full w-60 placeholder:text-white">Login</button>
                
            </form>

        </div>

    </div>
  )}
  export default Login;
    
