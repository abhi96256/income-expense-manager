import React from 'react';
import  pic from "../../assets/Pre/Lead Management(mobile acces).png"
import  pic1 from "../../assets/Pre/Activity Management.png"
import  pic2 from "../../assets/Pre/Activity Location Tracking.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const MobileAccess = () => {
  return (
    <div id="mobile-access-lead-management">
      <section>
        <h2 style={headingStyle}>Mobile Access: </h2>
        <p>
          In addition to desktop access, users can manage leads directly through the mobile interface. This includes the ability to add new leads, update existing ones, and track all related activities. The mobile functionality ensures that lead management can be performed seamlessly from anywhere, providing flexibility and improving responsiveness.
        </p>

        <h3 style={headingStyle}>Lead Management on Mobile</h3>
        <p>The mobile interface for lead management allows users to efficiently handle leads on the go. As depicted in the three screens:</p>
        <img 
          src={pic}
          alt="Lead Management (Mobile Access)" 
          style={{ width: '900px', marginRight: '40px', marginLeft: '40px' }} 
        />
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Lead Entry:</strong> Users can easily create new leads by filling out essential details, including contact information, lead title, and associated categories such as item groups and competitors.</li>
<br/>
          <li><strong style={headingStyle}>Lead Listing:</strong> Existing leads are displayed in a clear and organized list, enabling users to quickly access and update any lead details. This list provides essential information at a glance, such as lead status, salesperson, and follow-up dates.</li>
<br/>
          <li><strong style={headingStyle}>Lead Details & Activity History:</strong> Once a lead is selected, users can view comprehensive details and manage associated activities. The activity history is available in an intuitive format, showing past interactions and upcoming follow-ups, ensuring all activities related to a lead are tracked and accessible.</li>
<br/>
        </ul>
        <p>This mobile lead management feature provides users with the flexibility to manage leads efficiently from anywhere, making it easier to maintain productivity and responsiveness even when away from the desktop.</p>
        
        <h3 style={headingStyle}>Success Criteria for Mobile Interface</h3>
         <ul style={contentStyle}>
          <li>Efficiently manage leads on the go.</li>
<br/>
          <li>Enable seamless lead entry, quick updates, and effective activity tracking.</li>
<br/>
          <li>Be user-friendly, responsive, and allow users to handle all lead management tasks from anywhere with ease.</li>
<br/>
        </ul>
      </section>

      <section>
        <h2 style={headingStyle}>Activity Management</h2>
        <p>The mobile interface provides a streamlined approach to managing activities related to leads. The three screens illustrate the following features:</p>
        <img 
          src={pic1} 
          alt="Activity Management" 
          style={{ width: '900px', marginRight: '40px', marginLeft: '40px' }} 
        />
        <p>Users can view a comprehensive list of all activities associated with a lead. Each activity is categorized as either "Open" or "Closed," allowing users to quickly assess the status of their tasks. The list is visually organized for easy identification and management of ongoing and completed activities.</p>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Detailed History:</strong> When selecting an activity, users can access its full history. This includes all previous interactions, updates, and status changes, providing complete transparency and context for each activity. This feature ensures that users are fully informed of the lead's progress and any actions taken.</li>
<br/>
          <li><strong style={headingStyle}>Next Action:</strong> The mobile interface allows users to perform the next necessary action on an activity directly. Options like "Close," "Reschedule," "Transfer," and "Follow Up" are available, making it easy to update the status or plan the next steps for each activity.</li>
<br/>
        </ul>
        <p>These features enable efficient and effective activity management, ensuring that users can stay on top of their tasks, even while on the go.</p>

        <h3 style={headingStyle}>Success Criteria for Activity Management</h3>
         <ul style={contentStyle}>
          <li>Support real-time notifications.</li>
<br/>
          <li>Ensure data synchronization across devices.</li>
<br/>
          <li>Offer intuitive categorization and prioritization options.</li>
<br/>
          <li>Integrate with calendars and other tools.</li>
<br/>
          <li>Provide insights through analytics.</li>
<br/>
          <li>Maintain high performance with minimal bugs to enhance user productivity and satisfaction.</li>
<br/>
        </ul>
      </section>

      <section>
        <h2 style={headingStyle}>Activity Location Tracking</h2>
        <p>When an activity is categorized as a "Meeting," the system will automatically capture the user's location at two key points:</p>
        <img 
          src={pic2}
          alt="Activity Location Tracking" 
          style={{ width: '900px', marginRight: '40px', marginLeft: '40px' }} 
        />
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Start of the Meeting:</strong> The location is recorded at the moment the user marks the meeting as started. This ensures that the precise location where the meeting begins is documented.</li>
<br/>
          <li><strong style={headingStyle}>End of the Meeting:</strong> Similarly, when the meeting is marked as finished, the system captures the location again. This provides a complete record of where the meeting concluded.</li>
<br/>
        </ul>
        <p>These captured locations are not only stored in the mobile interface but are also accessible via the web platform, ensuring that all location data associated with activities is easily retrievable for verification and reporting purposes. This functionality enhances accountability and provides a clear geographic record of client interactions.</p>
      </section>
    </div>
  );
};

export default MobileAccess;
