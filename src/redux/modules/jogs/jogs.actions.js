import { getJogs, addJog, editJog } from './jogs.services';

export const JOGS_FETCH_REQUEST = 'JOGS_FETCH_REQUEST';
export const JOGS_FETCH_SUCCESS = 'JOGS_FETCH_SUCCESS';
export const JOGS_FETCH_FAILED = 'JOGS_FETCH_FAILED';

export const JOG_ADD_REQUEST = 'JOGS_ADD_REQUEST';
export const JOG_ADD_SUCCESS = 'JOGS_ADD_SUCCESS';
export const JOG_ADD_FAILED = 'JOGS_ADD_FAILED';

export const JOG_EDIT_REQUEST = 'JOG_EDIT_REQUEST';
export const JOG_EDIT_SUCCESS = 'JOG_EDIT_SUCCESS';
export const JOG_EDIT_FAILED = 'JOG_EDIT_FAILED';

export const getJogsAction = (token) => (dispatch) => {
    dispatch(getJogsRequestAction());

    getJogs(token)
    .then(res => {
        dispatch(getJogsSuccessAction(res.data.response.jogs));
    })
    .catch(err => {
        dispatch(getJogsFailedAction(err.message));
    })
};

const getJogsRequestAction = () => ({
    type: JOGS_FETCH_REQUEST,
    payload: { pending: true }
});
const getJogsSuccessAction = (jogs) => ({
    type: JOGS_FETCH_SUCCESS,
    payload: { 
        jogs,
        pending: false,
     },
});
const getJogsFailedAction = (message) => ({
    type: JOGS_FETCH_FAILED,
    payload: { 
        error: message,
        pending: false,
    },
});

export const addJogAction = (token, jog) => (dispatch) => {
    dispatch(addJogRequestAction());

    addJog(token, jog)
    .then(res => {
        console.log(res.data.response);
        dispatch(addJogSuccessAction(res.data.response));
    })
    .catch(err => {
        dispatch(addJogFailedAction(err.message));
    })

}

const addJogRequestAction = () => ({
    type: JOG_ADD_REQUEST,
    payload: { pending: true }
});
const addJogSuccessAction = (jog) => ({
    type: JOG_ADD_SUCCESS,
    payload: { 
        jog,
        pending: false,
     },
});
const addJogFailedAction = (message) => ({
    type: JOG_ADD_FAILED,
    payload: { 
        error: message,
        pending: false,
     }
});

export const editJogAction = (token, jog) => (dispatch) => {
    dispatch(editJogRequestAction());

    editJog(token, jog)
    .then(res => {
        dispatch(editJogSuccessAction(res.data.response));
    })
    .catch(err => {
        dispatch(editJogFailedAction(err.message));
    })
}

const editJogRequestAction = () => ({
    type: JOG_EDIT_REQUEST,
    payload: { pending: true }
});
const editJogSuccessAction = (jog) => ({
    type: JOG_EDIT_SUCCESS,
    payload: { 
        jog,
        pending: false,
     },
});
const editJogFailedAction = (message) => ({
    type: JOG_EDIT_FAILED,
    payload: {
        error: message,
        pending: false,
    }
})