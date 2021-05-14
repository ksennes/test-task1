import {
  TOKEN_FETCH_REQUEST,
  TOKEN_FETCH_SUCCESS,
  TOKEN_FETCH_FAILED,
} from "./auth.actions";

const initialState = {
  token: null,
  error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOKEN_FETCH_REQUEST:
      return {
        ...state,
      };
    case TOKEN_FETCH_SUCCESS:
      return {
        ...state,
        token: payload.token,
      };
    case TOKEN_FETCH_FAILED:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
