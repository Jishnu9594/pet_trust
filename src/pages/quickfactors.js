import React from "react";
import {
  FaUniversity,
  FaClinicMedical,
  FaUserMd,
  FaCalendarAlt,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

const QuickFactors = () => {
  return (
    <section id="quickFactors" className="quick-factors-section">
      <div className="container">
        <div className="quickFactorsMain">
          <h2>Performance</h2>
          <h1>The Finest Services by Pet Trust Hospital</h1>
          <div className="quickFactorsList">
            <div className="quickFactorsBox">
              <div className="quickFactorsBoxIcon">
                <FaUsers />
              </div>
              <h3>10000+</h3>
              <p>Happy Pet Families</p>
            </div>
            <div className="quickFactorsBox">
              <div className="quickFactorsBoxIcon">
                <FaUniversity />
              </div>
              <h3>5+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="quickFactorsBox">
              <div className="quickFactorsBoxIcon">
                <FaClinicMedical />
              </div>
              <h3>4</h3>
              <p>Specialty Clinics</p>
            </div>
            <div className="quickFactorsBox">
              <div className="quickFactorsBoxIcon">
                <FaUserMd />
              </div>
              <h3>12+</h3>
              <p>Veterinary Experts</p>
            </div>
            <div className="quickFactorsBox">
              <div className="quickFactorsBoxIcon">
                <FaCalendarAlt />
              </div>
              <h3>365</h3>
              <p>Days of Service</p>
            </div>

            <div className="quickFactorsBox">
              <div className="quickFactorsBoxIcon">
                <FaBriefcase />
              </div>
              <h3>60+</h3>
              <p>Staff Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFactors;
