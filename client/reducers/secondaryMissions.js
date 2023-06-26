import { SET_SECONDARY_MISSIONS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SECONDARY_MISSIONS:
      return payload
    default:
      return state
  }
}

export default reducer
