import React, { use, useContext, useEffect } from "react";
import Login from "./assets/components/Auth/Login.jsx";
import EmployeeDashboard from "./assets/components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./assets/components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx";

import { useState } from "react";
import { AuthContext } from "./assets/context/AuthProvider.jsx";
const App = () =>{

  useEffect(() => {   //useeffect is use to run the function in side stack
    setLocalStorage();
    getLocalStorage();
  },)

const [user, setUser] = useState(null); //useState is used to create a state variable user and setUser is used to update the state variable user
const [loggedInUserData,setLoggedInUserData] = useState(null);
const [userData ,setUserData] = useContext(AuthContext); //useContext is used to access the context value from AuthContext

useEffect(() => {
  
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data)

    }
     
  },[]);

const handleLogin = (email,password) =>{
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}));
  }
  else if(userData){
    const employee= userData.find((e) => email == e.email && password == e.password)
     if(employee){
     setUser('employee'); 
     setLoggedInUserData(employee);
     localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}));
    }
  }
  else{
    alert("Invalid credentials");
  }
}

   
return (
    <>
   
     {!user ? <Login handleLogin={handleLogin} />: " "} 
     {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user=="employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> :null)}    


     {/* <EmployeeDashboard /> */}
     {/* <AdminDashboard /> */}
    </>
  )
} 
export default App;