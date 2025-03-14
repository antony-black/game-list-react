import { useState } from 'react';
import { TGames } from '../../schemas/gamesSchema';
import GameList from '../game-list';
import SearchBar from '../search-bar';

const FilterableGameList: React.FC<{games: TGames}> = ({ games }) => {
  const [filterText, setFilterText] = useState('');
  const [inWishListOnly, setInWishListOnly] = useState(false);

  return (
    <div className="filterable-game-list">
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        inWishListOnly={inWishListOnly}
        setInWishListOnly={setInWishListOnly}
      />
      <GameList games={games} filterText={filterText} inWishListOnly={inWishListOnly}/>
    </div>
  );
};

export default FilterableGameList;
