import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import details_thumb_one from "/public/images/blog/details-thumb-one.png";
import details_thumb_three from "/public/images/blog/details-thumb-three.png";
import details_thumb_two from "/public/images/blog/details-thumb-two.png";
import details_thumb from "/public/images/blog/details-thumb.png";

const Details = ({ setOpen }) => {
  return (
    <>
      <div className="blog-details__inner">
        <div className="blog-details__thumb">
          <Image src={details_thumb} alt="Blog Details" />
        </div>
        <div className="blog-details__meta">
          <h3>Shop Golf Clubs Today - Free Shipping Available...</h3>
          <div className="blog-details__content-meta">
            <p>
              <i className="golftio-user"></i> Admin
            </p>
            <p>
              <i className="fa-solid fa-calendar-week"></i> 15-12-2022
            </p>
          </div>
          <div className="blog-details__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic...
            </p>
          </div>
          <div className="blog-details__content mb-0">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic...
            </p>
          </div>
          <div className="blog-details__meta-poster">
            <div className="row section__row align-items-center">
              <div className="col-md-6 section__col">
                <div className="blog-details__meta-poster-single">
                  <Image src={details_thumb_one} alt="Blog Details" />
                </div>
                <div className="blog-details__meta-poster-single">
                  <Image src={details_thumb_two} alt="Blog Details" />
                </div>
              </div>
              <div className="col-md-6 section__col">
                <div className="blog-details__meta-poster-single">
                  <Image src={details_thumb_three} alt="Blog Details" />
                  <div className="play-wrapper">
                    <button
                      // href="https://www.youtube.com/watch?v=RvreULjnzFo"
                      // target="_blank"
                      title="Youtube Video Player"
                      className="play-btn"
                      onClick={() => setOpen(true)}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-details__content">
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful.
            </p>
          </div>
          <div className="blog-details__meta-footer">
            {/* Socila */}
            <Social
              items={[
                ["fa-facebook-f", "/"],
                ["fa-twitter", "/"],
                ["fa-linkedin-in", "/"],
                ["fa-square-instagram", "/"],
              ]}
            />
            <ul>
              {[
                ["Facility", "facility"],
                ["Gallery", "gallery"],
                ["Shop", "shop"],
                ["Training", "training"],
              ].map(([itm, url], i) => (
                <li key={i}>
                  <Link href={url} className="cmn-button cmn-button--secondary">
                    {itm}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
