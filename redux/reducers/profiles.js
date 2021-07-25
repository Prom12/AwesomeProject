import { Profiles } from "../actions/profiles";
const initialState = {
  profiles: [],
};

function profilesReducer(state = initialState, action) {
  switch (action.type) {
    case Profiles.GET_PROFILES:
      return {
        ...state,
        profiles: action.payload.filter(
          (x) => x.id !== "60d8add9e49e43259871ef88"
        ),
      };
    case Profiles.CREATE:
      return {};
    case Profiles.UPDATE:
      return {};
    case Profiles.DELETE:
      return {};
    default:
      return state;
  }
}
export default profilesReducer;
