
import actionTypes from '../constant/constant'
import History from '../../History/History';
import swal from 'sweetalert2'
import firebase from '../../Config/Firebase/firebase'


export function SignUpAuth(user) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((success) => {
                user.User = 'user'
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
                    email: user.email,
                    userUid: user.uid,
                }
                // console.log(user,'user')
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

export function UserInfo(id) {
    return dispatch => {
        firebase.database().ref('users/' + id + '/').on('value', (snapShot) => {
            // console.log(snapShot,'sadjkbaksjdb')
            // if (snapShot.val()) {
            console.log(snapShot.val(), 'dyatas')
            localStorage.setItem('user', snapShot.val().User)
            dispatch({ type: actionTypes.USERDATA, payload: snapShot.val() })
            // }
        })
    }
}


export function Complaint(user, obj) {
    console.log(user, 'id')
    console.log(obj, 'object')
    if (!obj.email) {
        obj.email = 'not available'
    }
    swal({
        onOpen: () => {
            swal.showLoading()
        },
    })
    return dispatch => {
        firebase.database().ref('complaint/' + user + '/').push(obj)
            .then(() => {
                swal({
                    position: 'center',
                    type: 'success',
                    title: 'Your Complaint Added',
                    showConfirmButton: false,
                    timer: 1500
                })
                History.push('/home')
            })
    }
}

UserNotify
export function UserComplaints(user) {
    const arr2 = []
    return dispatch => {
        firebase.database().ref('/complaint/' + user + '/').on('child_added', (snapShot) => {
            // console.log(snapShot.val(),'complaints')
            // console.log(snapShot.val(), 'complaints')

            arr2.push(snapShot.val())
            arr2.forEach((element) => {
                element.key = snapShot.key
            })
        })

        dispatch({ type: actionTypes.COMPLAINT, payload: arr2 })
    }
}


export function UserNotify(user) {
    const arr2 = []
    return dispatch => {
        firebase.database().ref('/complaint/' + user + '/').on('child_changed', (snapshot) => {
            if (snapshot.val().status === 'resolved') {
                dispatch({ type: actionTypes.NOTIFY, payload: snapshot.val() })
            }
        })
    }
}

export function ComplaintResolved(user) {
    const arr = []
    return dispatch => {
        firebase.database().ref('/complaint/' + user + '/').on('child_added', (snapshot) => {
            if (snapshot.val().status === 'resolved') {
                arr.push(snapshot.val())
            }
            dispatch({ type: actionTypes.RESOLVED, payload: arr })
        })
    }
}



export function FeedbackAdd(user, obj) {
    return dispatch => {
        firebase.database().ref('/feedback/' + user + '/' + obj.registrationNo).push(obj)
            .then(() => {
                swal({
                    position: 'center',
                    type: 'success',
                    title: 'Thanyou For Your Feedback',
                    showConfirmButton: false,
                    timer: 1500
                })
                History.push('/home')
            })
    }
}


export function UserFeedback(user) {
    const arr = []
    return dispatch => {
        firebase.database().ref('/feedback/' + user + '/').on('child_added', (snapshot) => {
            for (var key in snapshot.val()) {
                console.log(snapshot.val()[key])
                arr.push(snapshot.val()[key])
            }
            dispatch({ type: actionTypes.FEEDBACKS, payload: arr })
        })
    }
}


export function LoginAdmin(obj) {
    // swal({
    //     onOpen: () => {
    //         swal.showLoading()
    //     },
    // })
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
            .then((user) => {
                const obj = {
                    User: 'admin',
                    email: user.user.email,
                }
                firebase.database().ref('/users/').child(user.user.uid).set(obj)
                    .then(() => {
                        swal({
                            position: 'center',
                            type: 'success',
                            title: 'Sucessfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        History.push('/home')
                    })
            })
    }
}


export function Designation(user, obj) {
    return dispatch => {
        firebase.database().ref('admin/' + user + '/role').update(obj)
            .then(() => {
                console.log('successfully Updated')
            })
    }
}

export function AllComplaints() {
    var complaint = []
    return dispatch => {
        firebase.database().ref('complaint').on('value', (snapShot) => {
            for (var key in snapShot.val()) {
                firebase.database().ref('complaint/' + key + '/').on('child_added', (snaps) => {
                    console.log(snaps.val(), 'valll')
                    complaint.push(snaps.val())
                })
                dispatch({ type: actionTypes.ALLCOMPLAINT, payload: complaint })
            }
        })
    }
}