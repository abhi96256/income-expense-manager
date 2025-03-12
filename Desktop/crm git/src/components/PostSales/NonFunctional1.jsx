import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const NonFunctional = () => {
  return (
    <div>
      <section className="section">
        <h2 style={headingStyle}>Non-Functional Requirements:</h2>
         <ul style={contentStyle}>
          <li>
            <strong style={headingStyle}>Performance:</strong> The system should handle a large volume of service requests without performance degradation.
          </li>

          <br />
          <li>
            <strong style={headingStyle}>Usability:</strong> The user interface should be intuitive, ensuring users can manage ticket and payment processing with minimal training.
          </li>

          <br />
          <li>
            <strong style={headingStyle}>Security:</strong> Data should be protected using industry-standard encryption, with access controls ensuring only authorized users can view or modify sensitive information.
          </li>

        </ul>
      </section>

      <section className="section">
        <h3 style={headingStyle}>Success Criteria:</h3>
        <p>
          Non-functional success will be determined by system performance under load, user satisfaction surveys post-implementation, and successful security audits.
        </p>
      </section>
    </div>
  );
};

export default NonFunctional;
