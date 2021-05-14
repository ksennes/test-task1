import {createSelector} from 'reselect';

export const getJogsSelector = createSelector(
    [(state) => state.jogsReducer.jogs],
    (jogs) => jogs
)

export const getPending = createSelector(
    [(state) => state.jogsReducer.pending],
    (pending) => pending
)