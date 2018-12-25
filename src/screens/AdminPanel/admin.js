import React, { Component } from 'react';
import Button from '../../components/Button/button'
import firebase from '../../Config/Firebase/firebase'
// import 'firebase/auth'
import swal from 'sweetalert2'
import { LoginAdmin } from '../../store/action/action'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import History from '../../History/History'
import { connect } from 'react-redux'


library.add(faUserTie)

class Admin extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // console.log(user,'user')
                History.push('/home')
                // ...
            } else {
                // User is signed out.
                // ...
                // History.push('/home')

            }
        });
    }

    adminLogin() {
        const { email, password, designation, district } = this.state
        const { adminAuth } = this.props

        if (!email || !password || !designation || !district) {
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Fill all the fields!'
              })
        } else {

            var obj = {
                email,
                password,
                designation,
                district
            }
            // console.log(user, 'userjsadkajj')   
            adminAuth(obj)
        }
    }

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
                                <select onChange={(e) => this.setState({ designation: e.target.value })}>
                                    <option value={''}>Select Your Designation</option>
                                    <option value={'ig'}>IG - Inspector General</option>
                                    <option value={'aig'}>AIG - Additional Inspector General</option>
                                    <option value={'dig'}>DIG - Deputy Inspector General</option>
                                    <option value={'ssp'}>SSP - Senior Superintendent of Police</option>
                                </select>
                            </div>
                            <div className='input-fields'>
                                <select onChange={(e) => this.setState({ district: e.target.value })}>
                                    <option value={''}>Select Your District</option>
                                    <option value={'south'}>South</option>
                                    <option value={'city'}>City</option>
                                    <option value={'central'}>Central</option>
                                    <option value={'malir'}>Malir</option>
                                    <option value={'korangi'}>Korangi</option>
                                    <option value={'east'}>East</option>
                                    <option value={'west'}>West</option>
                                </select>
                            </div>
                            <div className='input-fields' onClick={() => this.adminLogin()}>
                                <Button name={'Login'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        adminAuth: (text) => {
            dispatch(LoginAdmin(text))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
