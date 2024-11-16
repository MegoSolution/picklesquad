import Link from "next/link";

const ProgramCard = ({ data }) => {
  const { id, name, description, startTime, endTime, price, court, coach } = data;

  return (
    <div className="program-single">
      <div className="program__content">
        <h5>
        <Link href={`/program-details/${id}`} title="View Details">
            {name}
          </Link>
        </h5>
        <div className="program__content-meta">
          <p>
            <i className="fa-solid fa-calendar-week"></i> Start:{" "}
            {new Date(startTime).toLocaleString()}
          </p>
          <p>
            <i className="fa-solid fa-calendar-week"></i> End:{" "}
            {new Date(endTime).toLocaleString()}
          </p>
          <p>
            <i className="fa-solid fa-map-marker-alt"></i> Court:{" "}
            {court?.name || "N/A"}
          </p>
          <p>
            <i className="fa-solid fa-user"></i> Coach: {coach?.name || "N/A"}
          </p>
          <p>
            <i className="fa-solid fa-dollar-sign"></i> Price: ${price}
          </p>
        </div>
        <p className="secondary-text">{description}</p>
      </div>
      <div className="program-buttons">
        <Link
          href={`/program-details/${id}`}
          title="View Details"
          className="cmn-button cmn-button--secondary"
        >
          View Details
        </Link>
        <button
          onClick={() => alert("Proceed to Payment")}
          className="cmn-button"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
