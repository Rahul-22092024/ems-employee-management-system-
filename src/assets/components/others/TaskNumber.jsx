import React from "react";
 const TaskNumber = ({data}) => {
    return (
        <div  className="flex mt-10 justify-between gap-5 min-w overflow-x-auto flex-nowrap">
            <div className=" rounded-xl bg-red-400 w-[45%] px-9 py-6">
                <h2 className="text-3xl">{data.taskStats.failed}</h2>
                <h3 className="text-xl font-medium">  Failed Task </h3>
            </div>
              <div className=" rounded-xl bg-blue-400 w-[45%] px-9 py-6">
                <h2 className="text-3xl">{data.taskStats.newTask}</h2>
                <h3 className="text-xl font-medium">  New Task </h3>
            </div>
              <div className=" rounded-xl bg-green-400 w-[45%] px-9 py-6">
                <h2 className="text-3xl">{data.taskStats.completed}</h2>
                <h3 className="text-xl font-medium">  Completed Task </h3>
            </div>
              <div className=" rounded-xl bg-yellow-400 w-[45%] px-9 py-6">
                <h2 className="text-3xl">{data.taskStats.active}</h2>
                <h3 className="text-xl font-medium">  Accepted Task </h3>
            </div>
             
        </div>

    );
}
export default TaskNumber;
        