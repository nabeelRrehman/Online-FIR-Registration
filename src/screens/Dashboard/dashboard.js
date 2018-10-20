import React, { Component } from 'react';
import Container from '../../Container/container/container';
import firebase from 'firebase'
import './dashboard.css'
// import swal from 'sweetalert2'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'

library.add(faClipboardList)


class Dashboard extends Component {


    logout() {
        firebase.auth().signOut()
    }

    render() {
        return (
            <Container user={true} logout={this.logout}>
                <div className='flex-container'>
                    <div className='icon'>
                        <div onClick = {() => console.log('clicked baba')}>
                            <FontAwesomeIcon icon='clipboard-list' size={'2x'} />
                            <span>Complaint</span>
                        </div>
                        {/* <div>
                            <FontAwesomeIcon icon='clipboard-list' size={'2x'} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon='clipboard-list' size={'2x'} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon='clipboard-list' size={'2x'} />
                        </div> */}
                        
                    </div>
                </div>
            </Container>
        )
    }
}

export default Dashboard;
