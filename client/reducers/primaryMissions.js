import { SET_PRIMARY_MISSIONS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PRIMARY_MISSIONS:
      return payload
    default:
      return state
  }
}

export default reducer
