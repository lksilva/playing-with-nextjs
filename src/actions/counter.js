import * as types from '../constants/CounterTypes'

export const incrementCounter = () => ({ type: types.INCREMENT })
export const decrementCounter = () => ({ type: types.DECREMENT })
