import { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";
import Pagination from "../pagination/PaginationProgram";
import { useSelector } from "react-redux";

const ProgramForm = () => {
  const [programData, setProgramData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 9;
  const accessToken = useSelector((state) => state.accessToken);

  const fetchPrograms = (page) => {
    fetch(`/api/program?page=${page}&limit=${itemsPerPage}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch program data");
        }
        return response.json();
      })
      .then((data) => {
        setProgramData(data.results || []);
        setTotalItems(data.totalResults || 0);
        setCurrentPage(data.page || 1);
      })
      .catch((error) => console.error("Error fetching programs:", error));
  };

  useEffect(() => {
    fetchPrograms(currentPage); 
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };

  return (
    <div className="programs-container">
      <div className="programs-grid">
        {programData.map((program, index) => (
          <div key={program.id || index} className="program-card">
            <ProgramCard data={program || {}} />
          </div>
        ))}
      </div>
      <div className="program-page-navigation">
      <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProgramForm;