import { Hero } from '../Hero/Hero';
import styles from './SectionHero.module.css';
import { data } from '../../data'

export function SectionHero() {
  return (
    <section className={styles.hero}>
      <Hero {...data.hero}/>
    </section>
  )
}
