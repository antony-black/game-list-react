import './App.css';
import FilterableGameList from './components/filterable-game-list';
import { GAMES } from './mock-data/gamesData';

const App: React.FC = () => {
  return (
    <div className="App">
      <FilterableGameList games={GAMES}/>
    </div>
  );
}

export default App;
