import styles from './SectionMiddle.module.css';
import { Hero } from '../Hero/Hero';
import { data } from '../../data'

export function SectionMiddle() {
  return (
    <section className={styles.section}>
      <Hero {...data.heroMiddle} />
    </section>
  )
}
