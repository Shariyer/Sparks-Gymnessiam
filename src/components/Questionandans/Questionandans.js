import React from 'react';
import './Questionandans.css'

const Questionandans = () => {
    return (
        <div className='q-a'>
            <div>
                    <h3>How does react work?</h3>
                    <p>Ans: React is javascript library for building user Interface.It is fast,declarative,flexible and efficient as well as component based. Real DOM is difficult to change every time so whenever any changes happened in component it simply compare the changes with previous one by creating virtual DOM. When it finds the changes of node it adjusted those specific changes and add them with the previous one.</p>
                </div>
                <div>
                    <h3>Difference between props and state?</h3>
                    <p>Ans:Props are used to transfer information from one component to another. The state is a local data store that is exclusively available to the component and cannot be shared with other components. Props are read only but state can change.Props are immutable whether, states are mutable. </p>
                </div>
                <div>
                    <h3>What's other purpose of of using UseEffect ?</h3>
                    <p>Ans:Other than fetching data, useEffect also works directly updating the DOM , and timers as well as we can set dependency for asynchronous functions.</p>
                </div>
        </div>
    );
};

export default Questionandans;