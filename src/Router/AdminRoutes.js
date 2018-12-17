import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';

import history from '../History/History'
import { connect } from 'react-redux'
import Role from '../AdminScreens/Role/role';
import { AllComplaints } from '../store/action/action'
import Complaint from '../AdminScreens/Complaint/complaint';

class AdminRouter extends Component {

    componentDidMount() {
        const { complaintsAll } = this.props

        complaintsAll()
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/home" component={Role} />
                    <Route exact path="/complaints" component={Complaint} />

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
