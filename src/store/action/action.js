
import actionTypes from '../constant/constant'
import firebase from 'firebase'
import History from '../../History/History';


export function SignUpAuth(user) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((success) => {
                delete user.password
                console.log('success signup')
                firebase.database().ref('/users/' + success.user.uid + '/').set(user)
                History.push('/')
                dispatch({ type: actionTypes.CURRENTUSER, payload: user })
            })
    }
}


export function SignInAuth(user) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((success) => {
                delete user.password
                console.log('user signin success')
                firebase.database().ref('users/' + success.user.uid + '/').on('value', (snapShot) => {
                    console.log(snapShot.val())
                    const currentUser = snapShot.val()
                    dispatch({ type: actionTypes.CURRENTUSER, payload: currentUser })
                    History.push('/home')
                })
            })
    }
}



export function OnAuth() {
    return dispatch => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var uid = user.uid;
                var profile_pic = user.photoURL
                const obj = {
                    userUid: uid,
                    profile_pic: profile_pic
                }
                dispatch({ type: actionTypes.USERUID, payload: obj })
                History.push('/home')
                // ...
            } else {
                // User is signed out.
                // ...
                History.push('/')

            }
        });
    }
}