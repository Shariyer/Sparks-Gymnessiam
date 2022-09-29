import './Activity.css'
import React from 'react';

const Activity = (props) => {
    
    const { handleClickAddTime,activity } = props;
    const { img, description, age, time, name } = activity;
    return (
        <div >
            <div className='activity-card'>
                <img src={img} alt="" />
            <h3>Activity Name:{name}</h3>
            <p>Benefit:{description}</p>
            <h6>Age:{age}</h6>
            <h6>Time:{time}</h6>
            <button onClick={()=>handleClickAddTime(activity)} className='add-activity-btn'>Add Activity</button>
            </div>
            
            
        </div>
    );
};

export default Activity;