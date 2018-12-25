import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';

import history from '../History/AdminHistory'
import { connect } from 'react-redux'
import { AllComplaints } from '../store/action/action'
import MainPage from '../AdminScreens/MainPage/mainPage';
import admin from '../screens/AdminPanel/admin';
import complaint from '../AdminScreens/Complaint/complaint';


class AdminRouter extends Component {

    componentDidMount() {
        const { complaintsAll } = this.props

        complaintsAll()
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/admin" component={admin} />
                    <Route exact path="/complaint" component={complaint} />
                    <Route exact path="/home" component={MainPage} />

                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return ({
        user: state.authReducer.USERUID,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        complaintsAll: () => {
            dispatch(AllComplaints())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter);
