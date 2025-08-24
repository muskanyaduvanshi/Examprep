import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserHome = () => {
  const examineId = localStorage.getItem('userId');
  const [totalExams, setTotalExams] = useState(0);
  const [passedExams, setPassedExams] = useState(0);

  const handlefetch = async () => {
    try {
      // Total exams
      const examResponse = await axios.get(`http://localhost:5000/api/dashboard/exams/${examineId}`);
      setTotalExams(examResponse.data.totalExams || 0);

      // Passed exams
      const resultResponse = await axios.get(`http://localhost:5000/api/dashboard/examinee-result/${examineId}`);
      setPassedExams(resultResponse.data.passedExams || 0);
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
    <div>
      <div className='container-fluid p-0'>
        <div className="row ">
          <div className="col-sm-12 ">
            <div className="card p-2"
              style={{
                border: "1px solid #6f42c1",
                minHeight: "170px",
                width: "100%",
              }}>
              <div className="row mb-4">

                {/* Total Exams Card */}
                <div className="col-sm-4">
                  <div className="shadow p-4 bg-light text-center" style={{ border: "1px solid #6f42c1" }}>
                    <u style={{ color: "#6f42c1" }}>
                      <h5 className="fw-bold" style={{ height: "48px", color: "#6f42c1" }}>
                        <i className="fa-solid fa-file-lines me-2"></i>Total Exams
                      </h5>
                    </u>
                    <h5>{totalExams}</h5>
                  </div>
                </div>

                {/* Result Card: Passed & Failed */}
                <div className="col-sm-4">
                  <div className="shadow p-4 bg-light text-center" style={{ border: "1px solid #6f42c1" }}>
                    <u style={{ color: "#6f42c1" }}>
                      <h6 className="fw-bold" style={{ height: "30px", color: "#6f42c1" }}>
                        <i className="fa-solid fa-chart-line me-2"></i>Result Summary
                      </h6>
                    </u>
                    <h6 className="fw-bold text-success mb-1">
                      <i className="fa-solid fa-circle-check me-2"></i>Passed : {passedExams}
                    </h6>
                    <h6 className="fw-bold text-danger">
                      <i className="fa-solid fa-circle-xmark me-2"></i>Failed: {failedExams}
                    </h6>
                  </div>
                </div>

                {/* Overall Performance */}
                <div className="col-sm-4">
                  <div className="shadow h-100 p-4 bg-light text-center" style={{ border: "1px solid #6f42c1" }}>
                    <u style={{ color: "#6f42c1" }}>
                      <h6 className="fw-bold" style={{ height: "30px", color: "#6f42c1" }}>
                        <i className="fa-solid fa-chart-line me-2"></i>Overall Performance
                      </h6>
                    </u>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${performance}%` }}
                        aria-valuenow={performance}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {performance}%
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Exam Marks Table - Add Later If Needed */}
      </div>
    </div>
  );
};

export default UserHome;
