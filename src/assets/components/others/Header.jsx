import React from "react";
import { useState } from "react";

const Header = (props) => {
     
        // const[username,setUsername] = useState("");
        // if(!data){
        //     setUsername("Admin");
        // }
        // else{
        //     setUsername(data.firstName);
        // }

        const logout = () => {
            localStorage.removeItem("loggedInUser");
            props.changeUser('');
            // window.location.reload();
        }
     
    return (
        <div className="flex items-end justify-between">
            <h1 className="text-2xl font-medium ">
                Hello <br />
                <span className="text-3xl font-semibold"> Admin</span>
                </h1>
            <button onClick={logout} className="bg-red-600 text-lg font-medium px-5 py-2 text-white rounded-sm">Log Out</button>

        </div>
        
    );
    }
export default Header;