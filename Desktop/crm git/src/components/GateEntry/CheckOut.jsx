// Import React
import React from 'react';
import pic from "../../assets/Gate/Check-Out Process.jpg" 
import DocumentInformation from "../../assets/Gate/Document Information.jpg"
import ItemInformation from "../../assets/Gate/Item Information.jpg"
import Checkout from "../../assets/Gate/Checkout.jpg"

const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

// Define the component
const CheckOutProcess = () => {
  return (
    <div>
      <h2 style={headingStyle}>Check-Out Process:</h2>
      <p>
        • <strong style={headingStyle}></strong> User retrieves data for a visitor or vehicle previously Checked-In.
      </p>
      <p>
        • <strong style={headingStyle}>Action:</strong>
      </p>
       <ul style={contentStyle}>
        <li>
          The system validates that the Check-Out process can only occur after a successful Check-In.
        </li>
<br/>
        <li>
          Upon entering the Mobile Number (for visitors) or Vehicle Number (for vehicles), the system retrieves all prefilled data captured during Check-In, including:
           <ul style={contentStyle}>
            <li>Visitor/Vehicle Information</li>
<br/>
            <li>Meeting/Purpose of Visit Details</li>
<br/>
            <li>Item Details (if applicable)</li>
<br/>
          </ul>
        </li>
<br/>
      </ul>
  <img 
              src={pic}
              alt="Check-Out Process" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />
      <p>User can add or update additional fields during Check-Out, such as:</p>
       <ul style={contentStyle}>
        <li>
          <strong style={headingStyle}>Document Information (for vehicles):</strong>Document Date,Document No.,Number of Packets and Weight (Empty/Loaded)
          
        </li>
<br/>
        <img 
              src={DocumentInformation}
              alt="DocumentInformation" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />
        <li>
          <strong style={headingStyle}>Item Information (for visitors):</strong>Name, Serial Number, Quantity, and Remarks
          
        </li>
<br/>
      </ul>
      <img 
              src={ItemInformation}
              alt="Item Information" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />

 

<h3 style={headingStyle}>UI Elements:</h3>
       <ul style={contentStyle}>
       
        <li>
        <h3 style={headingStyle}>Visitor Check-Out Form</h3>
         <ul style={contentStyle}>
         <li style={headingStyle}><strong>Item information:</strong></li>
<br/> 
           <ul style={contentStyle}>
            <li><strong style={headingStyle}>Item Name: </strong> field for item description.</li>
<br/>
            <li><strong style={headingStyle}>Serial No.:</strong> Optional input for item serial number</li>
<br/>
            <li><strong style={headingStyle}>Quantity: </strong> field for item quantity</li>
<br/>
            <li><strong style={headingStyle}>Remarks:</strong> Text input for comments</li>
<br/>
            
            </ul>
          </ul>
        </li>
<br/>

         <ul style={contentStyle}>
       
        <li>
        <h3 style={headingStyle}>Vehicle Check-Out Form:</h3>
         <ul style={contentStyle}>
         <li><strong style={headingStyle}>Vehicle Information:</strong></li>
<br/> 
           <ul style={contentStyle}>
            <li><strong style={headingStyle}>Vehicle Type:</strong> Pre-filled entity.</li>
<br/>
            <li><strong style={headingStyle}>Vehicle Number:</strong> Pre-filled and non-editable field</li>
<br/>
            <li><strong style={headingStyle}>Driver Name:</strong> Pre-filled and non-editable text field. </li>
<br/>
            <li><strong style={headingStyle}>License Number:</strong> Pre-filled and non-editable field. </li>
<br/>
            <li><strong>Employee Name:</strong> Pre-filled dropdown field.  </li>
<br/>
            <li><strong>Department:</strong> Pre-filled department field.  </li>
<br/>
            <li><strong>Supplier: </strong>Pre-filled entity </li>
<br/>
          

            
            </ul>
          </ul>
        </li>
<br/>

        <li>
          <strong>Document Information:</strong>
           <ul style={contentStyle}>
            <li><strong>Document:</strong> Dropdown for document type.</li>
<br/>
            <li><strong>Document Date:</strong> Date picker.</li>
<br/>
            <li><strong>Document No.: </strong> for document number.</li>
<br/>
            <li><strong>No. of Packets:</strong> Dropdown and text input for packet details.</li>
<br/>
            <li><strong> (E/L):</strong> Input fields for empty and loaded weights.</li>
<br/>
          </ul>
        </li>
<br/>
      </ul>
      </ul>
      <p>
         Supplier field is mandatory for the loaded check-in of the vehicle.
      </p>
      <p>
         In-case of Empty Check-in and loaded check-out if the vehicle does not have previously attached supplier, the user would be asked to attach the supplier at the time to complete with the process and successfully check-out.
      </p>
  <img 
              src={Checkout }
              alt="Checkout" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />

      <h3>Actions</h3>
       <ul style={contentStyle}>
        <li>
          <strong>Check-Out:</strong> Finalizes the visitor or vehicle exit and saves Check-Out details.
        </li>
<br/>
        <li>
          <strong>Close:</strong> Cancels the action and exits the Check-Out form.
        </li>
<br/>
      </ul>

      <h3>Success Criteria</h3>
       <ul style={contentStyle}>
        <li>Pre-filling data registered during Check-In.</li>
<br/>
        <li>Enforcing Check-Out validation only if Check-In exists.</li>
<br/>
        <li>Capturing additional Check-Out details and storing them successfully.</li>
<br/>
        <li>Automatically recording the Check-Out timestamp.</li>
<br/>
      </ul>
    </div>
  );
};

export default CheckOutProcess;
