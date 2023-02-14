import React from 'react'
import { WhiteClock } from '../../../Assets/Svg'
import classes from "./styles.module.css"
const Index = () => {
  return (
    <div className={classes.clockContainer}>
        <div className={classes.iconContainer}>

        <WhiteClock/>
        </div>
         <p>
            0:30
        </p>
    </div>
  )
}

export default Index