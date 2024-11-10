import Link from "next/link";

const PricingCardOne = ({ data, cls = "", btnCls = "" }) => {
  const { title, price, desc, icon, options } = data;

  return (
    <div className={`pricing__card ${cls}`}>
      <div className="pricing__card-head">
        <div className="pricing__card-head__thumb">
          <i className={icon}></i>
        </div>
        <h2>
          <span className="primary-text">$</span>
          {price}
          <span className="primary-text">/Mo</span>
        </h2>
        <h5>{title}</h5>
        <p className="secondary-text">{desc}</p>
        <hr />
      </div>
      <div className="pricing__card-body">
        <ul>
          {options?.map((option) => (
            <li key={option} className="secondary-text">
              <i className="golftio-pin-checked"></i>
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="pricing__card-cta">
        <Link href="/join-club" className={`cmn-button ${btnCls}`}>
          Get Membership
        </Link>
      </div>
    </div>
  );
};

export default PricingCardOne;
