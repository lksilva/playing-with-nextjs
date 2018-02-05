import { NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, NEW_ORDER_FAILURE, REMOVE_ORDER } from '../constants/Types';

export const saveOrder = (order) => {
  return async (dispacth) => {
    dispacth(requestOrder());
    const isValid = !!order.product_list.length && !!order.company_name;
    if(isValid) {
      setTimeout(() => {
        dispacth(receiveOrder(order))
      }, 3000);
    } else {
      setTimeout(() => {
        dispacth(orderError('Preencha lista de compras e o nome da empresa'))
      }, 3000);
    }
  }
}

export const removeOrder = (id) => {
  console.log('Remover pedido', id);
  return {
    type: REMOVE_ORDER,
    id
  }
}

export const requestOrder = () => {
  return {
    type: NEW_ORDER_REQUEST,
    isFetching: true,
    inserted: false,
  }
}

export const receiveOrder = (order) => {
  return {
    type: NEW_ORDER_SUCCESS,
    isFetching: false,
    message: '',
    inserted: true,
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