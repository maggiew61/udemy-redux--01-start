import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers} from 'redux'  //combinreducer is new; map our reducers to slices of states & merge all into one global state for us
// import reducer from './store/reducer'
//new stuff
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'
import testReducer from './store/reducers/test'

import {Provider} from 'react-redux'

const rootReducer = combineReducers({
    ctr:counterReducer,
    res:resultReducer,
    test:testReducer
})

//takes reducer as an input
// const store = createStore(reducer)
//new
const store = createStore(rootReducer)


//provider helps the project to inject store into the component;
//connects the store to the react project
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
