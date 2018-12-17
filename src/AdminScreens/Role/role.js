import React, { Component } from 'react';
import { connect } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { TextField, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Designation } from '../../store/action/action'
import {
    faClipboardList, faBoxes, faCheckCircle, faUserCheck, faHistory,
    faBalanceScale
} from '@fortawesome/free-solid-svg-icons'
import { homeDistrict } from '../../components/District/district'
import History from '../../History/History'
import './role.css'
library.add(faClipboardList, faBoxes, faCheckCircle, faUserCheck, faHistory,
    faBalanceScale)


class Role extends Component {
    constructor() {
        super()

        this.state = {
            designation: [
                {
                    value: 'Select your designation',
                    label: 'Select your Designation',
                },
                {
                    value: 'IG - Inspector General',
                    label: 'IG - Inspector General',
                },
                {
                    value: 'AIG - Additional Inspector General',
                    label: 'AIG - Additional Inspector General',
                },
                {
                    value: 'DIG - Deputy Inspector General',
                    label: 'DIG - Deputy Inspector General',
                },
                {
                    value: 'SSP - Senior Superintendent of Police',
                    label: 'SSP - Senior Superintendent of Police',
                },
            ]
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    done() {
        const { desig, district } = this.state
        const { addDesignation, user } = this.props
        if (desig && district) {
            const obj = {
                designation: desig,
                district: district
            }
            addDesignation(user.userUid, obj)
        }

    }

    componentWillMount() {
        if(this.props.complaints) {
            console.log(this.props.complaints,'compaline')
        }
    }

    componentWillReceiveProps(props) {
        if(props.complaints) {
            console.log(props.complaints,'compaline')
        }
    }

    render() {
        const { designation, desig, district } = this.state
        console.log(desig, 'designmation')
        console.log(district, 'designmation')
        return (
            <div className='flex-container'>
                <div className={'designation'}>
                    <div>Choose Your Designation</div>
                    <div>
                        <TextField
                            select
                            value={desig}
                            onChange={this.handleChange('desig')}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your designation"
                            margin="normal"
                        >
                            {
                                designation.length &&
                                designation.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="standard-select-currency-native"
                            select
                            value={district}
                            onChange={this.handleChange('district')}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your District"
                            margin="normal"
                        >
                            {homeDistrict.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <Button variant="contained" onClick={() => this.done()} color="primary">
                            Done
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return ({
        user: state.authReducer.USERUID,
        complaints: state.authReducer.ALLCOMPLAINT
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        addDesignation: (user, text) => {
            dispatch(Designation(user, text))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);


// export default Dashboard;
