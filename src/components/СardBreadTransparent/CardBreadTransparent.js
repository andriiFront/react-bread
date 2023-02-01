import styles from './CardBreadTransparent.module.css'

export function CardBreadTransparent({ title, text }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.header}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
