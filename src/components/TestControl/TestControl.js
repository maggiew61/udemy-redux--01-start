import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Actions as actionTypes } from '../../store/action';

class testControl extends React.Component {
    state = {
        name:'',
        age:0
    }
    switchNameHandler = event =>{
        this.setState({
         name:event.target.value,
       })
     }    
     switchAgeHandler = event =>{
        this.setState({
         age:event.target.value
       })
     }    
    render () {
        return (
            <div>
                <input type="text" placeholder = 'name' onChange={this.switchNameHandler} value={this.state.name} />
                <input type="text" placeholder = 'age' onChange={this.switchAgeHandler} value={this.state.age} />
                
                {/* pass props to child class  */}
                {/* https://stackoverflow.com/questions/40662893/how-to-pass-props-from-one-class-to-another-in-react-js */}
                <button onClick={()=>this.props.clicked(this.state.name,this.state.age)}>{this.props.buttonName}</button>
            </div>    
            );
        }
}

const mapDispatchToProps = dispatch =>{
    return{
        foo: () => dispatch({type:actionTypes.ADD_NAME}),
    }
}
    
export default connect(null,mapDispatchToProps)(testControl);

// const testControl = (props) =>{
//     return (
//     <div>
//         <input type="text" value="name"/>
//         <input type="text" value="age"/>
//         <button onClick={props.clicked}>{props.buttonName}</button>
//     </div>
//     )
//  }
//  export default testControl;