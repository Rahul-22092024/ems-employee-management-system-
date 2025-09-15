import React from "react";
const CompleteTask =({data}) =>{
    return (
         <div className="h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-lg"> 
                <div className="flex justify-between items-center">
                    <h3 className="bg-blue-600 px-3 py-1  text-sm rounded">{data.category}
                    </h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold"> {data.title} </h2>
                <p className="text-sm mt-2">
                  {data.description}
                </p>
                <div className="mt-2 flex justify-between ">
                 <button className="w-full bg-green-950 ">Completed</button>
                
               </div>
             </div>
    )

}
export default CompleteTask;