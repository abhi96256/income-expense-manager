import React from 'react';
import  pic from "../../assets/Post/Adding a New Contact  2.png"
import  pic1 from "../../assets/Post/Adding a Service Contract.png"
import  pic2 from "../../assets/Post/Machine Detail.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const ContractCreation = () => {
  return (
    <div>
      <h2 >Service Contract Creation:</h2>
      <p>
        This process involves checking if a contact already exists, followed by displaying the appropriate form for either adding a Service Contract or saving a new contact.
      </p>

      <h3 style={headingStyle}>Contact Search by Mobile Number:</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Input:</strong> The user inputs a mobile number into the search field.</li>
<br/>
        <li>
          <strong style={headingStyle}>Action:</strong> The system will automatically search the database to check if the mobile number already exists.
          <br />
           <ul style={contentStyle}>
            <li>If the mobile number is found in the database, the system will load the existing contact's information and display the "Add" form for service contract.</li>
<br/>
            <br />
            <li>If the mobile number is not found, the system will display the "Save Contact" form to add a new contact before proceeding to add a Service Contract.</li>
<br/>
          </ul>
        </li>
<br/>
      </ul>

      <h2 style={headingStyle}>Adding a New Contact (If Mobile Number Not Found):</h2>
      <img 
        src={pic}
        alt="Adding a New Contact  2" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <br />

      <h2 style={headingStyle}>Adding a Service Contract:</h2>
      <img 
        src={pic1}
        alt="Adding a Service Contract" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <br />

      <h3 style={headingStyle}>Purpose:</h3>
      <p>
        The "Add" button is designed to allow users to create new service contracts efficiently within the system. It provides a user-friendly interface for selecting item details such as Item Master Name, Item Code, Make, and Brand, while offering a text field for users to input specific contract details. This feature streamlines the process of adding contracts by making essential information easily accessible through dropdown menus and ensuring that all relevant contract data is captured accurately.
      </p>

      <h3 style={headingStyle}>UI Elements:</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Item Master Name:</strong> A dropdown menu to select the item name.</li>
<br/>
        <li><strong style={headingStyle}>Item Code:</strong> A dropdown to specify the code of the item.</li>
<br/>
        <li><strong style={headingStyle}>Make:</strong> A dropdown menu to select the make name of the item.</li>
<br/>
        <li><strong style={headingStyle}>Brand:</strong> A dropdown menu to select the brand of the item.</li>
<br/>
        <li><strong style={headingStyle}>Contract Details:</strong> A text field to enter details about the service contract for an item.</li>
<br/>
      </ul>

      <h3 style={headingStyle}>Machine Detail:</h3>
      <img 
        src={pic2}
        alt="Machine Detail" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <br />

       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Contract Type:</strong> A dropdown to select a contract type from ‘Warranty’ or ‘AMC’.</li>
<br/>
        <li><strong style={headingStyle}>Invoice Availability (Radio Button):</strong> If invoice details are available, click on ‘Yes’; otherwise, click on ‘No’.</li>
<br/>
        <li><strong style={headingStyle}>Invoice Availability:</strong> If <strong style={headingStyle}>‘Yes’:</strong>
           <ul style={contentStyle}>
            <li><strong style={headingStyle}>Invoice No.:</strong> A text field to enter the invoice number of the machine.</li>
<br/>
            <br />
            <li><strong style={headingStyle}>Invoice Date:</strong> Select the invoice date.</li>
<br/>
            <br />
            <li><strong style={headingStyle}>MFD:</strong> Select the manufacturing date of the machine.</li>
<br/>
            <br />
            <li><strong style={headingStyle}>Serial No.:</strong> A text field to enter the serial number of the machine.</li>
<br/>
            <br />
            <li><strong style={headingStyle}>Start Date:</strong> Select the start date for the service contract.</li>
<br/>
            <br />
            <li><strong style={headingStyle}>Finish Date:</strong> Select the end date for the service contract.</li>
<br/>
            <br />
            <li><strong style={headingStyle}>Contract Amount:</strong> A text field to enter the amount for the service contract.</li>
<br/>
            <br />
            <li><strong style={headingStyle}>Dealer Name:</strong> A dropdown menu to select the dealer name.</li>
<br/>
            <br />
            <li><strong style={headingStyle}>Engineer:</strong> A dropdown menu to select the engineer name (address details will be auto-filled).</li>
<br/>
          </ul>
        </li>
<br/>
      </ul>

      <h3 style={headingStyle}>Success Criteria:</h3>
      <p>
        The feature will be successful if users can easily input machine details, select contract types, and manage invoice information without errors. It should ensure accurate recording of contract dates, amounts, and allow smooth selection of dealers and engineers.
      </p>
    </div>
  );
};

export default ContractCreation;
