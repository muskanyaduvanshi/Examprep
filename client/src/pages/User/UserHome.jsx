import React, { useState, useEffect } from 'react';
import api from "../../services/api";
const UserHome = () => {
  const examineId = localStorage.getItem('userId');
  const [totalExams, setTotalExams] = useState(0);
  const [passedExams, setPassedExams] = useState(0);
  const [recentResults, setRecentResults] = useState([]);

  const handlefetch = async () => {
    try {
      // Total exams
      const examResponse = await api.get(`/api/dashboard/exams/${examineId}`);
      setTotalExams(examResponse.data.totalExams || 0);

      // Passed exams + Results
      const resultResponse = await api.get(`/api/dashboard/examinee-result/${examineId}`);
      setPassedExams(resultResponse.data.passedExams || 0);
      setRecentResults(resultResponse.data.recentResults || []); // Expecting backend to send recent exams
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    handlefetch();
  }, []);

  const failedExams = totalExams - passedExams;
  const performance = totalExams > 0 ? ((passedExams / totalExams) * 100).toFixed(2) : 0;

  return (
    <div className="container-fluid p-3">
      <div className="row mb-4">
        {/* Total Exams */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <div className="card-header text-white" style={{ background: "#9a6cb9ff" }}>
              <h6 className="mb-0"><i className="fa-solid fa-file-lines me-2"></i>Total Exams</h6>
           
            </div>
            <div className="card-body text-center">
              <h5 className="fw-bold">Total Exam:1</h5>
              <br />
            </div>
          </div>
        </div>

        {/* Result Summary */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <div className="card-header text-white" style={{ background: "#9a6cb9ff" }}>
              <h6 className="mb-0"><i className="fa-solid fa-chart-line me-2"></i>Result Summary</h6>
            </div>
            <div className="card-body text-center">
              <h6 className="text-success fw-bold">
                <i className="fa-solid fa-circle-check me-2"></i>Passed: 1
              </h6>
              <h6 className="text-danger fw-bold">
                <i className="fa-solid fa-circle-xmark me-2"></i>Failed: 0
              </h6>
            </div>
          </div>
        </div>

        {/* Overall Performance */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <div className="card-header text-white" style={{ background: "#9a6cb9ff" }}>
              <h6 className="mb-0"><i className="fa-solid fa-percent me-2"></i>Overall Performance</h6>
           
          </div>
            <div className="card-body text-center">
              <div className="progress" style={{ height: "53px" }}>
                <div
                  className="progress-bar bg-success fw-bold"
                  role="progressbar"
                  
                  style={{ width: `${performance}%` }}
                >
                  {performance}%
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Results Table */}
      <div className="card shadow-lg border-0 mt-4">
        <div className="card-header text-white" style={{ background: "#9a6cb9ff" }}>
          <h6 className="mb-0"><i className="fa-solid fa-table me-2"></i>Recent Exam Results</h6>
        </div>
        <div className="card-body">
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Date</th>
                <th>Score (%)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentResults.length > 0 ? (
                recentResults.map((exam, index) => (
                  <tr key={index}>
                    <td>{exam.examName}</td>
                    <td>{new Date(exam.date).toLocaleDateString()}</td>
                    <td>{exam.score}%</td>
                    <td className={exam.passed ? "text-success fw-bold" : "text-danger fw-bold"}>
                      {exam.passed ? "Passed" : "Failed"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-muted">No recent exam results available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
