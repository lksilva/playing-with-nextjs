import { NEW_ACCOUNT_REQUEST, NEW_ACCOUNT_SUCCESS, NEW_ACCOUNT_FAILURE } from '../constants/Types'

export const sendContact = (user) => {
  return async (dispacth) => {
    dispacth(requestAccount());
    const isValid = user.password === user.confirm_password;
    if(isValid) {
      setTimeout(() => {
        dispacth(receiveAccount(user))
      }, 3000);
    } else {
      setTimeout(() => {
        dispacth(accountError('Password estão diferentes'))
      }, 3000);
    }
  }
}

export const requestAccount = () => {
  return {
    type: NEW_ACCOUNT_REQUEST,
    isFetching: true,
    inserted: false,
  }
}

export const receiveAccount = (account) => {
  return {
    type: NEW_ACCOUNT_SUCCESS,
    isFetching: false,
    message: '',
    inserted: true,
    account
  }
}

export const accountError = (message) => {
  return {
    type: NEW_ACCOUNT_FAILURE,
    isFetching: false,
    message
  }
}