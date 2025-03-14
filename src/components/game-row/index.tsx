import { IGame } from "../../schemas/gamesSchema";
import GameGallery from "../game-gallery";

type TGameRow = {
  game: IGame;
}


const GameRow: React.FC<TGameRow> = ({game}) => {
  return (
    <li className="game-row">
      <span className="game-name">{game.name}</span>
      {game.inWishList && <span className="game-in-wish-list">Favorites</span>}
      <GameGallery images={game.images}/>
      <span className="game-price">{game.price}</span>
    </li>
  );
}

export default GameRow;
