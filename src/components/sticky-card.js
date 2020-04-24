import React from 'react'

import styles from './sticky-card.module.css'

const StickyCard = (props) => {
  return (
    <div className={styles.stickycard}>
      <img src="/playground_assets/corner.png" className={styles.image} />
      <span className={styles.text}>Have an idea in mind?</span>
      <span className={styles.text1}>
        Just start creating. Double-click on this component to edit its proprieties.
      </span>
    </div>
  )
}

export default StickyCard
