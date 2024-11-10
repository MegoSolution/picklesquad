import Link from "next/link";
import Social from "../social/Social";

const facilityTags = [
  { id: 1, title: "Golf Course", url: "/facility/1" },
  { id: 2, title: "Expert Trainer", url: "/facility/1" },
  { id: 3, title: "Fitnes Center", url: "/facility/1" },
  { id: 4, title: "Golf Club", url: "/facility/1" },
  { id: 5, title: "Restaurant", url: "/facility/1" },
  { id: 6, title: "Swimming Pool", url: "/facility/1" },
  { id: 7, title: "Locker Room", url: "/facility/1" },
  { id: 8, title: "Best Ground", url: "/facility/1" },
];

const RightSide = () => {
  return (
    <div className="col-12 col-xl-4 section__col">
      <div className="sidebar wow fadeInUp" data-wow-duration="0.4s">
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
          <h5>All Facility</h5>
          <div className="sidebar__tab">
            <ul>
              {facilityTags.map(({ id, title, url }) => (
                <li key={id}>
                  <Link href={url} className="facility-tab-btn">
                    <i className="fa-solid fa-angle-right"></i> {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
      </div>
    </div>
  );
};

export default RightSide;
