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
    <div>
      <h2 style={headingStyle}>Scope of the Document:</h2>
       <ul style={contentStyle}>
        <li>
          <strong style={headingStyle}>Improved Service Ticket Tracking:</strong> Service teams will have better visibility into the status and history of each service ticket, reducing the risk of tickets being delayed or overlooked.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Faster Service Resolution:</strong> By streamlining the process from ticket creation to resolution, the system will help reduce the time it takes to address customer issues and complete service requests.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Enhanced Service Productivity:</strong> The system allows service representatives to focus on high-priority tickets and manage their tasks more efficiently, leading to increased productivity and quicker issue resolution.
        </li>
<br/>
        <li>
          <strong style={headingStyle}>Seamless User Experience:</strong> Both the desktop and mobile versions of the system will offer a user-friendly interface, ensuring that all features are easily accessible, minimizing the learning curve, and promoting widespread adoption across the service team.
        </li>
<br/>
      </ul>
      <p>
        In summary, the implementation of the Service & Contract Management System at 3S Logics Pvt. Ltd. is expected to transform the way service tickets and contracts are managed, resulting in more efficient service processes, improved customer relationships, and ultimately, higher customer satisfaction and revenue generation.
      </p>
    </div>
  );
};

export default Scope;

