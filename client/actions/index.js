
import { getMissionRules, getDeploymentZones, getPrimaryMissions, getSecondaryMissions, getGambits } from '../apis/mission'

export const SET_MISSION_RULES = 'SET_MISSION_RULES'
export const SET_PRIMARY_MISSIONS = 'SET_PRIMARY_MISSIONS'
export const SET_DEPLOYMENT_ZONES = 'SET_DEPLOYMENT_ZONES'
export const SET_SECONDARY_MISSIONS = 'SET_SECONDARY_MISSIONS'
export const SET_GAMBITS = 'SET_GAMBITS'

export function setMissionRules(missionRules) {
  return {
    type: SET_MISSION_RULES,
    payload: missionRules,
  }
}

export function fetchMissionRules() {
  return (dispatch) => {
    return getMissionRules().then((missionRules) => {
      dispatch(setMissionRules(missionRules))
    })
  }
}

export function setPrimaryMissions(primaryMissions) {
  return {
    type: SET_PRIMARY_MISSIONS,
    payload: primaryMissions,
  }
}

export function fetchPrimaryMissions() {
  return (dispatch) => {
    return getPrimaryMissions().then((primaryMissions) => {
      dispatch(setPrimaryMissions(primaryMissions))
    })
  }
}

export function setDeploymentZones(deploymentZones) {
  return {
    type: SET_DEPLOYMENT_ZONES,
    payload: deploymentZones,
  }
}

export function fetchDeploymentZones() {
  return (dispatch) => {
    return getDeploymentZones().then((deploymentZones) => {
      dispatch(setDeploymentZones(deploymentZones))
    })
  }
}

export function setSecondaryMissions(secondaryMissions) {
  return {
    type: SET_SECONDARY_MISSIONS,
    payload: secondaryMissions,
  }
}

export function fetchSecondaryMissions() {
  return (dispatch) => {
    return getSecondaryMissions().then((secondaryMissions) => {
      dispatch(setSecondaryMissions(secondaryMissions))
    })
  }
}

export function setGambits(gambits) {
  return {
    type: SET_GAMBITS,
    payload: gambits,
  }
}

export function fetchGambits() {
  return (dispatch) => {
    return getGambits().then((gambits) => {
      dispatch(setGambits(gambits))
    })
  }
}
