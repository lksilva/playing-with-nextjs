import * as types from '../constants/Types'
import { ObjectIsIdentic } from '../utils/helpers'

export const storeUser = userAuth => ({ type: types.STORE_USER, userAuth })
export const setLoading = loading => ({ type: types.IS_LOADING, loading })

export const authenticate = (fields) => {
  return async (dispacth, getState) => {
    dispacth(setLoading(true));
    const { account } = getState();
    const isValidUser = account.users.some( item => ObjectIsIdentic(item, fields));
    if(isValidUser) {
      setTimeout(() => {
        dispacth(storeUser(fields));
        dispacth(setLoading(false));
      }, 3000);
    } else {
      setTimeout(() => {
        window.alert('Usuário ou senha inválido')
        dispacth(setLoading(false));
      }, 3000)
    }
  }
}
