const redux = require('redux')
const createStore = redux.createStore

//initlize the state
const initialState = { //or can be an integer
    counter: 0
}

//Reducer
//store gets initlzied as a reducer
//only 1 reducer; even multiple will get complied to 1 later on
//if state is undefined, it will use the default value instead
//when store gets created for the 1st time, it will get undefined.
const rootReducer = (state = initialState,action) => {
    if(action.type === 'INC_COUNTER'){
        /*don't do this, cuz state is not mutable*/
        // state.counter +++;
        // return state;
        return {
            ...state, //copy the original state w/ sprea operator
            counter:state.counter +1 //change the state here
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter:state.counter + action.value
        }
    }
    return state; //return the old state
}  

//Store
const store = createStore(rootReducer); //pass the root reducer to the store
console.log('store',store.getState())  //{ counter: 0 }

//Subscription
//Now subscribe takes an argument, a function which will be executed when ever the state is updated,
// so whenever an action reached the reducer.
//will be executed whenever action is dispatched and mutates the store.
//console.log happens not becuz its before the action, 
//but becuz subscribe gets triggered when ever action is dispatched and mutates the
//store
store.subscribe(()=>{console.log('[subscription]',store.getState())})
// store.subscribe(function(){
//     console.log('[subscription]',store.getState())
// })


//Dispatching Action
//take action as an argument; type refers to the type of the property
//convention is to use upper case naming
//type is a fixed property name; other property names can be any
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER',value:10})  //{ counter: 11 }
console.log('end',store.getState())

