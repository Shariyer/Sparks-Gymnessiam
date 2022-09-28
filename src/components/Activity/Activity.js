import './Activity.css'
import React from 'react';

const Activity = (props) => {
    console.log(props);
    const{img,description,age,time,name}=props.activity
    return (
        <div className='activity-card'>
            <img src={img} alt="" />
            <h3>Activity Name:{name}</h3>
            <p>Benefit:{description}</p>
            <h6>Age:{age}</h6>
            <h6>Time:{time}</h6>
            <button className='add-activity-btn'>Add Activity</button>
        </div>
    );
};

export default Activity;