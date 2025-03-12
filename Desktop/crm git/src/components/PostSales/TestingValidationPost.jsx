import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const TestingValidation = () => {
  return (
    <section id="testing-validation">
      <h2 style={headingStyle}>Testing and Validation:</h2>

      <section>
        <h3 style={headingStyle}>Testing</h3>
         <ul style={contentStyle}>
          <li>
            Unit, integration, and user acceptance testing will be conducted to ensure all functionalities meet the requirements.
          </li>

        </ul>
      </section>

      <section>
        <h3 style={headingStyle}>Validation</h3>
         <ul style={contentStyle}>
          <li>
            Regular reviews will be held with stakeholders to validate that the system meets their needs.
          </li>

        </ul>
      </section>

      <section>
        <h3 style={headingStyle}>Success Criteria</h3>
        <p>
          The system will be validated successfully if it passes all test cases and receives sign-off from key stakeholders.
        </p>
      </section>
    </section>
  );
};

export default TestingValidation;
