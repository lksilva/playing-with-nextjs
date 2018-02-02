import * as types from '../constants/Types'

export const storeUser = () => ({ type: types.STORE_USER })
export const setLoading = loading => ({ type: types.IS_LOADING, loading })

export const authenticate = (inputs) => {
  return async (dispacth, inputs) => {
    dispacth(setLoading(true));
    console.log('State na action', inputs);
    setTimeout(() => {
      dispacth(storeUser({ name: 'vdc' }));
      dispacth(setLoading(false));
    }, 3000);
  }
}
