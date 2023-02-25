import { USER_DETAILS, SET_APPOINTMENTS } from '../constants';

const initialState = {
    userDetails: null
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DETAILS:
            return {
                ...state,
                userDetails: action.userData,
                isLoading: false,
            };
        default:
            return state;
    }
}
export default UserReducer;