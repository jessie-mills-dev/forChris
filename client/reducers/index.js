import { combineReducers } from 'redux'

import missionRules from './missionRules'
import deploymentZones from './deploymentZones'
import gambits from './gambits'
import primaryMissions from './primaryMissions'
import secondaryMissions from './secondaryMissions'


export default combineReducers({
  missionRules,
  deploymentZones,
  gambits,
  primaryMissions,
  secondaryMissions
})
