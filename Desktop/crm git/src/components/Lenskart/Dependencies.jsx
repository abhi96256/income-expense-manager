import React from "react";
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
  fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const Dependencies = () => {
  return (
    <div className="dependencies">
      <h2  style={headingStyle}>Dependencies</h2>
       <ul style={contentStyle}>
        <li>API Integration by Zvolv for importing data.</li>
        <br/>
        
        <li>Integration with Microsoft D365.</li>
      </ul>
    </div>
  );
};

export default Dependencies;
