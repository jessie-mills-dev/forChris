import request from 'superagent'

const rootUrl = '/api/v1'

export function getMission() {
  return request.get(rootUrl + '/mission').then((res) => {
    return res.body.mission
  })
}
