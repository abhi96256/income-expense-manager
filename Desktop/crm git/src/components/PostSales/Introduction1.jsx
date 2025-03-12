import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const Intro = () => {
  return (
    <div>
      <h2 style={headingStyle}>Introduction & Executive Summary:</h2>
      <p>
        This document serves as a comprehensive outline of the functional
        requirements for the Service & Contract Management System to be
        implemented at <strong style={headingStyle}>3S Logics Pvt. Ltd.</strong> The primary objective
        of this system is to enhance and streamline the processes of Service
        Ticket creation, management, and tracking status of tickets within the
        organization. By leveraging this system, <strong style={headingStyle}>3S Logics</strong> aims
        to ensure efficient service operations, improve customer relationship
        management (CRM), and ultimately drive higher sales performance.
      </p>
      <br />
      <h3 style={headingStyle}>Key Features of the Service Ticket & Service Contract Management System:</h3>

      <div className="benefit-section">
      <h3 style={headingStyle}>Service Ticket Creation:</h3>
        <p>
          Simplifies the process of creating new service tickets by verifying
          customer information and ensuring that all relevant details (e.g.,
          service type, priority, and customer requirements) are captured
          accurately and efficiently.
        </p>
      </div>

      <div className="benefit-section">
      <h3 style={headingStyle}>Service Ticket Management:</h3>
        <p>
          Enables filtering, updating, and reassigning of service tickets,
          allowing service teams to prioritize and focus on the most urgent or
          critical service requests. Facilitates status tracking and progress
          monitoring.
        </p>
      </div>

      <div className="benefit-section">
      <h3 style={headingStyle}>Contract Creation & Management:</h3>
        <p>
          Allows users to create and manage service contracts associated with
          customers. Ensures that all contract details, including service levels,
          terms, and renewal dates, are recorded and tracked.
        </p>
      </div>

      <div className="benefit-section">
      <h3 style={headingStyle}>Customer Payment Processing:</h3>
        <p>
          Facilitates secure and efficient payment collection by allowing
          customers to pay for services directly through the system. Supports
          multiple payment methods for completed transactions.
        </p>
      </div>

      <div className="benefit-section">
      <h3 style={headingStyle}>Mobile Access:</h3>
        <p>
          Provides easy access to the system via mobile devices, enabling
          engineers and service teams to manage tickets, update service statuses,
          and log activities on the go, ensuring uninterrupted productivity.
        </p>
      </div>

      <div className="benefit-section">
      <h3 style={headingStyle}>Employee Location Tracking:</h3>
        <p>
          Enhances accountability by capturing the real-time locations of field
          engineers during service activities, ensuring they are attending to
          assigned service tickets and improving transparency in operations.
        </p>
      </div>

      <br />
      <p>
        The system is designed with both desktop and mobile interfaces, allowing
        service teams to manage their tasks from anywhere, at any time. This
        flexibility is crucial in today’s fast-paced business environment, where
        responsiveness and mobility are essential for staying competitive.
        Additionally, the document includes screenshots to visually demonstrate
        the steps and functionalities described, ensuring clarity and ease of
        understanding for all users.
      </p>
    </div>
  );
};

export default Intro;
