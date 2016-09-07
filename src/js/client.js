import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from 'react-redux'
import { Router, IndexRoute, Route, Link,Redirect, hashHistory } from 'react-router'
import Layout from './components/layout'
import $ from './lib/jqueryAjax.min'
import AllReducers from './reducers'

let store = createStore(AllReducers)
console.log($)
console.log(store);
let stateObj = store.getState()
console.log(stateObj.clients);
import ClientBook from './pages/clientbook'
import CreateForm from './pages/createform'
import ViewForm from './pages/viewform'
import Summary from './pages/summary'

const donTest = document.getElementById('dontest');
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Summary}></IndexRoute>
                <Route path="summary" component={Summary}></Route>
                <Route path="createform" component={CreateForm}></Route>
                <Route path="viewform" component={ViewForm}></Route>
                <Route path="clientbook" component={ClientBook}></Route>
            </Route>
        </Router>
    </Provider>
    
    ,donTest);


