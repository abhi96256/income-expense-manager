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
    <div>
      <h2  style={headingStyle} >Testing and Validation:</h2>

      <p>
        <b style={headingStyle}>• Testing:</b> Unit, integration, and user acceptance testing will be
        conducted to ensure all functionalities meet the requirements.
      </p>

      <p>
        <b style={headingStyle}>• Validation:</b> Regular reviews will be held with stakeholders to
        validate that the system meets their needs.
      </p>

      <p>
        <b style={headingStyle}>Success Criteria:</b> The system will be validated successfully if it
        passes all test cases and receives sign-off from key stakeholders.
      </p>
    </div>
  );
};

export default TestingValidation;
