import React, { Component } from 'react';
import Button from '../../components/Button/button'
// import firebase from 'firebase'
// import 'firebase/auth'
// import swal from 'sweetalert2'
// import { SignInAuth } from '../../store/action/action'
// import { connect } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
// import History from '../../History/History'

library.add(faUserTie)

class Admin extends Component {
    render() {
        return (
            <div>
                <div className='main-page'>
                    <h1>Online FIR Registration</h1>
                </div>
                <div className='main-container'>
                    <div className='flex-box'>
                        <div className="field1">
                            ADMIN LOGIN
                        </div>
                        <div className='signUpDiv'>
                            <div className="sign-up">
                                <FontAwesomeIcon icon='user-tie' size={'2x'} />
                            </div>
                            <div className='input-fields'>
                                <input type='email' placeholder='Email*' onChange={(e) => this.setState({ email: e.target.value })} />
                            </div>
                            <div className='input-fields'>
                                <input type='password' placeholder='Password*' onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <div className='input-fields'>
                                <Button name={'Login'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;
