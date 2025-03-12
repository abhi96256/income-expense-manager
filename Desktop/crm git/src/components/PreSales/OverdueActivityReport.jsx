import React from 'react';
import  pic from "../../assets/Pre/Overdue Activity Report.png"
import  pic1 from "../../assets/Pre/Detailed Breakdown.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const OverdueActivityReport = () => {
  return (
    <div id="overdue-activity-report">
      <h2 style={headingStyle}>Overdue Activity Report:</h2>
      <p>
        The Overdue Activity Report provides a comprehensive view of all OPEN activities assigned to various employees.
        This report is interactive, allowing users to drill down into detailed information about specific open activities
        through clickable hyperlinks.
      </p>
      <img
        src={pic}
        alt="Overdue Activity Report"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      />
      <br />
      <section>
        <h3 style={headingStyle}>Purpose</h3>
        <p>
          The primary goal of this report is to offer a consolidated view of all overdue activities across different
          employees and activity types. This helps in quickly identifying bottlenecks, understanding workload
          distribution, and ensuring that no critical tasks are overlooked.
        </p>

        <h3 style={headingStyle}>Detailed Breakdown</h3>
        <p>
          The report breaks down the overdue activities by type (e.g., Calls, Meetings, Emails, Proposals, Demos, WhatsApp
          communications) and lists them alongside the responsible employees. This categorization allows for an easy
          comparison and helps in prioritizing follow-ups based on the nature of the activity.
        </p>
      </section>
      <img
        src={pic1}
        alt="Detailed Breakdown"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      />
      <br />
    </div>
  );
};

export default OverdueActivityReport;
