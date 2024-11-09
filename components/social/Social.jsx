import Link from "next/link";

const Social = ({ items = [], cls = "justify-content-start" }) => {
  return (
    <div className={`social ${cls}`}>
      {items.map(([itm, url], i) => (
        <Link href={url} key={i}>
          <i className={`fa-brands ${itm}`}></i>
        </Link>
      ))}
    </div>
  );
};

export default Social;
