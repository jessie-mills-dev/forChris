import { getMission } from '../apis/mission'

export const SET_MISSION = 'SET_MISSION'

export function setMission(mission) {
  return {
    type: SET_MISSION,
    payload: mission,
  }
}

export function fetchMission() {
  return (dispatch) => {
    return getMission().then((mission) => {
      dispatch(setMission(mission))
    })
  }
}
