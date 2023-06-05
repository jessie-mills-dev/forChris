import request from 'superagent'

const rootUrl = '/api/v1'

// export function getMission() {
//   return request.get(rootUrl + '/mission').then((res) => {
//     return res.body.mission
//   })
// }

export function getIncursion() {
  return request.get(rootUrl + '/incursion').then((res) => {
    return res.body
  })
}

// rinse and repeat
