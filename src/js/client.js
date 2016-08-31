import React from "react"
import ReactDOM from "react-dom"
import { Router, IndexRoute, Route, Link,Redirect, hashHistory } from 'react-router'
import Layout from './components/layout'


import ClientBook from './pages/clientbook'
import CreateForm from './pages/createform'
import ViewForm from './pages/viewform'

const donTest = document.getElementById('dontest');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={CreateForm}></IndexRoute>
            <Route path="createform" component={CreateForm}></Route>
            <Route path="viewform" component={ViewForm}></Route>
            <Route path="clientbook" component={ClientBook}></Route>
        </Route>
    </Router>
    ,donTest);


