
import actionTypes from '../constant/constant'
import firebase from 'firebase'
import History from '../../History/History';
import swal from 'sweetalert2'

export function SignUpAuth(user) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((success) => {
                delete user.password
                console.log('success signup')
                firebase.database().ref('/users/' + success.user.uid + '/').set(user)
                    .then(() => {
                        swal({
                            position: 'center',
                            type: 'success',
                            title: 'Successfully Registered',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        History.push('/')
                        dispatch({ type: actionTypes.CURRENTUSER, payload: user })
                    })
            })
    }
}


export function SignInAuth(user) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((success) => {
                delete user.password
                swal({
                    position: 'center',
                    type: 'success',
                    title: 'Successfully Login',
                    showConfirmButton: false,
                    timer: 1000
                })
                History.push('/home')
                console.log('user signin success')
                firebase.database().ref('users/' + success.user.uid + '/').on('value', (snapShot) => {
                    console.log(snapShot.val())
                    const currentUser = snapShot.val()
                    dispatch({ type: actionTypes.CURRENTUSER, payload: currentUser })
                })
            })
    }
}



export function OnAuth() {
    return dispatch => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                const obj = {
                    email : user.email,
                    userUid : user.uid
                }
                console.log(user,'user')
                dispatch({ type: actionTypes.USERUID, payload: obj })
                // History.push('/home')
                // ...
            } else {
                // User is signed out.
                // ...
                History.push('/')

            }
        });
    }
}