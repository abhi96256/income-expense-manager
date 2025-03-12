// Import React
import React from 'react';
import  pic from "../../assets/Gate/Board View.png"

const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};



// Define the component
const BoardView = () => {
  
  return (
    <div className="board-view">
     <h2 style={headingStyle}>Board View:</h2>
     
      

      <section className="ui-elements">
        <h3 style={headingStyle}>UI Elements</h3>
         <ul style={contentStyle}>
          <li>
            <strong  style={headingStyle}>Visitor and Vehicle Cards:</strong> Each card displays critical details such as visitor/vehicle name, contact information, entry type, and check-in/out times.
          </li>
<br/>
          <li>
            <strong  style={headingStyle}>Counter:</strong> Displays the total number of recorded entries in the system, categorized by vehicles and visitors. The count varies and differentiates based on branch and gate entries for the selected date.
          </li>
<br/>
          <li>
            <strong  style={headingStyle}> Filters:</strong> Provides multiple options to enhance the user experience for entering and accessing entries. Users can filter by branch, gate, entry type, and date. Additional features include buttons to add new visitors or vehicles and a search bar for quick access to locally fetched data.
          </li>
<br/>
          <li>
            <strong  style={headingStyle}>Status Indicators:</strong> Display the current state of check-in or check-out for visitors and vehicles, including the auto-captured date and time for both check-in and check-out.
          </li>
<br/>
          <li>
            <strong  style={headingStyle}>Additional Functionalities:</strong>
             <ul style={contentStyle}>
              <li><strong  style={headingStyle}>Print-Pass:</strong> For printing the gate pass.</li>
<br/>
              <li><strong  style={headingStyle}> Close Entry:</strong> To finalize and close the entry, preventing additional inputs or document uploads after check-out.</li>
<br/>
            </ul>
          </li>
<br/>
        </ul>
      </section>

      <img 
              src={pic}
              alt="Board View" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />

      <section className="actions">
        <h4 style={headingStyle}>Actions</h4>
         <ul style={contentStyle}>
          <li>
            <strong style={headingStyle}>Summarized View of Entries:</strong>
            <ul >
              <li>All entries are displayed as individual cards, each showcasing critical details, including visitor/vehicle name, contact information, entry type, and check-in/out times.</li>
<br/>
              <li>The cards are organized to provide a quick, clear overview of ongoing and completed activities, helping users monitor real-time operations.</li>
<br/>
            </ul>
          </li>
<br/>

          <li>
            <strong style={headingStyle}>Performing Check-Out and Printing Passes:</strong>
             <ul style={contentStyle}>
              <li>Each card allows users to perform check-out for visitors or vehicles directly, ensuring seamless management of exit processes.</li>
<br/>
              <li>Users can also generate and print gate passes for individual entries from the same interface, streamlining administrative tasks.</li>
<br/>
            </ul>
          </li>
<br/>

          <li>
            <strong style={headingStyle}>Filtering and Searching for Entries:</strong>
            <ul style={contentStyle}>
              <li >The system includes robust filtering options to narrow down entries based on branch, gate, entry type, and date.</li>
<br/>
              <li>A search bar is available to quickly find specific visitors or vehicles using keywords, such as names, contact details, or other relevant information.</li>
<br/>
            </ul>
          </li>
<br/>

          <li>
            <strong style={headingStyle}>Counters for Quick Reference:</strong>
             <ul style={contentStyle}>
              <li>The interface displays a counter showing the total number of recorded entries, categorized by vehicles and visitors. This count adjusts dynamically based on the selected branch, gate, and date.</li>
<br/>
            </ul>
          </li>
<br/>

          <li>
            <strong style={headingStyle}>Real-Time Status Indicators:</strong>
             <ul style={contentStyle}>
              <li>Cards feature status indicators that highlight the current state of check-in or check-out for each visitor or vehicle. The indicators include auto-captured check-in and check-out dates and times for accurate tracking.</li>
<br/>
            </ul>
          </li>
<br/>

          <li>
            <strong style={headingStyle}>Additional Functionalities for Streamlined Processes:</strong>
             <ul style={contentStyle}>
              <li><strong style={headingStyle}>Print-Pass:</strong> Allows users to generate and print gate passes directly from the interface.</li>
<br/>
              <li><strong style={headingStyle}>Close Entry:</strong> Enables the finalization of an entry by preventing further inputs or document uploads after check-out, ensuring data integrity. Once the entry is closed, no further actions can be performed, and only a view-only mode is available for the user to access the entry.</li>
<br/>
            </ul>
          </li>
<br/>
        </ul>
      </section>

      <section className="success-criteria">
        <h4 style={headingStyle}>Success Criteria</h4>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Quick Access:</strong> Users can interact with individual entries directly from the main interface without additional navigation.</li>
<br/>
          <li><strong style={headingStyle}>Streamlined Workflows:</strong> Check-out and pass generation are completed in minimal steps directly from the card layout.</li>
<br/>
          <li><strong style={headingStyle}>Enhanced Usability:</strong> Filters and search functionalities allow users to locate entries quickly, with clear visual indicators for entry status.</li>
<br/>
          <li><strong style={headingStyle}>Accuracy and Performance:</strong> Auto-captured data is displayed in real-time, ensuring accurate records, with the system handling large entry volumes efficiently.</li>
<br/>
        </ul>
      </section>

      <section className="summary">
        <h4 style={headingStyle}>Summary</h4>
        <p  style={contentStyle}>The Board View offers a visually intuitive, card-based layout that enhances the management of visitor and vehicle entries. Each card displays essential details, including visitor or vehicle name, contact information, entry type, and check-in/out times, providing a clear and concise overview of all records. This design enables users to interact directly with individual entries, streamlining workflows without requiring additional navigation.</p>
        <p  style={contentStyle}>Integrated actionable buttons on each card allow seamless execution of key tasks, such as check-out and gate pass generation, making the process faster and more efficient. The inclusion of real-time updates, such as auto-captured check-in and check-out data, ensures accurate tracking of records. Additionally, robust filtering and search functionalities allow users to locate specific entries effortlessly, enhancing accessibility and operational efficiency. The Board View’s focus on simplicity and functionality provides a centralized platform for managing high volumes of entries with ease and precision.</p>
      </section>
    </div>
  );
};

// Export the component
export default BoardView;
