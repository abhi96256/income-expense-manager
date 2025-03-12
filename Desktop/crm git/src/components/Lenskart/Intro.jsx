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
      <h2  style={headingStyle}>Introduction & Executive Summary:</h2>

      <p>
        This document serves as a comprehensive outline of the functional
        requirements for the <b style={headingStyle}>Lease Management System</b> to be implemented at <b style={headingStyle}>FebiNext</b>. The primary objective of this system is to streamline and
        enhance the processes of lease creation, management, tracking of monthly
        invoices, payment sheet preparation, multi-department approval, and
        payment to vendors.
      </p>
      <p>
        By leveraging FebiNext, it aims to ensure efficient operations, better
        communication, and improved department coordination.
      </p>

      <h3  style={headingStyle}>Key Features of the Lease Management Module:</h3>
       <ul style={contentStyle}>
        <li>
          <b style={headingStyle}>Lease Creation:</b> Simplifies the process of adding new lease
          agreements by capturing all relevant information, ensuring accuracy and
          compliance with company policies.
        </li>
<br/>
        <li>
          <b style={headingStyle}>Lease Management:</b> Enables the filtering, updating, and monitoring
          of lease agreements, allowing teams to track active, upcoming, and
          expiring contracts efficiently.
        </li>
<br/>
        <li>
          <b style={headingStyle}>Rent Parameter Configuration:</b> Allows users to define key rent
          parameters, such as lease tenure, base rent, notice periods, and payment
          schedules, ensuring precise financial planning and tracking.
        </li>
<br/>
        <li>
          <b style={headingStyle}>Lease Tracking & Alerts:</b> Facilitates tracking of lease statuses,
          including renewal dates, possession details, and lock-in periods,
          ensuring that no agreement is overlooked.
        </li>
<br/>
        <li>
          <b style={headingStyle}>Invoice Submission:</b> Collects invoices, verifies them with the
          agreement, and ensures compliance.
        </li>
<br/>
      </ul>

      <p>
        The system offers a web interface, enabling users to manage leases from
        anywhere at any time. This flexibility is critical in today’s dynamic
        business environment, where quick response and operational efficiency are
        key. The document includes screenshots to visually illustrate the steps
        and features described, ensuring clarity and ease of understanding for all
        users.
      </p>

      <h2  style={headingStyle}>Success Criteria:</h2>
       <ul style={contentStyle}>
        <li>
          <b style={headingStyle}>Improved Lease Tracking:</b> Teams will gain better visibility into
          the status, renewal dates, and history of all lease agreements, reducing
          the risk of missed deadlines or non-compliance.
        </li>
<br/>
        <li>
          <b style={headingStyle}>Timely Renewals & Approvals:</b> The system will streamline the
          renewal and approval processes, ensuring that agreements are updated
          without delays.
        </li>
<br/>
        <li>
          <b style={headingStyle}>Enhanced Operational Efficiency:</b> By automating rent schedules,
          payment tracking, and notifications, the system will allow staff to
          manage leases more efficiently, improving productivity.
        </li>
<br/>
        <li>
          <b style={headingStyle}>Seamless User Experience:</b> FebiNext will provide a user-friendly
          interface, ensuring ease of use and quick adoption across teams,
          minimizing the learning curve.
        </li>
<br/>
      </ul>

      <p>
        In summary, the <b style={headingStyle}>Lease Management Module</b> at <b style={headingStyle}>Lenskart</b> is
        expected to revolutionize how property leases are managed, leading to more
        efficient operations, improved contract management, and ultimately better
        financial performance and compliance.
      </p>
    </div>
  );
};

export default Intro;
