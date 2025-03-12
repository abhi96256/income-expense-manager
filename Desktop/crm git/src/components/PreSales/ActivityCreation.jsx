import React from 'react';
import  pic from "../../assets/Pre/Activity_Creation.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const ActivityCreation = () => {
  return (
    <section id="activity-creation">
      <h2 style={headingStyle}>Activity Creation:</h2>
      <p>
        The Activity Creation feature enables users to schedule and organize
        interactions with leads, such as meetings, calls, and emails. It allows
        for specifying the type of activity, assigning it to a specific salesperson,
        and setting the date and time. This ensures that all planned activities
        are well-documented and can be easily managed within the lead management system,
        helping teams stay on top of their engagements and follow-ups.
      </p>
      <img
        src={pic}
        alt="Activity_Creation"
        style={{ width: '850px', marginRight: '10px' }}
      />

      <h2 style={headingStyle}>Purpose</h2>
      <p>
        The "Add Activity" feature enables users to log various interactions
        (calls, meetings, emails, etc.) with leads. This helps in tracking the
        progress of lead management and ensuring follow-ups are completed as required.
      </p>

      <h3 style={headingStyle}>UI Elements:</h3>
       <ul style={contentStyle}>
        <li>
          <strong style={headingStyle}>Activity Type (Dropdown):</strong> Selects the type of activity
          (e.g., Call, Meeting).
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Count (Text Field):</strong> Specifies the number of activities.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Sales Person (Dropdown):</strong> Assigns the activity to a
          specific salesperson.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Activity Date (Date Picker):</strong> Logs the date of the activity.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>From Time/To Time (Time Pickers):</strong> Records the start and
          end times.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Activity Description (Text Area):</strong> Allows detailed notes
          about the activity.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Custom Field (Checkbox):</strong> Links the activity (Pre Sale,
          New Lead, Existing).
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Organisation:</strong> Links the activity to the organization,
          filled automatically on Link to Selection.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Contact Person:</strong> Links the activity to a contact person
          filled automatically on Link to Selection.
        </li>
<br/>
      </ul>

      <h2 style={headingStyle}>Success Criteria</h2>
      <p>
        The system should allow easy selection of activity types, assigning
        activities to salespersons, and recording dates and times precisely. It
        should also enable detailed note-taking to ensure effective tracking of
        lead interactions.
      </p>
    </section>
  );
};

export default ActivityCreation;
