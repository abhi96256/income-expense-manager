import React from 'react';
import  pic from "../../assets/Pre/Activity History Icon.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const ActivityHistory = () => {
  return (
    <section id="activity-history">
      <h2 style={headingStyle}>Viewing Activity History:</h2>
      <p>
        The activity history feature provides a chronological view of all
        activities associated with a specific lead, helping users understand the
        interaction timeline and progress with that lead.
      </p>
      <img
        src={pic}
        alt="Activity History Icon"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      />
      <p>
        It includes the ability to access the <strong style={headingStyle}>History tab</strong>, where users
        can view all activities related to the lead. Activities are presented in a
        timeline view, with the most recent interactions displayed at the top. Each entry
        provides the date, type of activity, and a brief description for easy reference.
      </p>
    </section>
  );
};

export default ActivityHistory;
