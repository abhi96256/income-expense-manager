import React from 'react';
import  pic from "../../assets/Pre/Adding a New Contact.png"
import  pic1 from "../../assets/Pre/Adding a Lead.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};



const LeadCreation = () => {
  return (
    <section id="lead-creation">
      <h2 style={headingStyle}>Lead Creation:</h2>
      <p>
        This process involves checking if a contact already exists, followed by displaying the appropriate form for either adding a lead or saving a new contact.
      </p>

      <h3 style={headingStyle}>Contact Search by Mobile Number</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Input:</strong> The user inputs a mobile number into the search field.</li>
<br/>
        <li><strong style={headingStyle}>Action:</strong>
           <ul style={contentStyle}>
            <li>The system will automatically search the database to check if the mobile number already exists.</li>
<br/>
            <li>If the mobile number is found in the database, the system will load the existing contact's information and display the "Add Lead" form.</li>
<br/>
            <li>If the mobile number is not found, the system will display the "Save Contact" form to add a new contact before proceeding to add a lead.</li>
<br/>
          </ul>
        </li>
<br/>
      </ul>

      <h3 style={headingStyle}>1. Adding a New Contact (If Mobile Number Not Found)</h3>
      <img src={pic} alt="Adding a New Contact" style={{ width: '850px', marginRight: '10px' }} />
      
      <h4>UI Elements:</h4>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Contact Type:</strong> A selection option for choosing between Organisation or Individual.</li>
<br/>
        <li><strong style={headingStyle}>Organisation Name:</strong> Text field for entering the name of the organisation (appears when Organisation is selected).</li>
<br/>
        <li><strong style={headingStyle}>Contact Person:</strong> Fields for entering the first and last name of the contact person.</li>
<br/>
        <li><strong style={headingStyle}>Mobile Number:</strong> A text field pre-filled with the mobile number used in the search (mandatory field).</li>
<br/>
        <li><strong style={headingStyle}>Alternate Number:</strong> A field to input an alternate mobile number.</li>
<br/>
        <li><strong style={headingStyle}>Email ID:</strong> An optional field to input the contact’s email address.</li>
<br/>
        <li><strong style={headingStyle}>Designation:</strong> An optional dropdown to select the contact person’s job title.</li>
<br/>
        <li><strong style={headingStyle}>Department:</strong> An optional dropdown for selecting the department of the contact.</li>
<br/>
        <li><strong style={headingStyle}>Industry Type:</strong> Dropdown to select the industry category of the contact.</li>
<br/>
        <li><strong style={headingStyle}>Account Type:</strong> Dropdown for selecting the account type (Customer, Supplier, Partner).</li>
<br/>
        <li><strong style={headingStyle}>Address:</strong> Fields to input the contact's address details (Address Line 1, Line 2, City, State, Country).</li>
<br/>
      </ul>
      <br />
      <p><strong style={headingStyle}>Success Criteria:</strong> The feature will be successful if it accurately retrieves contact information upon entering a mobile number or guides the user seamlessly to add a new contact if not found.</p>

      <h3 style={headingStyle}>2. Adding a Lead (If Mobile Number Found or After Contact is Saved)</h3>
      <img src={pic1} alt="Adding a Lead" style={{ width: '850px', marginRight: '10px' }} />

      <h4>UI Elements:</h4>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Lead Title:</strong> Name or title for identifying and tracking the lead.</li>
<br/>
        <li><strong style={headingStyle}>Item Group:</strong> Dropdown to select the item group associated with the lead.</li>
<br/>
        <li><strong style={headingStyle}>Competitor:</strong> Optional field for specifying a competitor related to the lead.</li>
<br/>
        <li><strong style={headingStyle}>Country:</strong> Pre-filled with country information from the contact.</li>
<br/>
        <li><strong style={headingStyle}>State:</strong> Dropdown to select the state related to the lead.</li>
<br/>
        <li><strong style={headingStyle}>City:</strong> Pre-filled with city information from the contact.</li>
<br/>
        <li><strong style={headingStyle}>Priority:</strong> Dropdown to select the urgency or importance level of the lead.</li>
<br/>
        <li><strong style={headingStyle}>Sales Person:</strong> Field to select the sales representative managing the lead.</li>
<br/>
        <li><strong style={headingStyle}>Source Name:</strong> Dropdown to select the lead source (e.g., referral, advertisement, event).</li>
<br/>
        <li><strong style={headingStyle}>Lead Details:</strong> Textbox for entering additional information or notes about the lead.</li>
<br/>
        <li><strong style={headingStyle}>Address:</strong> Pre-filled with address details from the contact.</li>
<br/>
      </ul>
      <br />
      <p><strong style={headingStyle}>Success Criteria:</strong> The ability to seamlessly capture and save lead information, pre-fill related fields, and ensure mandatory fields are populated for efficient lead creation.</p>
    </section>
  );
};

export default LeadCreation;
