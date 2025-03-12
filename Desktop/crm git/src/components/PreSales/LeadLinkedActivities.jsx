import React from 'react';
import  pic from "../../assets/Pre/Performing Actions on Lead-Linked Activities.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const LeadLinkedActivities = () => {
  return (
    <div id="lead-linked-activities">
      <h2 style={headingStyle}>Performing Actions on Lead-Linked Activities:</h2>
      <p>
        In the Lead Activity Management system, users can take various actions on activities that are linked to specific
        leads. These actions are accessible under the Action tab of the activity details.
      </p>
      <img
        src={pic}
        alt="Performing Actions on Lead-Linked Activities"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      />
      <br />
      <section>
        <h2 style={headingStyle}>Actions on Lead-Linked Activities</h2>

        <h3 style={headingStyle}>1. Close</h3>
         <ul style={contentStyle}>
          <li>
            <strong style={headingStyle}>Functionality:</strong> Marks the activity as completed. The activity will no longer appear as an open
            task.
          </li>
<br/>
          <li>
            <strong style={headingStyle}>Use Case:</strong> When the task or interaction with the lead has been successfully concluded.
          </li>
<br/>
        </ul>

        <h3 style={headingStyle}>2. Reschedule</h3>
         <ul style={contentStyle}>
          <li>
            <strong style={headingStyle}>Functionality:</strong> Allows the user to change the date and time of the activity to a future point.
          </li>
<br/>
          <li>
            <strong style={headingStyle}>Use Case:</strong> Useful if the planned activity needs to be postponed due to scheduling conflicts or
            other reasons.
          </li>
<br/>
        </ul>

        <h3 style={headingStyle}>3. Transfer</h3>
         <ul style={contentStyle}>
          <li>
            <strong style={headingStyle}>Functionality:</strong> Transfers the responsibility of the activity to another salesperson or team
            member.
          </li>
<br/>
          <li>
            <strong style={headingStyle}>Use Case:</strong> Needed when the lead is reassigned to a different person or team.
          </li>
<br/>
        </ul>

        <h3 style={headingStyle}>4. Follow Up</h3>
         <ul style={contentStyle}>
          <li>
            <strong style={headingStyle}>Functionality:</strong> Sets up a follow-up activity or reminder related to the current activity.
          </li>
<br/>
          <li>
            <strong style={headingStyle}>Use Case:</strong> Ensures continuity in communication or tasks related to the lead, especially when
            additional actions are required.
          </li>
<br/>
        </ul>

        <p>
          These actions allow for flexible management of lead-related activities, ensuring that tasks are properly tracked,
          reassigned, or concluded as needed.
        </p>
      </section>
    </div>
  );
};

export default LeadLinkedActivities;
