
const addToLocalStorage = (param) => {
    
    let activitiesCart = {};

    //get the activities cart from local storage
    const storedActivities = localStorage.getItem('activities-cart');
    if(storedActivities){
        activitiesCart = JSON.parse(storedActivities);
    }

    // adding time in
    // const time = activitiesCart[param];
    
    if(quantity){
        const newQuantity = quantity + 1;
        activitiesCart[param] = newQuantity;
    }
    else{
        activitiesCart[param] = 1;
    }
    localStorage.setItem('activities-cart', JSON.stringify(activitiesCart));
}



export {
    addToLocalStorage    
}