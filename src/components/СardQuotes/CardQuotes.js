import styles from './CardQuotes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export function CardQuotes({ title, text }) {
  return (
    <div className={styles.card}>
      <span className={styles.quoteContainer}>
        <FontAwesomeIcon icon={faQuoteLeft} className={styles.quote} />
      </span>
      <p className={styles.text}>{text}</p>
      <h5 className={styles.header}>{title}</h5>
    </div>
  )
}
