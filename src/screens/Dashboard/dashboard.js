import React, { Component } from 'react';
import Container from '../../Container/container/container';
// import Button from '../../components/Button/button'
// import firebase from 'firebase'
// import 'firebase/auth'
// import swal from 'sweetalert2'


class Dashboard extends Component {


    logout() {
        
    }

    render() {
        return (
            <Container user = {true} logout={this.logout}>

            </Container>
        )
    }
}

export default Dashboard;
