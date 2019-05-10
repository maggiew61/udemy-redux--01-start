import React, { Component } from 'react';
import {connect} from 'react-redux'
import TestControl from '../../components/TestControl/TestControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// import * as actionTypes from '../../store/action' //* is to import everything(all the constants)
import { Actions as actionTypes } from '../../store/action';


class Test extends Component {
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
                <TestControl buttonName = "add a person" clicked={this.props.foo}/>
                <ul>
                {this.props.test.map(i =>(
                    <li onClick={()=>this.props.deleteMax(i.id)}>
                        <h1>{i.name}</h1>
                        <p>{i.age}</p>
                    </li>
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
        storedResults: state.res.results,
        test:state.test.result_test
    }
}

//Dispatching Action
//we store the dispatch function; which calls dispatch in the store
//we can define some prop names which will hold;a reference to a function which should eventually get executed to dispatch an action.
const mapDispatchToProps = dispatch =>{
    return{
        foo: (name,age) => dispatch({type:actionTypes.ADD_NAME,name,age}),
        deleteMax: (id) => dispatch({type:actionTypes.DELETE_NAME,id:id}) 
    }

}
//connect is a function that returns a higher order component;1st is for state argument, 2nd is for action;
//1st is none, can use null, 2nd argument can be omiited
export default connect(mapStateToProps,mapDispatchToProps)(Test);