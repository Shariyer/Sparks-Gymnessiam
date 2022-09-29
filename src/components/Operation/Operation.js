import React from 'react'
import './Operation.css'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()
const Operation = (props) => {
    console.log(props)
    const { btnHandler1, btnHandler2, btnHandler3, btnHandler4, btnHandler5, breakTime } = props;
    
    // const notify = () => toast("Wow so easy!");
   
     return (
         <div className='operation-container'>

             <div className='profile-container'>
                 <img src="shariyer.jpg" alt="" />
                 <div className='profile-details'>
                     <h3>Name: S.M Shariyer</h3>
                     <p>Address: Khilkhet,Dhaka</p>
                 </div>

             </div>
             <div className='personal-info'>
                 <div>
                   <h2>60 <span>kg</span></h2>
                     <h3>Weight</h3>
                 </div>
                 <div>
                     <h2>24 <span>yr</span></h2>
                     <h3>Age</h3>
                 </div>
                <div>
                     <h2>5'5.5" <span>ft</span></h2>
                     <h3>Height</h3>
                 </div>
             </div>

             <div className='break-container'>
                 <h2>Add Break Time:</h2>
                 <div className='break-buttons'>
                 <button onClick={btnHandler1}>1 min</button>
                 <button onClick={btnHandler2}>2 min</button>
                 <button onClick={btnHandler3}>3 min</button>
                 <button onClick={btnHandler4}>4 min</button>
                 <button onClick={btnHandler5}>5 min</button>
                 </div>
             </div>
             <div className='exercise-details'>
                 <h2>Exercise Details:</h2>
                 <h3 className='total-time'>Total Exercise Time:</h3>
                 <h3 className='break-time'>Break Time: {breakTime} Minutes</h3>
                 <button  className='activity-completed-btn'>Activity Completed</button>

             </div>
         </div>
     );
 };
 export default Operation;