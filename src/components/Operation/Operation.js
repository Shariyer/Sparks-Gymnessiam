import './Operation.css'
import React from 'react';

const Operation = () => {
    return (
        <div className='operation-container'>

            <div className='profile-container'>
                <img src="" alt="" />
                <div className='profile-details'>
                    <h3>Name:</h3>
                    <p>Address:</p>
                </div>
            </div>

            <div className='break-container'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
            </div>
            <div className='exercise-details'>
                <h3>Total Exercise Time:</h3>
                <h3>Break Time:</h3>
                <button>Activity Completed</button>

            </div>
        </div>
    );
};

export default Operation;