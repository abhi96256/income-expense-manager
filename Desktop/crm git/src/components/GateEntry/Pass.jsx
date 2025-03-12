import React from 'react';
import  pic from "../../assets/Gate/Print Pass.jpg"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const PrintPass = () => {
  return (
    <div className="print-pass-form">
      <h2 style={headingStyle}>Print Pass:</h2>

      <section className="print-pass-action">
       
        <div className="action-details">
          <strong style={headingStyle}>Action:</strong>The system allows <strong style={headingStyle}> Print Pass </strong>functionality at two stages:
          <div>
           
             <ul style={contentStyle}>
              <li><strong style={headingStyle}>After Check-In:</strong></li>
<br/>
               <ul style={contentStyle}>
              
                 <ul style={contentStyle}>
                <li>Generates a temporary pass containing Check-In details:</li>
<br/>
                  <li>Visitor/Vehicle Name</li>
<br/>
                  <li>Organisation/Vehicle Type</li>
<br/>
                  <li>Mobile Number/Driver Information</li>
<br/>
                  <li>Purpose of Visit and Meeting Details</li>
<br/>
                  <li><strong style={headingStyle}>Check-In Time and Check-In By</strong></li>
<br/>
                </ul>
              </ul>
              <li><strong style={headingStyle}>After Check-Out:</strong></li>
<br/>
               <ul style={contentStyle}>
               
                
                <li>Updates the pass with additional Check-Out details, including:</li>
<br/>
                  <li><strong style={headingStyle}>Check-Out Time and Check-Out By</strong></li>
<br/>
                </ul>
              </ul>
            
          </div>
        </div>
      </section>
      <img 
                    src={pic }
                    alt="Print Pass" 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />

      <section className="ui-elements">
        <h4 style={headingStyle}>UI Elements</h4>
        <div className="print-pass-button">
          <p><strong style={headingStyle}>Print Pass Button:</strong></p>
           <ul style={contentStyle}>
            <li>Accessible during both Check-In and Check-Out screens.</li>
<br/>
            <li>Generates a formatted document displaying:</li>
<br/>
             <ul style={contentStyle}>
              <li>Visitor/Vehicle Information</li>
<br/>
              <li>Meeting/Purpose of Visit Details</li>
<br/>
              <li>Item/Document Details (if applicable)</li>
<br/>
              <li><strong style={headingStyle}>Check-In and Check-Out Time</strong> (after Check-Out)</li>
<br/>
              <li><strong style={headingStyle}>Check-In and Check-Out By </strong>(after Check-Out)</li>
<br/>
            </ul>
          </ul>
        </div>
      </section>

      <section className="actions">
        <h4 style={headingStyle}>Actions</h4>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Print Pass:</strong> Generates the pass in a print-ready format.</li>
<br/>
          <li><strong style={headingStyle}>Cancel:</strong> Exits the Print Pass modal without printing.</li>
<br/>
        </ul>
      </section>

      <section className="success-criteria">
        <h4 style={headingStyle}>Success Criteria</h4>
         <ul style={contentStyle}>
          <li>Seamless generation of passes at both Check-In and Check-Out stages.</li>
<br/>
          <li>Inclusion of accurate, pre-filled Check-In data and updated Check-Out details.</li>
<br/>
          <li>Clear and formatted display of all relevant information for verification.</li>
<br/>
        </ul>
      </section>

      <section className="summary">
        <h4 style={headingStyle}>Summary</h4>
        <p>The system efficiently manages Check-In, Check-Out, and Print Pass functionalities for both visitors and vehicles. By enabling seamless registration, validation, and retrieval of pre-stored data, the system ensures accuracy, ease of use, and streamlined operations. The ability to print passes at both entry and exit stages enhances documentation and record-keeping, ensuring transparency and operational efficiency across all user interactions.</p>
        <p>The Check-Out process ensures data consistency by allowing it only after a successful Check-In, while the Print Pass feature facilitates generating entry and exit records for documentation. This ensures operational efficiency, accuracy, and enhanced security across all workflows.</p>
      </section>
    </div>
  );
}

export default PrintPass;
