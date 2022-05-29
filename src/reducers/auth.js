import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  username: '',
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      }
    case REGISTER_FAIL:
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username
      }
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: payload,
      }
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      }
    case LOGOUT_FAIL:
    default:
      return state
  }
};