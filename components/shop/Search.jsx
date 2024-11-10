const Search = () => {
  return (
    <>
      <div className="shop__sidebar-head">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#collapseSearch"
          aria-expanded="false"
          aria-controls="collapseSearch"
        >
          Search
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div className="shop__sidebar-content collapse show" id="collapseSearch">
        <form action="#" method="post">
          <div className="search_form">
            <input
              type="text"
              name="post-search"
              id="postSearch"
              placeholder="Search"
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
