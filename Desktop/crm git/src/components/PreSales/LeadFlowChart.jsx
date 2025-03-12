import React from 'react';
import  pic from "../../assets/Pre/Lead FLOW-CHART.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const LeadFlowChart = () => {
  return (
    <section id="leadFlowChart">
      <h2 style={headingStyle}>Lead FLOW-CHART:</h2>
      <p>
        This flowchart outlines the lifecycle of managing leads in a CRM system, starting from adding a new lead to updating its status based on progression. Initially, users search for the contact number to see if the lead already exists. If found, they select the existing contact; if not, they add it as a new contact. From there, users access the Lead Form to fill in or update lead details.
      </p>

      <img 
        src={pic}
        alt="Lead FLOW-CHART" 
        style={{ width: '1000px', marginRight: '40px', marginLeft: '40px' }} 
      />

      <p>
        The lead management process allows filtering leads by employee, stage, or other specific criteria to organize and prioritize them. Leads can fall into different stages, including New, In-Communication, Nurturing, Opportunity, Lost, or Transferred. For leads in active stages (New, In-Communication, Nurturing), users can log activities, review history, update stages, transfer ownership, and update contact information as needed. For leads marked as Opportunity, Lost, or Transferred, users have limited actions like viewing the lead’s history. This flow provides a structured approach to track and manage leads effectively, ensuring they are nurtured at each stage to optimize conversion potential.
      </p>

      <p>
        The Lead Management system’s UI is designed for efficient handling of leads, featuring intuitive filters and action buttons to streamline lead management and tracking. The Lead Addition process first verifies the existence of a contact by mobile number; if the contact exists, a lead can be added, otherwise, the system prompts to save the contact first. This ensures that all relevant information is captured efficiently, maximizing productivity and accuracy in the sales process.
      </p>

      <h3 style={headingStyle}>Conclusion</h3>
      <p>
        The Lead Management system’s UI is designed for efficient handling of leads, featuring intuitive filters and action buttons to streamline lead management and tracking. The Lead Addition process first verifies the existence of a contact by mobile number; if the contact exists, a lead can be added, otherwise, the system prompts to save the contact first. This ensures that all relevant information is captured efficiently, maximizing productivity and accuracy in the sales process.
      </p>
    </section>
  );
};

export default LeadFlowChart;
