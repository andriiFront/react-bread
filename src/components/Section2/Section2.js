import styles from './Section2.module.css';
import { data } from '../../data'
import { CardBreadImg } from '../СardBreadImg/CardBreadImg'

export function Section2() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {data.cardsBread.map(card => (
          <div key={card.id}>
            <CardBreadImg {...card}/>
          </div>
        ))}
      </div>
     
    </section>
  )
}
