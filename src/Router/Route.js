import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';

import history from '../History/History'
import Dashboard from '../screens/Dashboard/dashboard';
import Login from '../screens/Login/login';
import SignUp from '../screens/SignUp/signup';


class Routers extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route path='/home' component={Dashboard} />
                </div>
            </Router>
        )
    }
}

export default Routers;