import React from 'react'
import { Link } from 'react-router-dom'

import styles from './action-call.module.css'

const ActionCall = (props) => {
  return (
    <div className={styles.actioncall}>
      <span className={styles.text}>Explore the reusable components.</span>
      <Link to="/reusable-components">
        <span className={styles.text1}>SEE COMPONENTS</span>
      </Link>
    </div>
  )
}

export default ActionCall
