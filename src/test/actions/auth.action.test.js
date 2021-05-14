import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getTokenAction } from "../../redux/modules/auth/auth.actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Auth action", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      token: "",
    });
  });

  describe("getToken action creator", () => {
    it("dispatches TOKEN_FETCH action and returns data on success", async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            response: {
              access_token: 'token'
            },
          },
        })
      );

      const store = mockStore({
        token: "",
      });

      await store.dispatch(getTokenAction());
      const actions = store.getActions();

      expect.assertions(3);
      expect(actions[0].type).toEqual("TOKEN_FETCH_REQUEST");
      expect(actions[1].type).toEqual("TOKEN_FETCH_SUCCESS");
      expect(actions[1].payload.token).toEqual(
        "token"
      );
    });

    it("dispatches TOKEN_FETCH action and returns an error", async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.reject({
          error: {
            message: "Something bad happened:(",
          },
        })
      );

      try {
        await store.dispatch(getTokenAction());
      } catch {
        const actions = store.getActions();

        expect.assertions(3);
        expect(actions[0].type).toEqual("TOKEN_FETCH_REQUEST");
        expect(actions[1].type).toEqual("TOKEN_FETCH_FAILED");
        expect(actions[1].payload.error.message).toEqual(
          "Something bad happened :("
        );
      }
    });
  });
});
