import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDeploymentZones, fetchMissionRules, fetchPrimaryMissions, fetchSecondaryMissions, fetchGambits } from '../actions'
import styles from './Results.module.scss'

function Results() {
  const missionRules = useSelector((state) => state.missionRules)
  const deploymentZones = useSelector((state) => state.deploymentZones)
  const primaryMissions = useSelector((state) => state.primaryMissions)
  const gambits = useSelector((state) => state.gambits)
  const secondaryMissions = useSelector((state) => state.secondaryMissions)
  // console.log(missionRules)
  // console.log(deploymentZones)
  // console.log(primaryMissions)
  // console.log(gambits)
  // console.log(secondaryMissions)
  // This is to get a list of all the images
  const deploymentImage = deploymentZones?.map(res => res)
  // This is to look at how long that list is (.length) and randomly pick one
  const randomNumber = Math.floor(Math.random() * deploymentImage?.length)
  // This is matching an id in the database to the random number we generated before
  const singleImage = deploymentImage?.filter(res => res.id === randomNumber)
  
  const currentImage = singleImage.map(res => res.img_url)

  console.log(currentImage)

  //

  const missionRulesMapped = missionRules?.map(res => res)
  // This is to look at how long that list is (.length) and randomly pick one
  const randomNumberMissionRules = Math.floor(Math.random() * missionRulesMapped?.length)
  // This is matching an id in the database to the random number we generated before
  const singleMission = missionRulesMapped?.filter(res => res.id === randomNumberMissionRules)
  
  const singleMissionName = singleMission?.map(res => res.mission_name)
  const singleMissionDetails = singleMission?.map(res => res.mission_details)

  console.log(singleMission)

  
  

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMissionRules())
    dispatch(fetchDeploymentZones())
    dispatch(fetchPrimaryMissions())
    dispatch(fetchGambits())
    dispatch(fetchSecondaryMissions())
  }, [])

  return (
    <>
      <div className={styles.resultsContainer}>
        <a href="/"><button>Home</button></a>
        <h1 className={styles.resultsh1}>Results</h1>
        {/* <div>{singleIncursion.map((res, i) => (
            <div className={styles.randomizedIncursion} key = {i}>
                <p>{res.battle_size}</p>
                <p>{res.mission_rules}</p>
                <img src={res.deployment_image}  width="600" alt="deployment"/>
            </div>
        ))} */}

        {/* </div>   */}
        {/* <div>
          {missionRules.map((res, i) => (
            <div className={styles.randomizedIncursion} key = {i}>
              <p>{res.mission_name}</p>
              <p>{res.mission_details}</p>
            </div>
          ))}
        </div> */}
        <div className={styles.randomizedIncursion}>
        <img src={currentImage} width='400px' alt="help"/>
        <p>{singleMissionName}</p>
        <p>{singleMissionDetails}</p>
        </div>
      </div>
    </>
  )
}

export default Results
