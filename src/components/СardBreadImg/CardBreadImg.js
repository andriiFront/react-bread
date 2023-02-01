import styles from './CardBreadImg.module.css'

export function CardBreadImg({ imgUrl, title, text, linkUrl }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        alt="bread"
        src={imgUrl}
      />
      <h4 className={styles.header}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <a
        href={linkUrl}
        className={styles.link}
      >
        more
      </a>
    </div>
  )
}
