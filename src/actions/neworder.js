import { NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, NEW_ORDER_FAILURE } from '../constants/Types';

export const saveOrder = (order) => {
  return async (dispacth) => {
    dispacth(requestOrder());
    const isValid = !!order.product_list.length;
    if(isValid) {
      setTimeout(() => {
        dispacth(receiveOrder(order))
      }, 3000);
    } else {
      setTimeout(() => {
        dispacth(orderError('Preencha lista de compras'))
      }, 3000);
    }
  }
}

export const requestOrder = () => {
  return {
    type: NEW_ORDER_REQUEST,
    isFetching: true,
  }
}

export const receiveOrder = (order) => {
  return {
    type: NEW_ORDER_SUCCESS,
    isFetching: false,
    order
  }
}

export const orderError = (message) => {
  return {
    type: NEW_ORDER_FAILURE,
    isFetching: false,
    message
  }
}