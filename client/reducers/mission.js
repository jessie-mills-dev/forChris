import { SET_MISSION } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MISSION:
      return payload
    default:
      return state
  }
}

export default reducer
