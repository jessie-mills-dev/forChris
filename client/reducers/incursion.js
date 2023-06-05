import { SET_INCURSION } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_INCURSION:
      return payload
    default:
      return state
  }
}

export default reducer
