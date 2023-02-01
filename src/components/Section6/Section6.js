import styles from './Section6.module.css';
import { data } from '../../data'
import { CardQuotes } from '../СardQuotes/CardQuotes'

export function Section6() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {data.cardsQuotes.map(card => (
          <div key={card.id}>
            <CardQuotes {...card}/>
          </div>
        ))}
      </div>
    </section>
  )
}
