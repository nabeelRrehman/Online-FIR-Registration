import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';

import history from '../History/History'
import Dashboard from '../screens/Dashboard/dashboard';
import Login from '../screens/Login/login';
import SignUp from '../screens/SignUp/signup';
import { connect } from 'react-redux'
import { OnAuth } from '../store/action/action';


class Routers extends Component {

    componentDidMount() {
        const { UserCheck } = this.props

        UserCheck()
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path='/home' component={Dashboard} />
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return ({
        user: state.authReducer.CURRENTUSER,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        UserCheck: (text) => {
            dispatch(OnAuth(text))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
