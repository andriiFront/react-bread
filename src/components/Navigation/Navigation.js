import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <div>
        <a className={styles.link}>
          <FontAwesomeIcon icon={faBars} className={styles.icon} />
        </a>
      </div>
    </nav>
  )
}
