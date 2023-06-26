import { SET_DEPLOYMENT_ZONES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_DEPLOYMENT_ZONES:
      return payload
    default:
      return state
  }
}

export default reducer
