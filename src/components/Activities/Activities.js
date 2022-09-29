import './Activities.css'
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Operation from '../Operation/Operation';
import { addToLocalStorage, getStoredActivities } from '../Utilities/utilities';


const Activities = () => {
     
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => { setActivities(data); })
        
    }, [])
    
    
    let [breakTime,setBreakTime]=useState(0)
    
    const btnHandler1 = () => {
        breakTime = 1;
        setBreakTime(breakTime)
        addToLocalStorage(totalTime, breakTime);
    }
    const btnHandler2 = () => {
        breakTime = 2;
        setBreakTime(breakTime)
        addToLocalStorage(totalTime, breakTime);
    }
    const btnHandler3 = () => {
        breakTime = 3;
        setBreakTime(breakTime)
        addToLocalStorage(totalTime, breakTime);
    }
    const btnHandler4 = () => {
        breakTime = 4;
        setBreakTime(breakTime)
        addToLocalStorage(totalTime, breakTime);
    }
    const btnHandler5 = () => {
        breakTime = 5;
        setBreakTime(breakTime)
        addToLocalStorage(totalTime, breakTime);
    }
    // calculating total time
    let totalTime =0;
    const clickHandlerAddToOperation = (activity)=>{
        
        totalTime = totalTime + activity.time;
        addToLocalStorage(totalTime, breakTime);
        
    }
    // for showing data 
    
    useEffect(() => {
        const storedActivities = getStoredActivities();
       
    },[breakTime,totalTime])
    
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