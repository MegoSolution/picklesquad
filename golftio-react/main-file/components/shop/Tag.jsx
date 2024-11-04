import Link from "next/link";

const Tag = () => {
  return (
    <>
      <div className="shop__sidebar-head">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#collapseTag"
          aria-expanded="false"
          aria-controls="collapseTag"
        >
          Tag
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div className="shop__sidebar-content collapse show" id="collapseTag">
        <div className="product__tags">
          {[
            ["New", "/shop"],
            ["Discount", "/shop"],
            ["Promo", "/shop"],
            ["Item", "/shop"],
            ["Simple", "/shop"],
            ["High", "/shop"],
            ["Price", "/shop"],
          ].map(([itm, url], i) => (
            <Link
              key={i}
              href={url}
              className="cmn-button cmn-button--secondary"
            >
              {itm}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tag;
