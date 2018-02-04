import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_REQUEST, KEY_STORE_TOKEN } from '../constants/Types'
import { ObjectIsIdentic, GenerateToken } from '../utils/helpers'
import { Router } from '../../routes'
import Cookies from 'js-cookie';

export const authenticate = (fields) => {
  return async (dispacth, getState) => {
    dispacth(requestLogin(fields));
    const { account } = getState();
    const isValidUser = account.users.some(item => ObjectIsIdentic(item, fields));
    if (isValidUser) {
      setTimeout(() => {
        const token = GenerateToken(20);
        Cookies(KEY_STORE_TOKEN, token, { expires: 7 });
        dispacth(receiveLogin());
        Router.pushRoute('dashboard');
      }, 3000);
    } else {
      setTimeout(() => {
        dispacth(loginError('Login ou senha inválidos'))
      }, 3000)
    }
  }
}

export const logoutUser = () => {
  return dispatch => {
    dispatch(requestLogout())
    Cookies.remove(KEY_STORE_TOKEN)
    dispatch(receiveLogout())
  }
}

export const requestLogin = (user) => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    user
  }
}

export const receiveLogin = () => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true
  }
}

export const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

export const  receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export const getToken = () => {
  return Cookies.get(KEY_STORE_TOKEN);
}

