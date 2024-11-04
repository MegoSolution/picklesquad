import Link from "next/link";

const Tags = () => {
  return (
    <div className="sidebar__tags">
      <Link
        href="/blog"
        className="cmn-button cmn-button--secondary"
        title="Blog"
      >
        New
      </Link>
      <Link
        href="/blog"
        className="cmn-button cmn-button--secondary"
        title="Blog"
      >
        Training
      </Link>
      <Link
        href="/blog"
        className="cmn-button cmn-button--secondary"
        title="Blog"
      >
        2023
      </Link>
      <Link
        href="/blog"
        className="cmn-button cmn-button--secondary"
        title="Blog"
      >
        Facility
      </Link>
      <Link
        href="/blog"
        className="cmn-button cmn-button--secondary"
        title="Blog"
      >
        Gallery
      </Link>
      <Link
        href="/blog"
        className="cmn-button cmn-button--secondary"
        title="Blog"
      >
        Shop
      </Link>
    </div>
  );
};

export default Tags;
