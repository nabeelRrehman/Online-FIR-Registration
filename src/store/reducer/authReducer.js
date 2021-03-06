import actionTypes from '../constant/constant'


const INITIAL_STATE = {
    CURRENTUSER: null,
    USERUID: null,
    USERDATA: null,
    COMPLAINT: null,
    PENDING: null,
    RESOLVED: null,
    NOTIFY: null,
    FEEDBACKS: null,
    ALLCOMPLAINT: null
}

export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CURRENTUSER:
            return ({
                ...states,
                CURRENTUSER: action.payload
            })
        case actionTypes.USERUID:
            return ({
                ...states,
                USERUID: action.payload
            })
        case actionTypes.USERDATA:
            return ({
                ...states,
                USERDATA: action.payload
            })
        case actionTypes.COMPLAINT:
            return ({
                ...states,
                COMPLAINT: action.payload
            })
        case actionTypes.PENDING:
            return ({
                ...states,
                PENDING: action.payload
            })
        case actionTypes.RESOLVED:
            return ({
                ...states,
                RESOLVED: action.payload
            })
        case actionTypes.NOTIFY:
            return ({
                ...states,
                NOTIFY: action.payload
            })
        case actionTypes.FEEDBACKS:
            return ({
                ...states,
                FEEDBACKS: action.payload
            })
        case actionTypes.ALLCOMPLAINT:
            return ({
                ...states,
                ALLCOMPLAINT: action.payload
            })
        default:
            return states;
    }
}