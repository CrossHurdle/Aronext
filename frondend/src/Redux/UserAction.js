import { GET_USER_DATA, USER_LOGIN_DATA } from "../Redux/UserActionType";

export const getUserDataAction = (data) => {
  return {
    type: GET_USER_DATA,
    payload: data,
  };
};

export const userLoginAction = (data) => {
  return {
    type: USER_LOGIN_DATA,
    payload: data,
  };
};
