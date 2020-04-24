import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import StickyCard from '../components/sticky-card'
import Stats from '../components/stats'
import Navbar from '../components/navbar'
import ActionCall from '../components/action-call'
import Footer from '../components/footer'
import styles from './layout-components.module.css'

const LayoutComponents = (props) => {
  return (
    <div className={styles.layoutcomponents}>
      <Helmet>
        <title>LayoutComponents - Demo-Project</title>
        <meta
          name="description"
          content="This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations."
        />
        <meta property="og:title" content="LayoutComponents - Demo-Project" />
        <meta
          property="og:description"
          content="This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08"
        />
      </Helmet>
      <h1 className={styles.heading1}>Layout components</h1>
      <div className={styles.grid}>
        <span className={styles.text}>StickyCard</span>
        <div className={styles.stickycard}>
          <StickyCard></StickyCard>
        </div>
        <span className={styles.text1}>Navbar</span>
        <div className={styles.stats}>
          <Stats></Stats>
        </div>
        <span className={styles.text2}>Stats</span>
        <div className={styles.navbar}>
          <Navbar></Navbar>
        </div>
        <span className={styles.text3}>ActionCall</span>
        <ActionCall></ActionCall>
        <span className={styles.text4}>Footer</span>
        <Footer></Footer>
      </div>
      <div className={styles.navigation}>
        <h1 className={styles.heading11}>Navigate to</h1>
        <div className={styles.buttons}>
          <Link to="/">
            <span className={styles.text5}>HOMEPAGE</span>
          </Link>
          <Link to="/reusable-components">
            <span className={styles.text6}>REUSABLE COMPONENTS</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LayoutComponents
