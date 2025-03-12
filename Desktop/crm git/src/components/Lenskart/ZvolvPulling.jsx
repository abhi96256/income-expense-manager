import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const ZvolvPulling = () => {
  return (
    <div>
      <h2  style={headingStyle}>Zvolv data pulling:</h2>

      <p>
        FebiNext will develop and release an API to retrieve lease-related data
        from Zvolv. Once the data is successfully fetched, FebiNext will
        automatically generate a task for the Lenskart team, prompting them to
        review the pre-filled information and complete any remaining fields in the
        lease creation form. This ensures that any missing or additional details
        are accurately provided by the Lenskart team, facilitating the smooth and
        timely creation of the lease. If Zvolv does not have the required data,
        the lease will be created either through manual entry or by leveraging
        external APIs as needed.
      </p>
    </div>
  );
};

export default ZvolvPulling;
