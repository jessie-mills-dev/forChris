
import { SET_GAMBITS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_GAMBITS:
      return payload
    default:
      return state
  }
}

export default reducer
