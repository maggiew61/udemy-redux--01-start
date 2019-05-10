import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// import * as actionTypes from '../../store/action' //* is to import everything(all the constants)
import { Actions as actionTypes } from '../../store/action';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} /> {/*referring to the ctr property below*/}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} /> {/*will dispatch the method below*/}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>store result</button>
                <ul>
                    {this.props.storedResults.map(strResult =>(
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
//there are tons of states in store, so we map which parts of the states we want to pass to this component as props
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,  //state.counter is passed to ctr(prop name), which then can be used in this component
        storedResults: state.res.results
    }
}

//Dispatching Action
//we store the dispatch function; which calls dispatch in the store
//we can define some prop names which will hold;a reference to a function which should eventually get executed to dispatch an action.
const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter:()=>dispatch({type:actionTypes.INCREMENT,val:1}),
        onDecrementCounter: ()=>dispatch({type:actionTypes.DECREMENT,val:-1}),
        onStoreResult:(stateResult)=>dispatch({type:actionTypes.STORE_RESULT,result:stateResult}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RESULT,resultElId:id})
    }

}
//connect is a function that returns a higher order component;1st is for state argument, 2nd is for action;
//1st is none, can use null, 2nd argument can be omiited
export default connect(mapStateToProps,mapDispatchToProps)(Counter);