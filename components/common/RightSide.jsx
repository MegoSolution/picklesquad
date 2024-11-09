import Social from "../social/Social";
import PopularBlog from "./PopularBlog";
import Tags from "./Tags";

const RightSide = () => {
  return (
    <>
      <div className="sidebar__single">
        <h5>Search</h5>
        <hr />
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

      <div className="sidebar__single">
        <h5>Popular Blog Posts</h5>
        <hr />
        {/* Popular Blog */}
        <PopularBlog />
      </div>
      <div className="sidebar__single">
        <h5>Popular Tags</h5>
        <hr />
        {/* Tags */}
        <Tags />
      </div>
      <div className="sidebar__single">
        <h5>Follow Our Journey</h5>
        <hr />

        {/* social */}
        <Social
          items={[
            ["fa-facebook-f", "/"],
            ["fa-twitter", "/"],
            ["fa-linkedin-in", "/"],
            ["fa-square-instagram", "/"],
          ]}
        />
      </div>
    </>
  );
};

export default RightSide;
