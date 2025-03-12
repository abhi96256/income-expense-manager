import React from 'react';
import  pic from "../../assets/Post/Service Contract Management.png"
import  pic1 from "../../assets/Post/Eye Button.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const ContractManagement = () => {
  return (
    <div>
      <h2 style={headingStyle}>Service Contract Management:</h2>
      <img 
        src={pic}
        alt="Service Contract Management" 
        style={{ width: '1000px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <br />

      <div className="section">
       

        <h3 style={headingStyle}>Search and Filter</h3>
         <ul style={contentStyle}>
          <li>Users can search for service contracts using various filters, such as Contract Type.</li>
<br/>
          <li>Contract Date, Start Date, and Finish Date.</li>
<br/>
        </ul>

        <h3 style={headingStyle}>Performing Actions on Service Contract:</h3>
        <p>In the Service Management system, users can take various actions on contracts.</p>

         <ul style={contentStyle}>
          <li>
            <strong style={headingStyle}>Eye Button:</strong> Users can view the details of the service contract, which includes all details such as User Contact Details, Item Details, and Contract Details.
          </li>
<br/>
        </ul>

        <img 
          src={pic1}
          alt="Eye Button" 
          style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
        />
        <br />

        <p>
          Users can quickly Edit, Close, Approve, and Renew contracts with a simple selection, streamlining the management process at every stage of the contract lifecycle. These actions offer flexibility, allowing users to update terms, finalize approvals, or close contracts when necessary. This ensures accurate tracking, seamless updates, and timely completion, giving users full control over their contract workflows.
        </p>
      </div>
    </div>
  );
};

export default ContractManagement;
