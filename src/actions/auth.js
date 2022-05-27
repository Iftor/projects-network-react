import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
} from './types';
import {message} from "antd";


export const checkAuthenticated = () => async dispatch => {
  const res = await axios.get('http://localhost:8000/api/users/authenticated')
    .then((res) => {
      if (res.data.error || res.data.isAuthenticated === 'false') {
        dispatch({
          type: AUTHENTICATED_FAIL,
          payload: false
        });
      }
      else if (res.data.isAuthenticated === 'true') {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
          payload: true
        });
      }
    })
    .catch(() => {
      dispatch({
        type: AUTHENTICATED_FAIL,
        payload: false
      });
    })
};


export const register = (formValues, navigate) => async dispatch => {
  await axios.post('http://localhost:8000/api/auth/users/', formValues)
    .then(() => {
      dispatch({
        type: REGISTER_SUCCESS
      });
      message.success('Success');
      navigate('/');
    })
    .catch(() => {
      dispatch({
        type: REGISTER_FAIL
      })
      message.error('Something\'s wrong. Try again')
    })
};


export const login = (formValues, switchModal) => async dispatch => {
  await axios.post('http://localhost:8000/api/users/login', formValues)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.username,
      });
      message.success('Success');
      switchModal();
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAIL
      });
      message.error('Incorrect username or password');
    })
};

export const logout = (navigate) => async dispatch => {
  await axios.get('http://localhost:8000/api/users/logout')
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
      message.success('Success');
      navigate('/');
    })
    .catch(() => {
      dispatch({
        type: LOGOUT_FAIL
      });
      message.error('Error while logging out');
    })
};
