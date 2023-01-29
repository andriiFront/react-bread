import styles from './SectionIngredients.module.css';
import { Hero } from '../Hero/Hero';
import { data } from '../../data'

export function SectionIngredients() {
  return (
    <section className={styles.section}>
      <Hero {...data.heroIngredient} />
    </section>
  )
}
