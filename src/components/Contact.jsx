import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../utils'

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
        <div className={styles.content}>
            <a href="https://in.linkedin.com/in/srilaya-sriraman-75249b252?original_referer=https%3A%2F%2Fwww.google.com%2F"><img src={getImageUrl("LinkedIn.png")} className={styles.img}></img></a>
            <a href="https://github.com/Srilaya-sriraman"><img src={getImageUrl("Github.png")} className={styles.img}></img></a>
            <a href="mailto:srilayasriraman@gmail.com"><img src={getImageUrl("Mail.png")} className={styles.img}></img></a>
        </div>
        <p className={styles.desp}>Made with Love by Srilaya ❤️</p>
    </section>
  )
}

export default Contact
