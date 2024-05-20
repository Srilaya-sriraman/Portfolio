import React from 'react'
import styles from './Projects.module.css'
import { getImageUrl } from '../utils'

const Projects = () => {
  return (
    <section className={styles.container} id="proj">
        <center><p className={styles.mainhead}>Projects</p></center>
        <div className={styles.projects}>
            <div className={styles.project}>
                <img src={getImageUrl("Tic-tac-toe.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>Tic-Tac-Toe</p>
                <p className={styles.desp}>Developed an interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript.</p>
                <a href="https://srilaya-sriraman.github.io/Tic-Tac-Toe/" className={styles.btn}>View</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("Srilaya's Porfolio.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>My portfolio page</p>
                <p className={styles.desp}>Developed a responsive and adaptive portfolio website using Vite and React JS, showcasing my skills and projects. The site highlights my expertise in front-end development and provides a comprehensive overview of my professional abilities.</p>
                <a href="#" className={styles.btn}>View</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("FarmToFactory.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>FarmToFactory</p>
                <p className={styles.desp}>Designed a responsive and interactive e-commerce website using Figma, enabling farmers to sell their waste products directly online. The user-friendly design ensures a seamless experience, supporting sustainable practices and connecting farmers with small businesses.</p>
                <a href="https://www.figma.com/design/N6BNstcy3KBiCzjM0htpuo/FarmToFactory?node-id=0%3A1&t=AJwPNOlBafojoDfz-1" className={styles.btn}>View</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("HumanoidX.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>HumanoidX</p>
                <p className={styles.desp}>Crafted a professional and feature-rich design for the official club website of HumanoidX, implemented using Figma. This comprehensive design showcases the organization's mission and activities while incorporating engaging features to enhance user interaction and experience.</p>
                <a href="https://www.figma.com/design/ajjXNQ0Nwx1XTWnieqjMXa/Untitled?node-id=83%3A576&t=bllvj9MhonkfF2Ev-1" className={styles.btn}>View</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("Bloggistar.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>Bloggistar</p>
                <p className={styles.desp}>Designed a sleek and user-friendly blog page layout using Figma, ensuring an engaging and interactive experience for readers.</p>
                <a href="https://www.figma.com/design/LQpxiVqGDgwBXDa0sBoRJd/Blog-Application?node-id=0%3A1&t=bllvj9MhonkfF2Ev-1" className={styles.btn}>View</a>
            </div>
            <div className={styles.project}>
                <img src={getImageUrl("VMA.png")} className={styles.img} width="200px"></img>
                <p className={styles.head}>Virtual Medical Assistant</p>
                <p className={styles.desp}>Engineered a robust Patient and Doctor Management System using Python and MySQL, featuring remote mail sending functionality for streamlined communication.</p>
                <a href="https://github.com/Srilaya-sriraman/Virtual-Medical-Assistant" className={styles.btn}>View</a>
            </div>
        </div>
        <p className={styles.justUpper}> .</p>
    </section>
  )
}

export default Projects
