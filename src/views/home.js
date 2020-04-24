import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/navbar'
import StickyCard from '../components/sticky-card'
import SquareCard from '../components/square-card'
import Stats from '../components/stats'
import Post from '../components/post'
import ImageCard from '../components/image-card'
import ActionCall from '../components/action-call'
import Footer from '../components/footer'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Demo-Project</title>
        <meta
          name="description"
          content="This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations."
        />
        <meta property="og:title" content="Demo-Project" />
        <meta
          property="og:description"
          content="This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08"
        />
      </Helmet>
      <div className={styles.landing}>
        <Navbar></Navbar>
        <div className={styles.main}>
          <span className={styles.text}>Welcome! This is your initial Demo Project.</span>
          <span className={styles.text1}>
            Use this template to explore the features of the Playground. After you have finished the
            intro, you can have a look under this section for a recap of the features.
          </span>
        </div>
        <StickyCard></StickyCard>
      </div>
      <div className={styles['cards-section']}>
        <h1>What can you do in Playground</h1>
        <div className={styles['cards-grid']}>
          <SquareCard title="Drag &amp; drop elements"></SquareCard>
          <SquareCard title="Create components"></SquareCard>
          <SquareCard title="Upload your own assets"></SquareCard>
          <SquareCard title="Invite collaborators"></SquareCard>
          <SquareCard title="Change style in the Inspector"></SquareCard>
          <SquareCard title="Export code in  various frameworks"></SquareCard>
          <SquareCard title="Publish on our own hosting"></SquareCard>
          <SquareCard title="Responsiveness on multiple devices"></SquareCard>
        </div>
      </div>
      <div className={styles['stats-section']}>
        <Stats></Stats>
        <Post
          title="Deploy &amp; Code export"
          description="Once you have a design that you like, you can quickly copy the real-time generated code or export it into a zip file. You can also continue your work in CodeSandbox or take your project to GitHub. If you want, you can also publish the project using teleportHQ hosting, or add your own settings."
        ></Post>
      </div>
      <div className={styles['product-section']}>
        <Post
          title="Responsive projects"
          description="Responsiveness is essential when building a website. To change the resolution you're working at, use the sliders on each side of the canvas, or select the desired resolution from the breakpoints bar."
        ></Post>
        <img src="/playground_assets/phone.png" className={styles.image} />
      </div>
      <div className={styles['slider-section']}>
        <div className={styles['latest-projects']}>
          <Post
            title="Assets manager"
            description="You can upload your own assets and use them in the project. Moreover, if you're looking for a specific image or an icon you can look it up in the libraries that we provide."
          ></Post>
          <div className={styles.container}>
            <ImageCard
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ"
              title="Stock images"
              description="As we mentioned previously, you can use stock images to customize your website. Open the Unsplash tab in the Assets Manager, and replace this image by clicking on another one that you like. In the future, if you want to add an image, just click on it. For setting it as a background image, use ALT + click."
            ></ImageCard>
          </div>
        </div>
        <div className={styles.container1}>
          <ImageCard
            src="https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ"
            title="Props &amp; Dynamic content"
            description="You can create dynamic components, by using the props feature. At this moment, you can have dynamic text and the images. Click on this component to see how it works, and change the text or the image."
          ></ImageCard>
        </div>
        <ImageCard
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ"
          title="Collaboration &amp; Comments"
          description='Oh, and did we mention how cool the collaboration feature is? Click on the + on the top right bar, write the email of the person you want to share the project with, and you can immediately start collaborating. On the bottom left of the screen you have the "Comments" button, where you can communicate ideas by leaving messages on specific pages or components.'
        ></ImageCard>
      </div>
      <ActionCall></ActionCall>
      <Footer></Footer>
    </div>
  )
}

export default Home
