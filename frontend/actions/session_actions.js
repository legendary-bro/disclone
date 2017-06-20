import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (error) => dispatch(receiveErrors(error)));
  };

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(() =>
  dispatch(receiveCurrentUser(nullUser)));
};

export const register = (user) => dispatch => {
  return APIUtil.register(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
  (error) => dispatch(receiveErrors(error)));
  };

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

const nullUser = {
  id: null,
  username: "",
  servers: [],
  avatar_url: ""
};