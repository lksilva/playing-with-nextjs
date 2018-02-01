import { DECREMENT, INCREMENT } from '../constants/CounterTypes'

const initialState = { value: 0 }

export default function counters(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + 1
      });

    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - 1
      });

    default:
      return state
  }
}
