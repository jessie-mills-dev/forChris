import { SET_MISSION_RULES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MISSION_RULES:
      return payload
    default:
      return state
  }
}

export default reducer
