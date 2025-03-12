import React from 'react';
import  pic from "../../assets/Post/Service Contract FLOW CHART.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const ContractFlowChart = () => {
  return (
    <div>
      <h2 style={headingStyle}>Service Contract FLOW CHART:</h2>
      <img 
        src={pic}
        alt="Service Contract FLOW CHART" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <br />

      <p>
        This flowchart outlines the process for managing service contracts within the system, starting when the user accesses the Service Contract section and clicks the "Add" button to initiate the creation of a new contract. The first step is to search for an existing contact number to check if it’s already in the system. If the number is not found, the user proceeds to fill out a Contact Form to add the new contact information. If the number is found, they can skip this step.
        <br />
        Next, the user completes a Contract Form, providing necessary details such as machine information tied to the contract. Once submitted, the contract details are displayed on the Contract Page. After creation, the contract appears in the Service Contract Listed Page, where users can view key details, upload documents, and manage the contract's status. Contract statuses include "In-Creation," where the user can edit, approve, or close the contract; "Approved," which can be closed; "Closed"; and "Expired," with an option to renew the contract.
        <br />
        This structured workflow ensures a seamless and efficient process for tracking and managing service contracts, from initial creation to final closure or renewal, enhancing visibility and control at every stage of the contract lifecycle.
      </p>
    </div>
  );
};

export default ContractFlowChart;
