import {createSelector} from 'reselect';

export const getTokenSelector = createSelector(
    (state) => state.authReducer.token,
    (token) => token
)