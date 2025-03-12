import React from 'react';
import  pic from "../../assets/Post/Service Ticket Detail.png"
import  pic1 from "../../assets/Post/Files upload Icon.png"
import  pic2 from "../../assets/Post/Items Tab.png"
import  pic3 from "../../assets/Post/Payment Collection.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const TicketDetail = () => {
  return (
    <section id="service-ticket-detail">
      <h2 style={headingStyle}>Service Ticket Detail:</h2>
      <img
        src={pic}
        alt="Service Ticket Detail"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      /><br />

      <p>
        By clicking on an individual service ticket, users can view the details of the service request. 
        They can update the request details, upload necessary documents by clicking the file upload option, 
        and view contract details and service requests by clicking on the respective tabs, 
        which display the number of contracts and requests associated with that contact number.
      </p>

      <h2 style={headingStyle}>Files Upload Icon</h2>
      <img
        src={pic1}
        alt="Files upload Icon"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      /><br />

      <h3 style={headingStyle}>Functionality:</h3>
      <p>
        By clicking the file upload icon, users can upload documents related to the service request. 
        They can select a document type (payment slip, item image, or invoice) from the dropdown, 
        choose a file by clicking the 'Choose File' button, and add details in the description text field.
      </p>

      <h2 style={headingStyle}>Items Tab</h2>
      <img
        src={pic2}
        alt="Items Tab"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      /><br />

      <h3 style={headingStyle}>Functionality:</h3>
      <p>
        By clicking on the "Item" tab, the user will get a ‘+’ icon. By clicking on that, a form window will appear for adding item details.
      </p>

      <h3 style={headingStyle}>UI Elements:</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Item:</strong> A dropdown menu to select the item name.</li>
<br/>
        <li><strong style={headingStyle}>Billing Type:</strong> A dropdown to select the billing type of the item. It can be FOC, PAID, etc.</li>
<br/>
        <li><strong style={headingStyle}>Quantity:</strong> A text field to enter the quantity of an item. All other text fields will be auto-filled by selecting the price (MRP or DP).</li>
<br/>
      </ul>

      <h3 style={headingStyle}>Success Criteria:</h3>
      <p>
        It allows users to add multiple items for a service request ticket, and the cost of items will be auto-calculated 
        based on billing type, quantity, and price.
      </p>

      <h2 style={headingStyle}>Payment Collection</h2>
      <img
        src={pic3}
        alt="Payment Collection"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      /><br />

      <h3 style={headingStyle}>Functionality:</h3>
      <p>
        By clicking on the “Collect” tab, users will find a popup window that displays the payment mode option for making a payment.
      </p>

      <h3 style={headingStyle}>Success Criteria:</h3>
      <p>
        The success of the Service Request Management System will be determined by its ability to accurately display all service requests in a list, 
        provide effective filtering options to narrow down tickets based on various criteria, and ensure that action buttons for interacting with tickets are functional and user-friendly. 
        Additionally, users should be able to quickly and easily access detailed information about each service ticket, with data integrity and consistency maintained throughout the system.
      </p>
    </section>
  );
};

export default TicketDetail;
