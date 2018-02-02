import * as types from '../constants/Types'

export const createAccount = () => ({ type: types.CREATE_ACCOUNT })
export const setLoading = loading => ({ type: types.IS_LOADING, loading })

export const sendContact = () => {
  return async (dispacth) => {
    dispacth(setLoading(true));
    setTimeout(() => {
      dispacth(createAccount());
      dispacth(setLoading(false));
    }, 3000);
  }
}
