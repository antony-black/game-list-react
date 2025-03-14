type TGameCategoryRow = {
  category: string;
};

const GameCategoryRow: React.FC<TGameCategoryRow> = ({ category }) => {
  return (
    <li className="game-category">
      <h2>{category}</h2>
    </li>
  );
};

export default GameCategoryRow;
