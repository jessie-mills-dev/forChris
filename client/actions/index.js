import { getIncursion } from '../apis/mission'

// three things to create for each type of battle size here.

export const SET_INCURSION = 'SET_INCURSION'



export function setIncursion(incursion) {
  return {
    type: SET_INCURSION,
    payload: incursion,
  }
}

export function fetchIncursion() {
  return (dispatch) => {
    return getIncursion().then((incursion) => {
      dispatch(setIncursion(incursion))
    })
  }
}
