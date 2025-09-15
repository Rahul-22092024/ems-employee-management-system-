import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
   const  [userData,setUserData]= useContext(AuthContext)
    return (
        <div id="AllTask" className="bg-[#1c1c1c] p-5  mt-5 rounded    ">
            <div className="bg-pink-400 py-2 px-4 flex justify-between rounded mt-2">
                <h2 className="w-1/5 ">Employee Name</h2>
                <h3 className="w-1/5 ">New Task </h3>
                <h5 className="w-1/5 ">Active Task</h5>
                <h5 className="w-1/5 ">Completed</h5>
                <h5 className="w-1/5 ">Failed</h5>
            </div>
          <div className="   overflow-auto">
              {userData.map(function(elem ,idx){
                return <div key={idx} className="border-2 border-emerald-600 py-2 px-4 flex justify-between rounded mt-2">
                <h2 className="w-1/5 text-white-300">{elem.firstName}</h2>
                <h3 className="w-1/5 text-yellow-600">{elem.taskStats.newTask} </h3>
                <h5 className="w-1/5 text-green-600">{elem.taskStats.active}</h5>
                <h5 className="w-1/5 text-pink-600">{elem.taskStats.completed}</h5>
                <h5 className="w-1/5 text-pink-600">{elem.taskStats.failed}</h5>
            </div>

            })}
          </div>     
            

</div>

    )
}
export default AllTask;