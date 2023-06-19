import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchIncursion } from '../actions'
import styles from './Incursion.module.scss'

function Incursion() {
  // This accesses your database of incursion data
  const incursion = useSelector((state) => state.incursion)
  // This is to get a list of all the images
  const incursionImage = incursion.map(res => res.deployment_image)
  // This is to look at how long that list is (.length) and randomly pick one
  const randomNumber = Math.floor(Math.random() * incursionImage.length)
  // This is matching an id in the database to the random number we generated before
  const singleIncursion = incursion.filter(res => res.id === randomNumber)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIncursion())
  }, [])

  return (
    <>
      <div className={styles.resultsContainer}>
        <h1 className={styles.resultsh1}>Results</h1>
        <div>{singleIncursion.map((res, i) => (
            <div className={styles.randomizedIncursion} key = {i}>
                <p>{res.battle_size}</p>
                <p>{res.mission_rules}</p>
                <img src={res.deployment_image}  width="600" alt="deployment"/>
            </div>
        ))}
        </div>  
      </div>
    </>
  )
}

export default Incursion
