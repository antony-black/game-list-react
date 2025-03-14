import React from 'react';
import { TGames } from '../../schemas/gamesSchema';
import GameCategoryRow from '../game-category-row';
import GameRow from '../game-row';

type TGameList = {
  games: TGames;
  filterText: string;
  inWishListOnly: boolean;
}

const GameList: React.FC<TGameList> = ({games, filterText, inWishListOnly}) => {
  const rows: any = [];
  let lastCategory = '';

  games.forEach(game => {
    if (game.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inWishListOnly && !game.inWishList) {
      return;
    }
    
    if (game.category !== lastCategory) {
      rows.push(<GameCategoryRow key={game.category} category={game.category}/>)
    }

    rows.push(<GameRow key={game.name} game={game}/>)
    lastCategory = game.category;
  });
  return (
    <ul className='game-list'>
      {rows}
    </ul>
  );
}

export default GameList;
