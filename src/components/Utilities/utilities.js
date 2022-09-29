
const addToLocalStorage = (id) => {
    
    let activitiesCart = {};

    //get the activities cart from local storage
    const storedActivities = localStorage.getItem('activities-cart');
    if(storedActivities){
        activitiesCart = JSON.parse(storedActivities);
    }

    // adding time in
    // const time = activitiesCart[id];
    
    if(quantity){
        const newQuantity = quantity + 1;
        activitiesCart[id] = newQuantity;
    }
    else{
        activitiesCart[id] = 1;
    }
    localStorage.setItem('activities-cart', JSON.stringify(activitiesCart));
}



export {
    addToLocalStorage    
}