import styles from './Section5.module.css';
import { Hero } from '../Hero/Hero';
import { data } from '../../data'

export function Section5() {
  return (
    <section className={styles.section}>
      <Hero {...data.heroMiddle} />
    </section>
  )
}
