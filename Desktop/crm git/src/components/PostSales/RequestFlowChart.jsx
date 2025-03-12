import React from 'react';
import  pic from "../../assets/Post/Service Request FLOW CHART.jpg"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const RequestFlowChart = () => {
  return (
    <section id="service-request-flow-chart">
      <h2 style={headingStyle}>Service Request FLOW CHART:</h2>
      <img 
        src={pic}
        alt="Service Request FLOW CHART" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <br />

      <p>
        Service Request Management simplifies handling service requests from
        submission to resolution. Users enter contact information, either by
        adding new contacts or importing existing ones, and then proceed to the
        Service Request Form. This leads to two workflows: one for creating a
        service ticket with details like category, issue, priority, and assigned
        engineer, and another for viewing and managing all requests, including
        options to update, duplicate, respond to, cancel, or close tickets.
        <br />
        <br />
        The system displays requests in a list with filtering options for criteria
        like status and priority. Each entry shows key details, such as request
        ID, issue category, and status. Action buttons allow users to update, add
        notes, reassign engineers, or close tickets, and bulk actions can be
        performed for multiple requests. Success depends on accurate, consistent
        data and a user-friendly interface. The system can also support payment
        collection by tracking payment statuses, generating invoices, and managing
        outstanding payments, offering a complete solution for service management
        and billing.
      </p>

      <div className="section">
        <h2 style={headingStyle}>Conclusion</h2>
        <p>
          The Service Request system’s UI is designed for efficient handling of
          tickets, featuring intuitive filters and action buttons to streamline
          service request management and tracking. This ensures that all relevant
          information is captured efficiently, maximizing productivity and
          accuracy in the sales process.
        </p>
      </div>
    </section>
  );
};

export default RequestFlowChart;
