type TSearchBar = {
  filterText: string;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  inWishListOnly: boolean;
  setInWishListOnly: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchBar: React.FC<TSearchBar> = ({
  filterText,
  setFilterText,
  inWishListOnly,
  setInWishListOnly,
}) => {
  return (
    <form className="filter-form">
      <input
        className="search-input"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        type="text"
        placeholder="search by name"
      />
      <label>
        <input className="in-wish-list-checkbox" type="checkbox" checked={inWishListOnly} 
        onChange={e => setInWishListOnly(e.target.checked)}/>
        Only wish list
      </label>
    </form>
  );
};

export default SearchBar;
