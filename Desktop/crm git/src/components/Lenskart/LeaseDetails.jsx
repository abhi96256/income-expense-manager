import React from 'react';
import pic from "../../assets/lenskart/lease agreement detail page.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const LeaseDetails = () => {
  return (
    <div>
      <h2  style={headingStyle}>Lease Agreement Detail Page:</h2>

      <div className="content-section">
        <p>The system manages Lease Agreements, Payee & Documents, Invoices, Payments, Renewals/Increments, and Adjustments for properties.</p><br />
        <img 
          src={pic}
          alt="Property Category Image" 
          style={{ width: '800px', marginRight: '10px' }} 
        /><br /><br />

        <b style={headingStyle}>Property Lease Details:</b><br />
        <br />
        Shows lease agreement details including:<br />
        <ol>
          <li>Lease holder's name (e.g., UDAY PRAKASH KANOI)</li>
<br/>
          <li>Property address (e.g., Guwahati, G.S Road Asian Palace, Assam, India)</li>
<br/>
          <li>Category of property (e.g., Shop cum Office)</li>
<br/>
          <li>Ownership status (e.g., Company Owned and Operated)</li>
<br/>
          <li>Lease dates (start date, finish date, next renewal date)</li>
<br/>
          <li>Financial details (amount, security deposit, lock-in period, notice period)</li>
<br/>
          <li>Lease status (e.g., Approved)</li>
<br/>
          <li>Lease identification number</li>
<br/>
        </ol>
      </div>
    </div>
  );
}

export default LeaseDetails;
