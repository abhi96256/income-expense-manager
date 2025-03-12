import React from 'react';
import  pic from "../../assets/Gate/Dashboard View.jpg"
import  bargraph from "../../assets/Gate/bargraph.jpg"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const DashboardView = () => {
  return (
    <div className="dashboard-view">
      <h2 style={headingStyle}>Dashboard View:</h2>

      <section className="ui-elements">
        <h4 style={headingStyle}>UI Elements</h4>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Metrics Widgets:</strong> Displays key stats such as today’s visitors and vehicles, checked-in/out counts, and pending check-outs for the day.</li>
<br/>
          <li><strong style={headingStyle}>Charts & Graphs:</strong>
             <ul style={contentStyle}>
              <li><strong style={headingStyle}>Bar Charts:</strong> Visualize daily visits segmented by total visitors and vehicles.</li>
<br/>
              <li><strong style={headingStyle}>Pie Charts:</strong> Represent returning vs. one-time visitors.</li>
<br/>
              <li><strong style={headingStyle}>Purpose of Visit:</strong> A bar graph showing visit purposes like meetings, sales, or conferences.</li>
<br/>
            </ul>
          </li>
<br/>
          <li><strong style={headingStyle}>Date Range Selector:</strong> Allows users to view data for a specific timeframe.</li>
<br/>
          <li><strong style={headingStyle}>Department Insights:</strong> Displays the most visited departments.</li>
<br/>
      
        </ul>
      </section>
      <img 
              src={pic}
              alt="Dashboard View" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />
            <br />
            <img 
              src={bargraph}
              alt="bargraph" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />


      <section className="actions">
        <h4 style={headingStyle}>Actions</h4>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Analyse real-time visitor and vehicle trends</strong> through visual charts.</li>
<br/>
          <li><strong style={headingStyle}>Track visit purposes and department-wise entries</strong> for operational insights.</li>
<br/>
          <li><strong style={headingStyle}>Adjust date ranges</strong> to monitor performance over custom periods.</li>
<br/>
        </ul>
      </section>

      <section className="success-criteria">
        <h4 style={headingStyle}>Success Criteria</h4>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Users gain actionable insights</strong> from data visualizations to optimize resource allocation.</li>
<br/>
          <li><strong style={headingStyle}>Quick identification of trends</strong> such as recurring visits or most-visited departments.</li>
<br/>
        </ul>
      </section>

      <section className="summary">
        <h4 style={headingStyle}>Summary</h4>
        <p>The Dashboard View provides a data-driven interface that visualizes key visitor and vehicle metrics. Its graphical representation aids in decision-making by delivering insights into patterns and trends.</p>
      </section>

      <section className="conclusion">
        <h4 style={headingStyle}>Conclusion</h4>
        <p>The Gate Entry & Visitor Pass Page offers a versatile approach with three distinct views—Board View, List View, and Dashboard View—designed to address varying operational needs.</p>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Board View:</strong> Enhances user interaction through a card-based layout, allowing quick access to key actions such as check-ins, check-outs, and pass generation. This visual and streamlined interface simplifies navigation and improves workflow efficiency.</li>
<br/>
          <li><strong style={headingStyle}>List View:</strong> Provides a detailed tabular format, enabling the efficient management of visitor and vehicle records using advanced search and filter functionalities. This ensures quick identification and handling of entries, supporting bulk operations for streamlined data management.</li>
<br/>
          <li><strong style={headingStyle}>Dashboard View:</strong> Offers analytical insights through visual metrics, empowering users with a comprehensive overview of operations. It helps in making informed decisions by providing real-time data visualization, ensuring better tracking and performance evaluation.</li>
<br/>
        </ul>
        <p>With intuitive UI elements, actionable workflows, and measurable success criteria, the Gate Entry & Visitor Pass Page ensures seamless monitoring, tracking, and management of visitors and vehicles. By enhancing operational efficiency and decision-making processes, the system provides a robust solution for managing complex entry scenarios with ease.</p>
      </section>
    </div>
  );
};

export default DashboardView;
