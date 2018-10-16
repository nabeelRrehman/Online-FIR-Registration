import React, { Component } from 'react';
import Button from '../../components/Button/button'
import firebase from 'firebase'
import 'firebase/auth'
import swal from 'sweetalert2'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    email(email) {
        this.setState({
            email
        })
    }

    password(password) {
        this.setState({
            password
        })
    }

    signUpPage() {
        this.props.history.push('/signup')
    }

    loginAuth() {
        const { email, password } = this.state
        const { homePage } = this.props
        if (email && password) {
            swal({
                onOpen: () => {
                    swal.showLoading()

                },
                onClose: () => {

                }
            })
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((success) => {
                    var obj = {
                        login : true
                    }
                    localStorage.setItem('userId',success.user.uid)
                    firebase.database().ref('/users/' + success.user.uid + '/userDetails').update(obj)
                    swal({
                        position: 'center',
                        type: 'success',
                        title: 'successfully Login',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    homePage()
                })
                .catch(() => {
                    swal({
                        position: 'center',
                        type: 'error',
                        title: 'Wrong credentials',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        } else {
            swal({
                position: 'center',
                type: 'warning',
                title: 'Fill the required fields',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    render() {
        return (
            <div className='main-container'>
                <div className='flex-box'>
                    <div className="field1" onClick={() => this.signUpPage()}>
                        SIGNUP
                    </div>
                    <div className="field1">
                        LOGIN
                    </div>
                    <div className='signUpDiv'>
                        <div className="sign-up">
                            LOGIN HERE
                        </div>
                        <div className='input-fields'>
                            <input type='email' placeholder='Email*' onChange={(e) => this.email(e.target.value)} />
                        </div>
                        <div className='input-fields'>
                            <input type='password' placeholder='Password*' onChange={(e) => this.password(e.target.value)} />
                        </div>
                        <div className='input-fields'>
                            <Button name={'Login'} btnEvent={this.loginAuth.bind(this)} />
                        </div>
                        <div className='fields'>
                            <h5>New Here ?<button className='signuplink' onClick={() => this.signUpPage()}> SignUp now</button></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
