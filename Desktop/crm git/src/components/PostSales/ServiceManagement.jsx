import React from 'react';
import  pic from "../../assets/Post/Service Contract Management.png"
import  pic1 from "../../assets/Post/Assignand change Engineer.png"
import  pic2 from "../../assets/Post/Action Icons.png"
import  pic3 from "../../assets/Post/Update Contract Icon.png"
import  pic4 from "../../assets/Post/Duplicate Icon.png"
import  pic5 from "../../assets/Post/Reply Icon.png"
import  pic6 from "../../assets/Post/Cancel Request Icon.png"
import  pic7 from "../../assets/Post/Close Request Icon.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};


const ServiceManagement = () => {
  return (
    <section id="service-request-management">
      <h2 style={headingStyle}>Service Request Management:</h2>
      <p>
        Service Request Management offers a comprehensive overview of each request, capturing key details such as
        the creation and assignment date and time, the duration spent by the engineer and the agent on the request, 
        the current request status, and the name of the assigned engineer. This detailed breakdown ensures that users
        can track the progress of each service request with precision and transparency.
      </p>
      <p>
        The system is designed to focus on listing service requests in a clear, organized manner, with advanced
        filter functionalities that allow users to narrow down the list based on specific criteria such as status, 
        priority, or assigned engineer. These filters enable efficient management and help users quickly locate requests 
        that require immediate attention or further action.
      </p>
      <p>
        Users can interact with individual requests through action buttons, enabling tasks such as updating request 
        status, adding notes, reassigning engineers, or closing requests. The interface also supports bulk actions for 
        managing multiple requests at once. By providing a clear, organized listing with filtering and interaction 
        options, Service Request Management streamlines the tracking and resolution of service requests, improving 
        efficiency and ensuring quick resolution of issues.
      </p>
      
      <p>
        The request listing section displays all the tickets in a list format, allowing users to quickly view and access 
        detailed information about each request. Each row in the table corresponds to a single service request.
      </p>
      <img 
        src={pic} 
        alt="Service Contract Management" 
        style={{ width: '1000px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <br />
      
      <h3 style={headingStyle}>Filter Functionality</h3>
      <p>
        Filters allow users to narrow down the list of requests based on specific criteria, making it easier to manage and
        track requests according to various attributes like date, mobile, ticket number, etc.
      </p>

      <h3 style={headingStyle}>Filter Options:</h3>
       <ul style={contentStyle}>
        <li><strong style={headingStyle}>Date Filter:</strong> Users can select a range of dates to display service requests created within that time frame.</li>
<br/>
        <li><strong style={headingStyle}>Ticket No:</strong> Users can search for a ticket by entering the service ticket number.</li>
<br/>
        <li><strong style={headingStyle}>Mobile No:</strong> Users can search tickets by entering the mobile number associated with the ticket in the search box.</li>
<br/>
        <li><strong style={headingStyle}>Category Filter:</strong> Users can filter tickets based on the category assigned to them.</li>
<br/>
        <li><strong style={headingStyle}>Reported Problem:</strong> Users can filter tickets based on the problem assigned to them.</li>
<br/>
        <li><strong style={headingStyle}>Service Engineer:</strong> Users can filter tickets based on the service engineer assigned to them.</li>
<br/>
        <li><strong style={headingStyle}>Extra Filter:</strong> Additional filtering options based on specific criteria like service ticket creation time,
            assign date, resolve date, number, and status of service ticket.</li>
<br/>
        <li><strong style={headingStyle}>Search Bar:</strong> Allows for quick searching of tickets using keywords (e.g., mobile number, contact name).</li>
<br/>
        <strong style={headingStyle}><li>Clear All & Search:</li>
<br/></strong>
         <ul style={contentStyle}>
          <li><strong style={headingStyle}>Clear All:</strong> Resets all filters and shows the full list of service tickets.</li>
<br/>
          <li><strong style={headingStyle}>Search:</strong> Applies the selected filters to refine the service ticket list.</li>
<br/>
        </ul>
      </ul>
      
      <h3 style={headingStyle}>Assign/Change Engineer</h3>
      <img 
        src={pic1} 
        alt="Assign and Change Engineer"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <p>
        <h3 style={headingStyle}>Functionality:</h3>  By clicking the plus icon on the right side of an individual ticket, users can open a pop-up window displaying
        a dropdown of engineer names. Users can assign or change engineers for that specific ticket.
      </p>
      
      <h3 style={headingStyle}>Action Icons</h3>

      <p>By clicking the action icon on an individual ticket, the user can perform the following actions:</p>
      <img 
        src={pic2} 
        alt="Action Icons" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      
      <h3 style={headingStyle}>Update Contract Icon:</h3>
      <img 
        src={pic3}
        alt="Update Contract Icon"
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <p>
        <h3 style={headingStyle}>Functionality:</h3> By clicking the Update Contract icon, users can open a dialog or form that allows them to select a new service 
        contract from a predefined list and click the update button. This enables users to add the selected service 
        contract to the service request.
      </p>

      <h3 style={headingStyle}>Duplicate Icon:</h3>
      <img 
        src={pic4}
        alt="Duplicate Icon" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <p>
        <h3 style={headingStyle}>Functionality:</h3> By clicking the Duplicate icon, users can open a pop-up that allows them to create a duplicate ticket by
        selecting an item name from a dropdown and entering the serial number in a text box.
      </p>

      <h3 style={headingStyle}>Reply Icon:</h3>
      <img 
        src={pic5} 
        alt="Reply Icon" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <p>
        <h3 style={headingStyle}>Functionality:</h3> By clicking the Reply icon, engineers can open a pop-up window that allows them to reply by selecting a status 
        from the dropdown, specifying the response date, and writing a description of the problem.
      </p>

      <h3 style={headingStyle}>Cancel Request Icon:</h3>
      <img 
        src={pic6}
        alt="Cancel Request Icon" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <p>
        <h3 style={headingStyle}>Functionality:</h3> By clicking the Cancel Request icon, users can open a pop-up window that allows them to cancel a service request.
      </p>
      
      <h3 style={headingStyle}>Close Request Icon:</h3>
      <img 
        src={pic7}
        alt="Close Request Icon" 
        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
      />
      <p>
        <h3 style={headingStyle}>Functionality:</h3> By clicking the Close Request icon, users can open a pop-up window that allows them to close a service request.
      </p>
    </section>
  );
};

export default ServiceManagement;

