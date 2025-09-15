import React from "react";  
import AcceptTask from "./AceeptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
const TaskList = ({data}) => {
    console.log({data})
    return (
        <div  id="tasklist" className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-60 py-5  w-full mt-10 rounded-lg">
              {data.tasks.map((elem, idx)=>{
                if(elem.active){
                    return <AcceptTask key={idx} data={elem} />
                }
               if(elem.NewTask){
                return <NewTask key={idx} data={elem}  />
               } 
               if(elem.completed){
                return <CompleteTask  key={idx} data={elem}  />
               }
               if(elem.failed){
                return <FailedTask  key={idx} data={elem}   />
               }
              }
            )}
              
             
                
             
        </div>

    );
}
export default TaskList;  // 2:28