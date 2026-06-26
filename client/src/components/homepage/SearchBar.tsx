function SearchBar() {
  return (
    <div className="flex">
      <input
        className="h-10 rounded-l-lg w-96 px-4 border-2 border-border"
        type="text"
        placeholder="Search for torans, decorations, flowers..."
      />
      <button className="h-10 w-10 bg-primary flex justify-center items-center rounded-r-lg ">
        <img className="h-6" src="/src/assets/search.svg" alt="search" />
      </button>
    </div>
  );
}

export default SearchBar;
