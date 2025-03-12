import React from 'react';
import  pic from "../../assets/Gate/listview.jpg"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const ListView = () => {
  return (
    <div className="list-view">
      <h2 style={headingStyle}>List View:</h2>

      <section className="ui-elements">
        <h4 style={headingStyle}>UI Elements</h4>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Table Grid:</strong> Displays detailed records of visitors and vehicles in rows. Columns include fields such as entry type, organization, gate name, visitor name, vehicle type, check-in/out times, supplier, visitor purpose, check-in/out document, document number, and weight (E/L).</li>
<br/>
          <li><strong style={headingStyle}>Search & Filter Options:</strong> Provides tools to search and sort data by entry type, date range, and keywords, enhancing data accessibility and organization.</li>
<br/>
          <li><strong style={headingStyle}>Action Buttons:</strong> Includes options for printing passes, performing check-outs, managing visitor details, and closing entries to streamline user interactions.</li>
<br/>
          <li><strong style={headingStyle}>Pagination Controls:</strong> Allows efficient navigation through large datasets, ensuring smooth browsing of extensive records.</li>
<br/>
        </ul>
      </section>
       <img 
                    src={pic}
                    alt="List View" 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />

      <section className="actions">
        <h4 style={headingStyle}>Actions</h4>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>View Comprehensive Details:</strong> Access detailed records of visitors and vehicles in a structured table grid, showcasing fields such as entry type, organization, gate name, visitor name, vehicle type, check-in/out times, supplier, and purpose.</li>
<br/>
          <li><strong style={headingStyle}>Sort, Filter, and Search:</strong> Utilize search and filter options to efficiently organize and manage entries by entry type, date range, and keywords.</li>
<br/>
          <li><strong style={headingStyle}>Bulk Actions:</strong> Perform actions such as printing passes, completing check-outs, and managing visitor details in bulk for increased efficiency.</li>
<br/>
        </ul>
      </section>

      <section className="success-criteria">
        <h4 style={headingStyle}>Success Criteria</h4>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Users can efficiently locate specific records:</strong> Using advanced search and filter options, ensuring quick access to relevant data.</li>
<br/>
          <li><strong style={headingStyle}>Tabular representation for large datasets:</strong> The tabular format allows seamless management of large datasets of visitors and vehicles, enhancing overall efficiency.</li>
<br/>
        </ul>
      </section>

      <section className="summary">
        <h4 style={headingStyle}>Summary</h4>
        <p>The List View provides a detailed, tabular format for managing visitor and vehicle entries with precision. This layout ensures a clear and organized presentation of data, including key fields such as entry type, organization, gate name, visitor name, vehicle type, check-in/out times, supplier, and purpose.</p>
        <p>The integration of advanced search and filter functionalities enhances the ability to quickly locate specific records, facilitating efficient tracking. Additionally, users can perform bulk operations such as generating passes or completing check-outs directly from the table, streamlining repetitive tasks. Overall, the List View simplifies the management of large datasets, improving both usability and operational efficiency.</p>
      </section>
    </div>
  );
}

export default ListView;
