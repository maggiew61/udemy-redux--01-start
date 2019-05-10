// import * as actionTypes from './action' //* is to import everything(all the constants)
import { Actions as actionTypes } from '../action';

const initialState = {
    counter:0,
 }
const reducer = (state=initialState,action) =>{
    switch(action.type){
        // benefit of chanign 'INCREMENT' to actionst..Inc
    // is if we misspell it, the envinorment will let us know the error
        case actionTypes.INCREMENT:
        const newState = Object.assign({},state);
        newState.counter = state.counter +1
        return newState;
        // return{
        //     ...state,
        //     counter: state.counter+action.val
        // }
        case actionTypes.DECREMENT:
        return{
            ...state,
            counter: state.counter+action.val
        }
    }
         
    // if(action.type === 'INCREMENT'){
    //     return{
    //         counter: state.counter+action.val
    //     }
    // }else if(action.type === 'DECREMENT'){
    //     return{
    //         counter: state.counter+action.val
    //     }

    // }
    return state; 
}
export default reducer;