import { Actions as actionTypes } from '../action';

const initialState = {
   result_test:[]
}
// 
const reducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.ADD_NAME:
        return{
            ...state,
            result_test:state.result_test.concat({id:new Date(),name:action.name,age:action.age})
        }
        case actionTypes.DELETE_NAME:
        return{
            // words.filter(i => i.length > 5)
            ...state,
            result_test:state.result_test.filter(i => i.id !== action.id)
        }
    }
    return state; 
}
export default reducer;