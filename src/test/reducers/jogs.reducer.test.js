import { jogsReducer } from "../../redux/modules/jogs/jogs.reducer";

describe("jogs Reducer", () => {
    const initialState = {
        jogs: [],
        error: null,
        pending: false,
      };

  it("returns the initial state when an action type is not passed", () => {
    const reducer = jogsReducer(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it("handles JOGS_FETCH_REQUEST as expected", () => {
    const reducer = jogsReducer(initialState, { 
        type: "JOGS_FETCH_REQUEST",
        payload: {
            pending: true,
        }
    });

    expect(reducer).toEqual({
        jogs: [],
        error: null,
        pending: true,
    });
  });

  it("handles JOGS_FETCH_SUCCESS as expected", () => {
    const reducer = jogsReducer(initialState, {
      type: "JOGS_FETCH_SUCCESS",
      payload: {
        jogs: [
            {
              date: 1577836800,
              time: "15",
              distance: "15",
            },
            {
              date: 1577836800,
              time: "15",
              distance: "15",
            },
        ],
        pending: false
      },
    });

    expect(reducer).toEqual({
        jogs: [
            {
              date: '01.01.2020',
              time: "15",
              distance: "15",
            },
            {
              date: '01.01.2020',
              time: "15",
              distance: "15",
            },
        ],
        error: null,
        pending: false
    });
  });

  it("handles JOGS_FETCH_FAILED as expected", () => {
    const reducer = jogsReducer(initialState, {
      type: "JOGS_FETCH_FAILED",
      payload: {
        error: "Something bad happened:(",
        pending: false,
      },
    });

    expect(reducer).toEqual({
        jogs: [], 
        pending: false,
      error: 'Something bad happened:(',
    });
  });

  it("handles JOGS_ADD_REQUEST as expected", () => {
    const reducer = jogsReducer(initialState, { 
        type: "JOGS_ADD_REQUEST",
        payload: {
            pending: true,
        }
    });

    expect(reducer).toEqual({
        jogs: [],
        error: null,
        pending: true,
    });
  });

  it("handles JOG_ADD_SUCCESS as expected", () => {
    const reducer = jogsReducer(initialState, {
      type: "JOGS_ADD_SUCCESS",
      payload: {
        jog: {
              date: new Date('2020-12-12T00:00:00.000Z'),
              time: "15",
              distance: "15",
        },
        pending: false
      },
    });

    expect(reducer).toEqual({
        jogs: [
            {
              date: '12.12.2020',
              time: "15",
              distance: "15",
            }
        ],
        pending: false,
        error: null
    });
  });

  it("handles JOG_ADD_FAILEDas expected", () => {
    const reducer = jogsReducer(initialState, {
      type: "JOGS_ADD_FAILED",
      payload: {
        error: "Something bad happened:(",
        pending: false
      },
    });

    expect(reducer).toEqual({
        jogs: [],
        pending: false,
      error: 'Something bad happened:(',
    });
  });

});