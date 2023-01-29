import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}
