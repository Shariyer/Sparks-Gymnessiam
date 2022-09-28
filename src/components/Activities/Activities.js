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
        
    },[])


    return (
        <div className='all-activities'>
            <div className='activities'>
                
            {
                 activities.map(activity=><Activity key={activity.id} activity={activity}></Activity>)
            }
            </div>
            <div className='profile-operation-container'>
               <Operation></Operation>
           </div>
            
            
        </div >
        
          
    );
};

export default Activities;