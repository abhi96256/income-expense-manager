import React from 'react';
import  pic from "../../assets/Post/Employee Location Tracking.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const LocationTracking = () => {
  return (
    <div>
      <h2 style={headingStyle}>Employee Location Tracking:</h2>
      <p>
        The Employee Location Tracking module is designed to monitor and log employee activities, particularly for activities such as "Reached at Customer." The system provides managers and administrators with detailed insights into employee movements and activity statuses.
      </p>
      <img
        src={pic}
        alt="Employee Location Tracking"
        style={{
          width: '1000px',
          marginRight: '10px',
          marginLeft: '30px'
        }}
      />
      <br />
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Status Update:</strong> When an employee arrives at a client location, they can easily select the "Reached" status through the mobile application using the Reply Button. This intuitive interface allows for quick updates, ensuring their presence at the client site is accurately logged.</li>
<br/>
        <li><strong style={headingStyle}>Automated Capturing:</strong> The system automatically captures essential data, including the date, time, and geographical location of the employee when they select the "Reached" status. Utilizing GPS technology within the mobile application, the system ensures precise tracking of employee movements, providing real-time information that reflects their current activities.</li>
<br/>
        <li><strong style={headingStyle}>Data Accessibility:</strong> All tracked data is seamlessly integrated into the system, allowing managers to access detailed logs of employee locations and statuses. This functionality ensures that supervisors have real-time visibility into workforce activities, fostering better communication and coordination.</li>
<br/>
        <li><strong style={headingStyle}>Exporting Activity Logs:</strong> For further analysis, managers can easily export the activity logs from the system. This feature is invaluable for conducting performance reviews, time management assessments, and gaining operational insights. The exported data can be analyzed to identify trends in employee movements, evaluate productivity levels, and optimize resource allocation.</li>
<br/>
        <li><strong style={headingStyle}>Enhanced Accountability:</strong> By monitoring employee locations and activities, the module promotes a culture of accountability within the organization. Employees are more likely to stay engaged and focused on their tasks, knowing that their activities are being tracked and evaluated.</li>
<br/>
        <li><strong style={headingStyle}>Improved Decision-Making:</strong> The insights gained from the tracking module enable managers to make informed decisions regarding resource management and operational strategies. By analyzing patterns in employee activities, businesses can optimize workflows, enhance customer service, and improve overall operational efficiency.</li>
<br/>
      </ul>

      <div className="section">
        <h2 style={headingStyle}>Conclusion</h2>
        <p>
          The mobile functionality ensures that users can view tickets, perform activities, and capture locations seamlessly from their mobile devices. This provides flexibility and convenience, allowing users to manage their tasks efficiently on the go, ensuring that no opportunity is missed and all service ticket activities are accurately recorded, regardless of location. This mobile integration enhances overall productivity and responsiveness in service ticket management.
        </p>
      </div>
    </div>
  );
};

export default LocationTracking;
