import React, { Component } from 'react';
import { connect } from 'react-redux'
import Icon1 from '../../Assets/logo/police-station.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faBoxes, faCheckCircle, faUserCheck, faHistory,
        faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import History from '../../History/History'
import Icon2 from '../../Assets/logo/status-white.png'
import firebase from '../../Config/Firebase/firebase'


library.add(faClipboardList, faBoxes, faCheckCircle, faUserCheck, faHistory,
        faBalanceScale)


class AdminComplain extends Component {
    render() {
        return (
            <div className='flex-container'>
                <div className='icon'>
                    <div onClick={() => this.complaint()}>
                        <FontAwesomeIcon icon='clipboard-list' style={{marginTop: '10px'}} size={'2x'} />
                        <span>Complaint</span>
                    </div>
                    {/* <div onClick={() => this.complaintStatus()}>
                        <img src={Icon2} width={40} />
                        <span>Complaint <br />Status</span>
                    </div>
                    <div>
                        <img src={Icon1} width={40} />
                        <span>Police Station</span>
                    </div>
                    <div onClick={() => this.complaintHistory()}>
                        <FontAwesomeIcon icon='history' style={{marginTop: '10px'}} size={'2x'} />
                        <span>FIR History</span>
                    </div>
                    <div onClick={() => this.complaintHistory()}>
                        <FontAwesomeIcon icon='balance-scale' style={{marginTop: '5px'}} size={'2x'} />
                        <span>Complain Against Officer</span>
                    </div> */}
                </div>
                <div className={'user-complaint-status'}>
                    {/* <div>
                        <div>
                            {
                                complaint &&
                                complaint.length}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={'boxes'} color={'white'} size={'1x'} />
                        </div>
                        <div>
                            TOTAL COMPLAINTS
                        </div>
                    </div>
                    <div>
                        <div>
                            {
                                pending &&
                                pending.length}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={'user-check'} color={'white'} size={'1x'} />
                        </div>
                        <div>
                            IN-PROGRESS COMPLAINTS
                        </div>
                    </div>
                    <div>
                        <div>
                            {
                                resolved &&
                                resolved.length}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={'check-circle'} color={'white'} size={'1x'} />
                        </div>
                        <div>
                            RESOLVED COMPLAINTS
                        </div>
                    </div> */}
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
        // LoginMethod: (text) => {
        //     dispatch(SignInAuth(text))
        // }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminComplain);


// export default Dashboard;
