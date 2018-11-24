import React, { Component } from 'react';
import { connect } from 'react-redux'




class AdminPage extends Component {

    render() {
        return (
            <div>Admin</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);


// export default Dashboard;
