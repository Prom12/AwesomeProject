import { Auth } from "../actions/auth";
export default authReducer = (prevState = [], action) => {
  switch (action.type) {
    case Auth.RETRIEVE_TOKEN:
      return { ...prevState, userToken: action.token, isLoading: false };
    case Auth.SIGN_IN:
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case Auth.SIGN_OUT:
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case Auth.SIGN_UP:
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    default:
      return prevState;
  }
};
