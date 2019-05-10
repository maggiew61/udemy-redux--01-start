// import * as actionTypes from './action' //* is to import everything(all the constants)
import { Actions as actionTypes } from '../action';

const initialState = {
    results:[]
}
const reducer = (state=initialState,action) =>{
    switch(action.type){
        // benefit of chanign 'INCREMENT' to actionst..Inc
    // is if we misspell it, the envinorment will let us know the error
        case actionTypes.STORE_RESULT:
        return{
            ...state,
            // results: state.results.concat({id: new Date(),value:state.counter})
            results: state.results.concat({id: new Date(),value:action.result})
        }
        case actionTypes.DELETE_RESULT:
        const updatedArray = state.results.filter(result =>result.id!==action.resultElId )
        return{
            ...state,
            results: updatedArray
        }
    }
    return state; 
}
export default reducer;