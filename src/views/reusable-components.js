import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import SquareCard from '../components/square-card'
import Button from '../components/button'
import Post from '../components/post'
import FooterSection from '../components/footer-section'
import ImageCard from '../components/image-card'
import styles from './reusable-components.module.css'

const ReusableComponents = (props) => {
  return (
    <div className={styles.reusablecomponents}>
      <Helmet>
        <title>ReusableComponents - Demo-Project</title>
        <meta
          name="description"
          content="This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations."
        />
        <meta property="og:title" content="ReusableComponents - Demo-Project" />
        <meta
          property="og:description"
          content="This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08"
        />
      </Helmet>
      <h1 className={styles.heading1}>Reusable components</h1>
      <div className={styles.grid}>
        <span className={styles.text}>SquareCard</span>
        <SquareCard></SquareCard>
        <span className={styles.text1}>Button</span>
        <Button></Button>
        <span className={styles.text2}>Post</span>
        <div className={styles.post}>
          <Post></Post>
        </div>
        <span className={styles.text3}>FooterSection</span>
        <FooterSection></FooterSection>
        <span className={styles.text4}>ImageCard</span>
        <div className={styles.imagecard}>
          <ImageCard></ImageCard>
        </div>
      </div>
      <div className={styles.navigation}>
        <h1 className={styles.heading11}>Navigate to</h1>
        <div className={styles.buttons}>
          <Link to="/">
            <span className={styles.text5}>HOMEPAGE</span>
          </Link>
          <Link to="/layout-components">
            <span className={styles.text6}>LAYOUT COMPONENTS</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ReusableComponents
