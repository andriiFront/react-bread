import styles from './Section4.module.css';
import { data } from '../../data'
import { CardBreadTransparent } from '../CardBreadTransparent/CardBreadTransparent'

export function Section2() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {data.cardsBreadTransparent.map(card => (
          <div key={card.id}>
            <CardBreadTransparent {...card}/>
          </div>
        ))}
      </div>
     
    </section>
  )
}
