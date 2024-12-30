import Link from "next/link";

const ProgramCard = ({ data }) => {
  const { id, name, startTime, endTime, court, coach } = data;

  const adjustedStartTime = new Date(new Date(startTime).getTime() - 8 * 60 * 60 * 1000);
  const adjustedEndTime = new Date(new Date(endTime).getTime() - 8 * 60 * 60 * 1000);

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
            {adjustedStartTime.toLocaleString()}
          </p>
          <p>
            <i className="fa-solid fa-calendar-week"></i> End:{" "}
            {adjustedEndTime.toLocaleString()}
          </p>
          <p>
            <i className="fa-solid fa-map-marker-alt"></i> Court:{" "}
            {court?.name || "N/A"}
          </p>
          <p>
            <i className="fa-solid fa-user"></i> Coach: {coach?.name || "N/A"}
          </p>
        </div>
      </div>
      <div className="program-buttons">
        <Link
          href={`/program-details/${id}`}
          title="View Details"
          className="cmn-button"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
