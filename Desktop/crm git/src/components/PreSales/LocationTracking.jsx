import React from 'react';
import  pic from "../../assets/Pre/Employee Location Tracking.png"
import  pic1 from "../../assets/Pre/-2Employee Location Tracking.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const LocationTracking = () => {
  return (
    <div id="employee-location-tracking">
      <h2 style={headingStyle}>Employee Location Tracking:</h2>
      
      <section>
        <p>
          The Employee Location Tracking module is designed to monitor and log employee activities, particularly for activities such as meetings. The system provides managers and administrators with detailed insights into employee movements and activity statuses.
        </p>

        <img 
          src={pic}
          alt="Employee Location Tracking" 
          style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
        /><br />

         <ul style={contentStyle}>
          <li>An employee begins an activity (e.g., a meeting) using the mobile application.</li>
<br/>
          <li>The system captures the start time, location, and relevant information (e.g., captured location or client details).</li>
<br/>
          <li>Managers can export the activity logs for analysis, which can be used for performance reviews, time management assessments, and operational insights.</li>
<br/>
        </ul>

        <img 
          src={pic1}
          alt="-2Employee Location Tracking" 
          style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
        /><br />

        <p>
          The system captures the distance travelled for each activity, displayed in the "Distance (Km)" column. At the end of the day, the total distance travelled by the employee can be viewed in the summary report, providing an overview of their movement throughout the day.
        </p>

        <h3 style={headingStyle}>Conclusion</h3>
        <p>
          The mobile functionality ensures that users can create leads, perform activities, and capture locations seamlessly from their mobile devices. This provides flexibility and convenience, allowing users to manage their tasks efficiently on the go, ensuring that no opportunity is missed and all lead-related activities are accurately recorded, regardless of location. This mobile integration enhances overall productivity and responsiveness in lead management.
        </p>
      </section>
    </div>
  );
};

export default LocationTracking;
