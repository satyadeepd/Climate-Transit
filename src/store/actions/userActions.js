import { USER_DETAILS } from '../constants';

export function getUserDetailsAction(userdetails) {
    return async dispatch => {
        try {
            dispatch({ type: USER_DETAILS, userData: userdetails });
        } catch (e) {
            console.log("error on set", e);
        }
    }
}