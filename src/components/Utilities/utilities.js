
const addToLocalStorage = (totalTime,breakTime) => {
    // console.log(id, totalTime, breakTime);
    let activitiesCart = {};

    //get the activities cart from local storage
     const storedActivities = localStorage.getItem('activities-cart');
     if(storedActivities){
         activitiesCart = JSON.parse(storedActivities);
     }

    // adding break time,total time in local storage 
    
     activitiesCart["TotalTime"]=totalTime;
     activitiesCart["BreakTime"]=breakTime;
   
     localStorage.setItem('activities-cart', JSON.stringify(activitiesCart));
}

const getStoredActivities = () => {
     
     let activitiesCart = {};

    //get the activities cart from local storage
     const storedActivities = localStorage.getItem('activities-cart');
     if(storedActivities){
         activitiesCart = JSON.parse(storedActivities);
     }  
    
    return activitiesCart;
}

export {
    addToLocalStorage,
    getStoredActivities
}