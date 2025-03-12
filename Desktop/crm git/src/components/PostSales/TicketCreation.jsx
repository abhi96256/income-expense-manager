import React from 'react';
import  pic from "../../assets/Post/Adding a New Contact.png"
import  pic1 from "../../assets/Post/Adding a Service Request.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const TicketCreation = () => {
  return (
    <section id="service-ticket-creation">
      <h2 style={headingStyle}>Service Ticket Creation:</h2>
      <p>This process involves checking if a contact already exists, followed by displaying the appropriate form for either adding a Service Request or saving a new contact.</p>

      <h3 style={headingStyle}>Contact Search by Mobile Number:</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Input:</strong> The user inputs a mobile number into the search field.</li>
<br/>
        <li><strong style={headingStyle}>Action:</strong> The system will automatically search the database to check if the mobile number already exists.</li>
<br/>
        <li>The system will load the existing contact's information and display the "Add" form for the service request.</li>
<br/>
      </ul>

      <p>If the mobile number is not found, the system will display the "Save Contact" form to add a new contact before proceeding to add a Service Request.</p>

      <h3 style={headingStyle}>Adding a New Contact (If Mobile Number Not Found):</h3>
      <img 
        src={pic}
        alt="Adding a New Contact" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      /><br />

      <h3 style={headingStyle}>UI Elements:</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Contact Type:</strong> A selection option that allows the user to specify whether the contact is an Organization or an Individual.</li>
<br/>
        <li><strong style={headingStyle}>Organization Name:</strong> A text field that appears when "Organization" is selected as the contact type, allowing the user to enter the name of the organization.</li>
<br/>
        <li><strong style={headingStyle}>Contact Person:</strong> Fields to input the first and last name of the contact person associated with the organization or individual.</li>
<br/>
        <li><strong style={headingStyle}>Mobile Number:</strong> A text field pre-filled with the mobile number used in the search. This field is mandatory for contact identification.</li>
<br/>
        <li><strong style={headingStyle}>Alternate Number:</strong> Field to input an alternative mobile number if the contact person has one.</li>
<br/>
        <li><strong style={headingStyle}>Email ID:</strong> An optional text field where the user can enter the contact's email address for further communication.</li>
<br/>
        <li><strong style={headingStyle}>Designation:</strong> An optional dropdown menu for selecting the designation or job title of the contact person.</li>
<br/>
        <li><strong style={headingStyle}>Department:</strong> An optional dropdown menu for selecting the department to which the contact person belongs within the organization.</li>
<br/>
        <li><strong style={headingStyle}>Industry Type:</strong> A dropdown menu that allows the user to select the industry category relevant to the contact's business or organization.</li>
<br/>
        <li><strong style={headingStyle}>Account Type:</strong> A dropdown menu for selecting the type of account associated with the contact, such as Customer, Supplier, or Partner.</li>
<br/>
        <li><strong style={headingStyle}>Address:</strong> Fields to enter the contact's address details, including Address Line 1, Address Line 2, City, State, and Country.</li>
<br/>
      </ul>

      <h3 style={headingStyle}>Success Criteria:</h3>
      <p>The feature’s effectiveness will be defined by its ability to quickly and accurately retrieve existing contact information when a mobile number is entered. If the system is unable to find a match for the number, it will smoothly guide the user through the process of adding a new contact without any disruption to their workflow. The transition between retrieving and adding contacts will be seamless, ensuring that the user experience remains intuitive and efficient. By minimizing friction and providing clear, step-by-step instructions, the system helps users manage their contacts effortlessly, saving time and reducing the likelihood of errors. This streamlined process ensures that users can maintain up-to-date contact records with minimal effort.</p>

      <h3 style={headingStyle}>Adding a Service Request (If Mobile Number Found or After Contact is Saved):</h3>
      <img 
        src={pic1} 
        alt="Employee Location Tracking" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      /><br />

      <h3 style={headingStyle}>UI Elements:</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Service Contract Information:</strong> If a service contract already exists, click on the "Select" button, and a service contract window will open. Choose the service contract and click on the "Add" button.</li>
<br/>
        <li><strong style={headingStyle}>Item Master Name:</strong> A dropdown menu to select the item name associated with the service ticket.</li>
<br/>
        <li><strong style={headingStyle}>Sr. No:</strong> A field that allows the user to specify a serial number.</li>
<br/>
        <li><strong style={headingStyle}>Type:</strong> A dropdown menu where the user can select the request type.</li>
<br/>
        <li><strong style={headingStyle}>Category:</strong> A dropdown menu to select the category of the service request.</li>
<br/>
        <li><strong style={headingStyle}>Reported Problem:</strong> A dropdown menu to select the kind of problem.</li>
<br/>
        <li><strong style={headingStyle}>Source:</strong> A dropdown menu to select whether the request is made via phone or email.</li>
<br/>
        <li><strong style={headingStyle}>Priority:</strong> A dropdown menu to select the urgency or importance level of the service request.</li>
<br/>
        <li><strong style={headingStyle}>Description:</strong> A text box for entering additional information or notes regarding the service request.</li>
<br/>
        <li><strong style={headingStyle}>State:</strong> A dropdown menu where the user can select the state related to the user.</li>
<br/>
        <li><strong style={headingStyle}>City:</strong> This field is pre-filled with the city information from the contact's details.</li>
<br/>
        <li><strong style={headingStyle}>Area:</strong> A dropdown menu to select the area of the user’s detail.</li>
<br/>
        <li><strong style={headingStyle}>Address:</strong> Address fields that are automatically pre-filled with information from the contact's details, including city and state.</li>
<br/>
      </ul>

      <h3 style={headingStyle}>Success Criteria:</h3>
      <p>The system's ability to seamlessly capture and save service request information, pre-fill related fields, and ensure that all mandatory fields are correctly populated, thereby streamlining the request creation process.</p>
    </section>
  );
};

export default TicketCreation;
