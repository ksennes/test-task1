import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  getJogsAction,
  addJogAction
} from "../../redux/modules/jogs/jogs.actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Jogs actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      jogs: [],
    });
  });

  describe("getJogs action creator", () => {
    it("dispatches JOGS_FETCH action and returns data on success", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            response: {
              jogs: [
                {
                  date: "20.02.2020",
                  time: "15",
                  distance: "15",
                },
                {
                  date: "20.02.2020",
                  time: "15",
                  distance: "15",
                },
              ],
            },
          },
        })
      );

      const token = "token";

      await store.dispatch(getJogsAction(token));
      const actions = store.getActions();

      expect.assertions(3);
      expect(actions[0].type).toEqual("JOGS_FETCH_REQUEST");
      expect(actions[1].type).toEqual("JOGS_FETCH_SUCCESS");
      expect(actions[1].payload.jogs).toEqual([
        {
          date: "20.02.2020",
          time: "15",
          distance: "15",
        },
        {
          date: "20.02.2020",
          time: "15",
          distance: "15",
        },
      ]);
    });

    it("dispatches JOGS_FETCH action and returns an error", async () => {
      mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        error: {
          message: "Something bad happened:(",
        },
      })
    );

    const token = "token";

    try {
      await store.dispatch(getJogsAction(token));
    } catch {
      const actions = store.getActions();

    expect.assertions(3);
    expect(actions[0].type).toEqual("JOGS_FETCH_REQUEST");
    expect(actions[1].type).toEqual("JOGS_FETCH_FAILED");
    expect(actions[1].payload.error.message).toEqual('Something bad happened:(');
    }
    
    });
  });

  describe("addJog action creator", () => {
    it("dispatches JOGS_ADD_REQUEST action and returns data on success", async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            response: {
                  date: "20.02.2020",
                  time: "15",
                  distance: "15",
            },
          },
        })
      );

      const token = "token";
      const jog = {
        date: "20.02.2020",
        time: "15",
        distance: "15",
  }

      await store.dispatch(addJogAction(token, jog));
      const actions = store.getActions();

      expect.assertions(3);
      expect(actions[0].type).toEqual("JOGS_ADD_REQUEST");
      expect(actions[1].type).toEqual("JOGS_ADD_SUCCESS");
      expect(actions[1].payload.jog).toEqual(
        {
          date: "20.02.2020",
          time: "15",
          distance: "15",
        },
      );
    });

    it("dispatches JOGS_FETCH action and returns an error", async () => {
      mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        error: {
          message: "Something bad happened:(",
        },
      })
    );

    const token = "token";
    const jog = {
      date: "20.02.2020",
      time: "15",
      distance: "15",
}

    try {
      await store.dispatch(addJogAction(token, jog));
    } catch {
      const actions = store.getActions();

    expect.assertions(3);
    expect(actions[0].type).toEqual("JOGS_ADD_REQUEST");
    expect(actions[1].type).toEqual("JOGS_ADD_FAILED");
    expect(actions[1].payload.error.message).toEqual('Something bad happened:(');
    }
    
    });
  })

});
