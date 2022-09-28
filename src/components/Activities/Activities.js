import './Activities.css'
import React from 'react';
import Activity from '../Activity/Activity';
import Operation from '../Operation/Operation';

const Activities = () => {



    return (
        <div className='all-activities'>
            <Activity></Activity>
            <Operation></Operation>
        </div>
    );
};

export default Activities;