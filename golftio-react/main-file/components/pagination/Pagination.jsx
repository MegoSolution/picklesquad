import Link from "next/link";

const Pagination = () => {
  return (
    <ul className="pagination">
      <li>
        <button>
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </li>
      <li>
        <Link href="/blog">1</Link>
      </li>
      <li>
        <Link href="/blog">2</Link>
      </li>
      <li>
        <Link href="/blog">3</Link>
      </li>
      <li>
        <Link href="/blog">...</Link>
      </li>
      <li>
        <button>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
