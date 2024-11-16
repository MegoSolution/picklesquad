import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProgramDetailsForm = () => {
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Fetch the program ID from URL

  // Fetch program data for the specific ID
  useEffect(() => {
    if (!id) return; // Wait until we have the ID

    fetch(`/api/program?id=${id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch program details");
        }
        return response.json();
      })
      .then((data) => {
        setProgram(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching program details:", error);
        setError("Failed to load program details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!program) return <p>Program not found.</p>;

  return (
    <div className="program-details-container">
      <h1 className="program-title">{program.name}</h1>
      <div className="program-details-content">
        <div className="program-info">
          <p><strong>Description:</strong> {program.description}</p>
          <p><strong>Start Time:</strong> {new Date(program.startTime).toLocaleString()}</p>
          <p><strong>End Time:</strong> {new Date(program.endTime).toLocaleString()}</p>
          <p><strong>Court:</strong> {program.court?.name || "N/A"}</p>
          <p><strong>Coach:</strong> {program.coach?.name || "N/A"}</p>
          <p><strong>Price:</strong> ${program.price}</p>
        </div>
      </div>
      <div className="program-actions">
        <button className="cmn-button" onClick={() => alert("Proceed to Payment")}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ProgramDetailsForm;
