import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClipboardList, faBoxes, faCheckCircle, faUserCheck, faHistory,
//         faBalanceScale } from '@fortawesome/free-solid-svg-icons'


// library.add(faClipboardList, faBoxes, faCheckCircle, faUserCheck, faHistory,
//         faBalanceScale)


class Complaints extends Component {

    render() {
        return (
            <div className='flex-container'>
            All compoliants
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
        // LoginMethod: (text) => {
        //     dispatch(SignInAuth(text))
        // }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Complaints);


// export default Dashboard;
