import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const Scope = () => {
  return (
    <div id="scope-document">
      <h2 style={headingStyle}>Scope of the Document:</h2>
      <p>
        This Functional Requirements Document (FRD) outlines the specific functionalities that will be developed and implemented as part of the Lead & Activity Management System at 3S Logics Pvt. Ltd. The primary focus of this document is to define the requirements for the core features that will enable the sales team to manage leads efficiently, track activities related to those leads, and monitor employee locations during key sales operations.
      </p>

      <h2 style={headingStyle}>The FRD covers the following key areas:</h2>

      <h3 style={headingStyle}>1. Lead Creation and Management</h3>
       <ul style={contentStyle}>
        <li>
          <strong style={headingStyle}>Lead Creation:</strong> The system will facilitate the process of adding new leads into the database, ensuring that all necessary information is captured correctly. This includes verifying whether a contact already exists in the system, which helps to prevent duplicate entries and maintains data integrity.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Lead Management:</strong> Once a lead is created, the system will manage that lead throughout its lifecycle. This includes functionalities for filtering leads based on various criteria (such as lead source, priority, or stage), updating lead information, assigning leads to specific sales representatives, and transferring leads between team members as needed. The system will also support the setting and tracking of follow-up actions to ensure that no lead is neglected.
        </li>
<br/>
      </ul>

      <h3 style={headingStyle}>2. Activity Tracking Linked to Leads</h3>
       <ul style={contentStyle}>
        <li>
          <strong style={headingStyle}>Activity Logging:</strong> The system will allow users to log various types of activities related to leads, such as calls, meetings, emails, and follow-ups. These activities will be linked directly to the corresponding leads, providing a complete history of interactions and enabling better tracking of lead progress.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Activity Management:</strong> Users will be able to view, edit, and manage these activities through a comprehensive interface that displays all relevant details, including dates, times, participants, and outcomes. The system will also include functionality for managing overdue activities and generating logs.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Activity Reporting:</strong> The system will generate reports that provide insights into activity patterns, helping managers to assess the effectiveness of the sales team’s efforts and identify areas for improvement.
        </li>
<br/>
      </ul>

      <h3 style={headingStyle}>3. Employee Location Tracking During Lead-Related Activities</h3>
       <ul style={contentStyle}>
        <li>
          <strong style={headingStyle}>Location Capture:</strong> For activities such as on-site meetings or field visits, the system will automatically capture the geographical location of the employee at the start and end of the activity. This data will be stored and linked to the corresponding lead and activity records.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Location Reporting:</strong> Managers will have access to location data through reports, enabling them to verify that meetings occurred as scheduled and to ensure that employees are utilizing their time effectively.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Integration with Lead and Activity Management:</strong> The location tracking feature will be fully integrated with the lead and activity management modules, providing a comprehensive view of all interactions with leads, including where those interactions took place.
        </li>
<br/>
      </ul>

      <h2 style={headingStyle}>Success Criteria:</h2>
       <ul style={contentStyle}>
        <li>
          <strong style={headingStyle}>Functional Completeness:</strong> All functionalities outlined in this document must be fully developed and implemented within the defined scope. This includes lead creation and management, activity tracking, and employee location tracking.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Performance:</strong> The system must perform efficiently, handling the expected volume of leads, activities, and location data without degradation in speed or responsiveness. It should support concurrent use by multiple users without performance bottlenecks.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Usability:</strong> The user interface must be intuitive and user-friendly, allowing sales team members to quickly learn and effectively use the system with minimal training. Both the desktop and mobile interfaces should offer a seamless experience, with all functionalities easily accessible.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Security:</strong> The system must adhere to high standards of data security, ensuring that sensitive information, such as customer data and employee locations, is protected from unauthorized access. Role-based access controls should be implemented to limit access to specific features based on user roles.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Compliance:</strong> The system must comply with relevant industry regulations and company policies, particularly regarding data protection and privacy.
        </li>
<br/>
      </ul>

      <p>
        This elaborated scope section provides a clear and detailed definition of what the project will cover, as well as the specific success criteria that will be used to measure the project’s effectiveness. It ensures that all stakeholders have a shared understanding of the project’s objectives and the expected outcomes. Additionally, the document includes relevant screenshots to provide a visual representation of the described functionalities, further enhancing clarity and facilitating a common understanding among all stakeholders.
      </p>
    </div>
  );
};

export default Scope;
