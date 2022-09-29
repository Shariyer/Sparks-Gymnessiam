import './Activities.css'
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Operation from '../Operation/Operation';

const Activities = () => {
     
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => { setActivities(data); })
        
    }, [])
    
    
    
    const clickHandlerAddToOperation = (activity)=>{
        let totalTime =0;
        totalTime  = totalTime + activity.time;
        console.log(totalTime);
        return totalTime;
    }

     let [breakTime,setBreakTime]=useState(0)

     const btnHandler1 = () => {
         breakTime = 1;
         setBreakTime(breakTime)
     }
     const btnHandler2 = () => {
         breakTime = 2;
         setBreakTime(breakTime)
     }
     const btnHandler3 = () => {
         breakTime = 3;
         setBreakTime(breakTime)
     }
     const btnHandler4 = () => {
         breakTime = 4;
         setBreakTime(breakTime)
     }
     const btnHandler5 = () => {
         breakTime = 5;
         setBreakTime(breakTime)
     }

    return (
        <div className='all-activities'>
            <div className='activities'>
                
            {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}

                        handleClickAddTime={clickHandlerAddToOperation}>
                    </Activity>)
            }
            </div>
            <div className='profile-operation-container'>
                <Operation
                    breakTime={breakTime}
                btnHandler1={btnHandler1}
                btnHandler2={btnHandler2}
                btnHandler3={btnHandler3}
                btnHandler4={btnHandler4}
                btnHandler5={btnHandler5}
                ></Operation>
           </div>
            
            
        </div >
        
          
    );
};

export default Activities;