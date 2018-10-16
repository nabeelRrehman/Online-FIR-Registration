import actionTypes from '../constant/constant'


const INITIAL_STATE = {
    CURRENTUSER: null,
    USERUID: null
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
        default:
            return states;
    }
}