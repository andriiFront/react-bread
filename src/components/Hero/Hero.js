import styles from './Hero.module.css'
import { BtnReadMore } from '../BtnReadMore/BtnReadMore'

export function Hero({imgUrl, title, text}) {
  
  return (
    <div className={styles.hero}>
      {imgUrl && <img
        className={styles.img}
        src={imgUrl}
        alt=""
      />}
      {title && <h1 className={styles.header}>{title}<br/></h1>}
      {text && <p className={styles.text}>{text}</p>}
      <p className={styles.text}>
        Image from&nbsp;
        <a href="#" target="_blank">
          Freepik
        </a>
      </p>
      <BtnReadMore />
    </div>
  )
}
