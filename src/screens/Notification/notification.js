import React, { Component } from 'react';
import { connect } from 'react-redux'
import firebase from '../../Config/Firebase/firebase'
import Container from '../../Container/container/container'

class notify extends Component {
    constructor() {
        super()

        this.state = {
            notify: []
        }
    }

    componentDidMount() {
        if (this.props.resolved) {
            this.setState({ notify: this.props.resolved })
        }
        if (this.props.notify) {
            const { notify } = this.state
            notify.push(this.props.notify)
            this.setState({ notify })
        }
    }

    componentWillReceiveProps(props) {
        if (props.resolved) {
            this.setState({ notify: props.resolved })
        }
        if (props.notify) {
            const { notify } = this.state
            notify.push(props.notify)
            this.setState({ notify })
        }
    }

    logout() {
        firebase.auth().signOut()
    }

    render() {
        console.log(this.state.notify,'notify')
        return (
            <Container user={true} logout={this.logout}>

            </Container>
        )
    }
}

function mapStateToProps(state) {
    return ({
        user: state.authReducer.USERUID,
        resolved: state.authReducer.RESOLVED,
        notify: state.authReducer.NOTIFY,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        // UserCheck: (text) => {
        //     dispatch(OnAuth(text))
        // }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(notify);
