/**
 * Created by Dotan on 30-Jun-16.
 */


const counter = (state = 0 , action = 'INCREMENT')=>{
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
    return state;
};

export default counter;

