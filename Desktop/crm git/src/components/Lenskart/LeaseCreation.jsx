import React from 'react';
import  pic from "../../assets/lenskart/penalty for delayed (lease_creation).png"
import  pic1 from "../../assets/lenskart/generation lease.png"
import  pic2 from "../../assets/lenskart/rent parameter(lease_creation).png"
import  pic3 from "../../assets/lenskart/security deposit(lease_creation).png"
import  pic4 from "../../assets/lenskart/lease renewal(lease_creartion).png"

const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};




const LeaseCreation = () => {
  return (
    <div>
      <h2  style={headingStyle}>Lease Creation:</h2>

      <p><b  style={headingStyle}>1. General Lease Information Section-</b></p>
      <br />
      <img src={pic1} alt="Property Category Image" style={{ width: '900px', marginRight: '10px' }} />
      <br />
       <ul style={contentStyle}>
        <li><b style={headingStyle}>Document:</b> A dropdown to select the relevant lease document.</li>
<br/>
        <li><b style={headingStyle}>Agreement Type:</b> A dropdown field for selecting the type of agreement (e.g., Building Lease).</li>
<br/>
        <li><b style={headingStyle}>Lease Date:</b> Select the date in which the lease agreement was made.</li>
<br/>
        <li><b style={headingStyle}>Ownership Type:</b> A dropdown menu to specify the ownership structure of the property (e.g., Self-Owned, Leased).</li>
<br/>
        <li><b style={headingStyle}>Property Category:</b> A dropdown to categorize the type of property (e.g., Residential, Commercial, Industrial).</li>
<br/>
        <li><b style={headingStyle}>Address:</b>
          <br />
           <ul style={contentStyle}>
            <li>Address Line 1 & 2: Text fields for entering the street address or any specific location details.</li>
<br/>
            <br />
            <li>City, State, Country: Dropdown menus for selecting the respective location.</li>
<br/>
            <br />
            <li>Pin Code: Postal code of the property location will be filled automatically based on Area.</li>
<br/>
            <br />
          </ul>
        </li>
<br/>
        <li><b style={headingStyle}>Landmark:</b> A text field to specify any nearby landmark to help identify the property.</li>
<br/>
        <li><b style={headingStyle}>Lessor Name:</b> A dropdown to select the name of the landlord or property owner.</li>
<br/>
      </ul>

      <p><b style={headingStyle}>2. Rent Parameters Section -</b></p>
      <br />
      <img src={pic2} style={{ width: '900px', marginRight: '10px' }} />
      <br />
       <ul style={contentStyle}>
        <li><b style={headingStyle}>Lease No.:</b> Enter the lease number if available, otherwise, it will generate automatically.</li>
<br/>
        <li><b style={headingStyle}>Start Date:</b> Date picker fields to input the start date of the lease.</li>
<br/>
        <li><b style={headingStyle}>Lease Tenure:</b> Input field (in months) to specify the total duration of the lease.</li>
<br/>
        <li><b style={headingStyle}>Finish Date:</b> Date picker fields to input the end date of the lease.</li>
<br/>
        <li><b style={headingStyle}>Lock-in Period:</b> Input field (in months) for the minimum period within which the lease cannot be terminated.</li>
<br/>
        <li><b style={headingStyle}>Possession Date:</b> Date picker to capture the possession date of the property. Select the possession date, it must be greater than the Start Date of Lease.</li>
<br/>
        <li><b style={headingStyle}>Operation (E):</b> Date picker fields to select the Effective Operation date. It must be greater than Possession Date of Lease.</li>
<br/>
        <li><b style={headingStyle}>Operation (A):</b> Date picker fields to select the Actual Operation date. It must be greater than Effective Operation date of Lease.</li>
<br/>
        <li><b style={headingStyle}>Notice Period:</b> Input field for entering the notice period in months.</li>
<br/>
        <li><b style={headingStyle}>Lease Area (C):</b> A field to enter the Chargeable area of the lease in square feet.</li>
<br/>
        <li><b style={headingStyle}>Lease Area (A):</b> A field to enter the Actual area of the lease in square feet.</li>
<br/>
        <li><b style={headingStyle}>Rate:</b> A field to input the rent rate per square foot.</li>
<br/>
        <li><b style={headingStyle}>Rent Start Date:</b> Date picker fields to input the rent start date of the lease.</li>
<br/>
        <li><b style={headingStyle}>Base Amount:</b> Enter the base amount for the lease or it will be calculated automatically with the Lease Area (C) & Rate.</li>
<br/>
        <li><b style={headingStyle}>Payment Due (Day):</b> A field to specify the day of the month when rent is due.</li>
<br/>
        <li><b style={headingStyle}>Has Variable:</b> A toggle switch to indicate if the rent amount varies over time.</li>
<br/>
        <li><b style={headingStyle}>Currency:</b> A dropdown to select the currency in which rent will be paid (e.g., INR, USD).</li>
<br/>
      </ul>

      <p><b style={headingStyle}>3. Penalty for Delayed Payment Section-</b></p>
      <br />
      <img src={pic} alt="Property Category Image" style={{ width: '900px', marginRight: '10px' }} />
      <br />
       <ul style={contentStyle}>
        <li><b style={headingStyle}>Penalty Type:</b> A dropdown to select the type of penalty for delayed payment.</li>
<br/>
        <li><b style={headingStyle}>Start From:</b> A date picker to select the start date for the penalty application.</li>
<br/>
        <li><b style={headingStyle}>Penalty (%):</b> A text field, enabled if you choose Penalty Type - Percentage.</li>
<br/>
        <li><b style={headingStyle}>Penalty Amount:</b> A text field, enabled if you choose Penalty Type - Amount.</li>
<br/>
      </ul>

      <p><b style={headingStyle}>4. Security Deposit Section-</b></p>
      <br />
      <img src={pic3} alt="Property Category Image" style={{ width: '900px', marginRight: '10px' }} />
      <br />
       <ul style={contentStyle}>
        <li><b style={headingStyle}>No. of Months:</b> Input field to specify the number of months' rent collected as a security deposit.</li>
<br/>
        <li><b style={headingStyle}>Amount:</b> Enter the amount for the security deposit, or it will be auto-calculated based on the number of months entered.</li>
<br/>
      </ul>

      <p><b style={headingStyle}>5. Lease Renewal Parameters Section-</b></p>
      <br />
      <img src={pic4} alt="Property Category Image" style={{ width: '900px', marginRight: '10px' }} />
      <br />
       <ul style={contentStyle}>
        <li><b style={headingStyle}>Frequency:</b> A field to specify the renewal frequency (in months).</li>
<br/>
        <li><b style={headingStyle}>Next Renewal Date:</b> A date picker to select the date for the next lease renewal, or it will be auto-calculated based on the typed frequency.</li>
<br/>
      </ul>

      <p><b style={headingStyle}>6. Payee Section-</b></p>
       <ul style={contentStyle}>
        <li><b style={headingStyle}>Add Payee (+):</b> A button to add new payee information related to the lease.</li>
<br/>
        <li><b style={headingStyle}>Payee List:</b> Displays a list of payees associated with the lease (once added).</li>
<br/>
      </ul>
    </div>
  );
};

export default LeaseCreation;
