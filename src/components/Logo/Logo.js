import styles from './Logo.module.css'

export function Logo() {
  return (
    <a href="https://nicepage.com" className={styles.link}>
      <img
        alt="logo"
        src="//capp.nicepage.com/05f8c2040fb4e813f2af0c0654d1689d72c4c69e/images/default-logo.png"
        className={styles.img} />
    </a>
  )
}
