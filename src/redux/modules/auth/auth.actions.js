import {getUserToken} from './auth.services';

export const TOKEN_FETCH_REQUEST = 'TOKEN_FETCH_REQUEST';
export const TOKEN_FETCH_SUCCESS = 'TOKEN_FETCH_SUCCESS';
export const TOKEN_FETCH_FAILED = 'TOKEN_FETCH_FAILED';

export const getTokenAction = () => (dispatch) =>  {
    dispatch(getTokenRequestAction());

    getUserToken()
    .then(res => {
        localStorage.setItem('token', res.data.response.access_token)
        dispatch(getTokenSuccessAction(res.data.response.access_token));
    })
    .catch(err => {
        dispatch(getTokenFailedAction(err.message));
    })
}

const getTokenRequestAction = () => ({
    type: TOKEN_FETCH_REQUEST,
});

const getTokenSuccessAction = (token) => ({
    type: TOKEN_FETCH_SUCCESS,
    payload: { token },
});

const getTokenFailedAction = (message) => ({
    type: TOKEN_FETCH_FAILED,
    payload: { error: message },
})