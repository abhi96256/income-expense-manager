import React from 'react';
import  pic from "../../assets/Pre/Lead Management.png"
import  pic1 from "../../assets/Pre/Performing Actions on Lead-Linked Activities.png"
import  pic2 from "../../assets/Pre/Add Activity Icon.png"
import  pic3 from "../../assets/Pre/Update Lead stage Icon.png"
import  pic4 from "../../assets/Pre/Transfer Lead Icon.png"
import  pic5 from "../../assets/Pre/Update Lead Address Icon.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const LeadManagement = () => {
  return (
    <section id="lead-management">
      <h2 style={headingStyle}>Lead Management:</h2>

      <p>
        The Lead Listing section displays all the leads in a tabular format, allowing users to quickly view and access detailed information about each lead. Each row in the table corresponds to a single lead.
      </p>

      <img 
        src={pic} 
        alt="Lead Management" 
        style={{ width: '850px', marginRight: '10px' }} 
      />
      
      <h3 style={headingStyle}>Filter Functionality-</h3>
      <p>Filters allow users to narrow down the list of leads based on specific criteria, making it easier to manage and track leads according to various attributes like date, stage, location, etc.</p>

      <h4>Filter Options</h4>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Date Filter:</strong> Users can select a range of dates to display leads created within that timeframe.</li><br />
        <li><strong style={headingStyle}>Stage Filter:</strong> Users can select one or multiple stages (e.g., New, Opportunity) to filter leads by their current status.</li><br />
        <li><strong style={headingStyle}>Employee Filter:</strong> Users can filter leads based on the employee assigned to them.</li><br />
        <li><strong style={headingStyle}>Extra Filter:</strong> Additional filtering options based on specific criteria like Mobile no., organization name, etc.</li><br />
        <li><strong style={headingStyle}>Search Bar:</strong> Allows for quick searching of leads using keywords (e.g., lead title, contact name).</li><br />
        <li><strong style={headingStyle}>Clear All & Search:</strong>
           <ul style={contentStyle}>
            <li><strong style={headingStyle}>Clear All:</strong> Resets all filters and shows the full list of leads.</li><br />
            <li><strong style={headingStyle}>Search:</strong> Applies the selected filters to refine the lead list.</li>
          </ul>
        </li>
      </ul>

      <h3 style={headingStyle}>Action Icons:</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Add Activity Icon:</strong>
          <img 
            src={pic1} 
            alt="Add Activity Icon" 
            style={{ paddingTop: '20px', width: '850px', marginRight: '40px' }} 
          />
          <p><strong style={headingStyle}>Functionality:</strong> By clicking on the Add Activity Icon, users can open a form or dialog box where they can enter details about the activity, such as the type of activity, date, time, and any relevant notes.</p>
        </li>
        <br />
        <li><strong style={headingStyle}>Activity History Icon:</strong>
          <img 
            src={pic2}
            alt="Activity History Icon" 
            style={{ paddingTop: '20px', width: '850px', marginRight: '10px' }} 
          />
          <p><strong style={headingStyle}>Functionality:</strong> By clicking on the Activity History Icon, users can open a detailed view or a pop-up window that displays the entire history of interactions with the lead. Each entry typically includes the date, time, type of activity, and any relevant notes or comments.</p>
        </li>
        <br />
        <li><strong style={headingStyle}>Update Lead Stage Icon:</strong>
          <img 
            src={pic3}
            alt="Update Lead stage Icon" 
            style={{ paddingTop: '20px', width: '850px', marginRight: '10px' }} 
          />
          <p><strong style={headingStyle}>Functionality:</strong> By clicking on the Update Lead Stage Icon, users can open a dialog or form that provides options to select the new stage from a predefined list. Users may also be prompted to provide additional details or reasons for the stage change.</p>
        </li>
        <br />
        <li><strong style={headingStyle}>Transfer Lead Icon:</strong>
          <img 
            src={pic4}
            alt="Transfer Lead Icon" 
            style={{ paddingTop: '20px', width: '850px', marginRight: '40px' }} 
          />
          <p><strong style={headingStyle}>Functionality:</strong> When users click on the Transfer Lead Icon, a dialog box or form typically opens, allowing them to select the new owner of the lead from a list of users or departments within the organization. Users may also be prompted to add comments or reasons for the transfer.</p>
        </li>
        <br />
        <li><strong style={headingStyle}>Update Lead Address Icon:</strong>
          <img 
            src={pic5}
            alt="Update Lead Address Icon" 
            style={{ paddingTop: '20px', width: '850px', marginRight: '10px' }} 
          />
          <p><strong style={headingStyle}>Functionality:</strong> Allows users to easily modify or update the address information associated with a lead.</p>
        </li>
      </ul>

      <h3 style={headingStyle}>Success Criteria</h3>
      <p>
        The success of the Lead Management system will be determined by its ability to accurately display all leads in a tabular format, provide effective filtering options to narrow down leads based on various criteria, ensure that action buttons for interacting with leads are functional and user-friendly, allow users to quickly and easily access detailed information about each lead, and maintain data integrity and consistency throughout the system.
      </p>
    </section>
  );
};

export default LeadManagement;
