const ContactItemCart = ({ info }) => {
  const { title, icon, contact_by } = info;
  return (
    <div className="contact__item">
      <div className="contact__item-thumb">
        <i className={icon}></i>
      </div>
      <div className="contact__item-content">
        <h5>{title}</h5>
        {contact_by?.map((itm, i) => (
          <p key={i} className="secondary-text">
            {itm}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactItemCart;
