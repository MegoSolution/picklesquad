import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ProgramDetailsForm = () => {
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Fetch the program ID from URL
  const accessToken = useSelector((state) => state.accessToken);
  const currentUser = useSelector(state => state.user);

  useEffect(() => {
    if (!id) return; 

    fetch(`/api/program?id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
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

  const adjustedStartTime = new Date(new Date(program.startTime).getTime() - 8 * 60 * 60 * 1000);
  const adjustedEndTime = new Date(new Date(program.endTime).getTime() - 8 * 60 * 60 * 1000);

  const handleBooking = async () => {
    try {
      const response = await fetch("/api/program", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          programId: id,
          price: program.price, 
          user: currentUser?.user._id,
        }),
      });

      if (!response.ok) {
        throw new Error("Program Booking failed. Please try again.");
      }

      const data = await response.json();
      console.log("Program Booking created:", data);
      alert(data.message);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <div className="program-details-container">
      <h1 className="program-title">{program.name}</h1>
      <div className="program-details-content">
        <div className="program-info">
          <p><strong>Description:</strong> {program.description}</p>
          <p><strong>Start Time:</strong> {adjustedStartTime.toLocaleString()}</p>
          <p><strong>End Time:</strong> {adjustedEndTime.toLocaleString()}</p>
          <p><strong>Court:</strong> {program.court?.name || "N/A"}</p>
          <p><strong>Coach:</strong> {program.coach?.name || "N/A"}</p>
          <p><strong>Price:</strong> RM {program.price}</p>
        </div>
      </div>
      <div className="program-actions">
        <button className="cmn-button" onClick={handleBooking}>
          Proceed to Payment
        </button>
        <button 
        className="cmn-button cmn-button--secondary"
        onClick={() => router.back()}
      >
        Back
      </button>
      </div>
    </div>
  );
};

export default ProgramDetailsForm;
