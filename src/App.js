import { Header } from './components/Header/Header'
import { SectionHero } from './components/SectionHero/SectionHero'
import { SectionIngredients } from './components/SectionIngredients/SectionIngredients'
import { SectionMiddle } from './components/SectionMiddle/SectionMiddle';

function App() {
  return (
    <div className="u-body u-xl-mode">
      <Header />
      <SectionHero />
      <SectionIngredients />
      <SectionMiddle />
    </div>
  );
}

export default App;
