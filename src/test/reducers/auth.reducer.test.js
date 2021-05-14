import { authReducer } from "../../redux/modules/auth/auth.reducer";

describe("auth Reducer", () => {
  const initialState = {
    token: null,
    error: null,
  };

  it("returns the initial state when an action type is not passed", () => {
    const reducer = authReducer(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it("handles TOKEN_FETCH_REQUEST as expected", () => {
    const reducer = authReducer(initialState, { type: "TOKEN_FETCH_REQUEST" });

    expect(reducer).toEqual({
      token: null,
      error: null,
    });
  });

  it("handles TOKEN_FETCH_SUCCESS as expected", () => {
    const reducer = authReducer(initialState, {
      type: "TOKEN_FETCH_SUCCESS",
      payload: {
        token: "token",
      },
    });

    expect(reducer).toEqual({
      token: "token",
      error: null,
    });
  });

  it("handles TOKEN_FETCH_FAILED as expected", () => {
    const reducer = authReducer(initialState, {
      type: "TOKEN_FETCH_FAILED",
      payload: {
        error: "Something bad happened:(",
      },
    });

    expect(reducer).toEqual({
      token: null,
      error: 'Something bad happened:(',
    });
  });
});
