import React from 'react';
import  pic from "../../assets/Pre/Activity FLOW-CHART.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const ActivityFlowchart = () => {
  return (
    <section id="activity-flowchart">
      <h2 style={headingStyle}>Activity FLOW-CHART:</h2>
      <p>
        This flowchart presents an organized approach for managing activities
        within a CRM system. It begins with activity status categorization into{' '}
        <strong style={headingStyle}>Start</strong>, <strong style={headingStyle}>Finished</strong>, <strong style={headingStyle}>Open</strong>, and{' '}
        <strong style={headingStyle}>Close</strong> stages, each offering specific actions such as viewing
        history, rescheduling, transferring, following up, or closing the activity.
      </p>
      <img
        src={pic}
        alt="Activity FLOW-CHART"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
      />

      <p>
        Users can filter activities based on various criteria like status, employee,
        mobile number, or overdue status. Additionally, calendar-based filters (e.g.,
        past week, current week, next week, or custom date search) help narrow down
        activity timelines. The "Add Activity" option enables users to input details
        and assign the activity to a lead or pre-sale stage, which is then displayed on
        the activity list page. This process ensures a structured approach to handling
        activities, supporting efficient follow-up and task management.
      </p>

      <h2 style={headingStyle}>Conclusion</h2>
      <p>
        The functionalities outlined in this document are designed to streamline lead
        management by offering users the ability to add new activities, list them, view
        activity history, and monitor overdue tasks. These features ensure that all
        interactions with leads are systematically recorded, easily accessible, and
        efficiently managed, contributing to a more organized and effective workflow. As
        a result, users can focus more on building relationships and closing deals,
        rather than getting bogged down by administrative tasks. Ultimately, this
        streamlined lead management system fosters a more proactive and responsive sales
        strategy, driving better outcomes for the organization as a whole.
      </p>
    </section>
  );
};

export default ActivityFlowchart;
