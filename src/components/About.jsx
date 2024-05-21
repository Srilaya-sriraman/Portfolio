import React from 'react'
import { getImageUrl } from '../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <>
    <section className={styles.container} id="about">
        <p className={styles.title}>About</p>
        <div className={styles.styleIt}><img src={getImageUrl("AboutLogo.png")} width="500px" alt="Me working" className={styles.Aboutimg}></img>
        <div className={styles.content}> 
        <ul className={styles.bringdown}>
            <li className={styles.group}>
            <p className={styles.contenthead}>Frontend Developer</p>
            <p className={styles.desp}>I’m a front-end enthusiast with solid experience creating responsive, user-friendly webpages. Skilled in HTML, CSS, and JavaScript, I’m eager to bring my design expertise to dynamic projects.</p>
            </li >
            <li className={styles.group}>
            <p className={styles.contenthead}>UI/ UX Designer</p>
            <p className={styles.desp}>As the Design Head at HumanoidX and a design member of the Avionics special teams, I have crafted numerous web designs using Figma, many of which have been developed into fully functional websites. My role involves leading design initiatives, ensuring the delivery of high-quality and innovative web solutions.</p>
            </li>
        </ul>
        </div>
        </div>
    </section>
    <p className={styles.justUpper}>.</p>
    </>
  )
}

export default About
