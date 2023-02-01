import styles from './Section3.module.css';
import { Hero } from '../Hero/Hero';
import { data } from '../../data'

export function Section3() {
  return (
    <section className={styles.section}>
      <Hero {...data.heroIngredient} />
    </section>
  )
}
