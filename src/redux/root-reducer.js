import { combineReducers } from 'redux';

import { authReducer } from './modules/auth/auth.reducer';
import { jogsReducer } from './modules/jogs/jogs.reducer';

export const rootReducer = combineReducers({
    authReducer,
    jogsReducer,
})