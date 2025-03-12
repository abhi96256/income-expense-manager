import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const Dependencies = () => {
  return (
    <div>
      <h2 style={headingStyle}>Dependencies:</h2>
       <ul style={contentStyle}>
        <li>
          The system depends on external APIs for location tracking (e.g., Google
          Maps API).
        </li>
<br/>
        <li>Integration with existing CRM systems is required.</li>
<br/>
      </ul>

      <h2 style={headingStyle}>Success Criteria</h2>
      <p>
        The system will be considered successful if all dependencies are correctly
        integrated and function as expected, with minimal disruptions to ongoing
        operations.
      </p>
    </div>
  );
};

export default Dependencies;
