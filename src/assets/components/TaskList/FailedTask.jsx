import React from "react";
const FailedTask =({data}) =>{
    return (
         <div className="h-full flex-shrink-0 w-[300px] p-5 bg-red-300 rounded-lg"> 
                <div className="flex justify-between items-center">
                    <h3 className="bg-blue-600 px-3 py-1  text-sm rounded">{data.category}
                    </h3>
                    <h4> {data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold"> {data.title} </h2>
                <p className="text-sm mt-2">
                  {data.description}
                </p>
                <div className="mt-2 flex justify-between ">
                 <button className="w-full ">Failed</button>
                
               </div>
             </div>
    )

}
export default FailedTask;


