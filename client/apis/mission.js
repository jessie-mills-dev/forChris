import request from 'superagent'

const rootUrl = '/api/v1'

// export function getMission() {
//   return request.get(rootUrl + '/mission').then((res) => {
//     return res.body.mission
//   })
// }

export function getMissionRules() {
  return request.get(rootUrl + '/mission_rules').then((res) => {
    return res.body
  })
}

export function getPrimaryMissions() {
  return request.get(rootUrl + '/primary_missions').then((res) => {
    return res.body
  })
}

export function getDeploymentZones() {
  return request.get(rootUrl + '/deployment_zones').then((res) => {
    return res.body
  })
}

export function getSecondaryMissions() {
  return request.get(rootUrl + '/secondary_missions').then((res) => {
    return res.body
  })
}

export function getGambits() {
  return request.get(rootUrl + '/gambits').then((res) => {
    return res.body
  })
}

// rinse and repeat fir the others  
