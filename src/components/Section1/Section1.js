import { Hero } from '../Hero/Hero';
import styles from './Section1.module.css';
import { data } from '../../data'

export function Section1() {
  return (
    <section className={styles.hero}>
      <Hero {...data.hero}/>
    </section>
  )
}
