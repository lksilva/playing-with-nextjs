import * as types from '../constants/Types'

export const createAccount = user => ({ type: types.CREATE_ACCOUNT, user })
export const setLoading = loading => ({ type: types.IS_LOADING, loading })

export const sendContact = (user) => {
  return async (dispacth) => {
    dispacth(setLoading(true));
    setTimeout(() => {
      dispacth(createAccount(user));
      dispacth(setLoading(false));
    }, 3000);
  }
}