import React from 'react';
import  pic from "../../assets/lenskart/lease aggrement listing.png"
const headingStyle = { color: "#444",  fontWeight: "bold",  fontFamily: "'Oswald', sans-serif" 
  };
const contentStyle = { 
  
  fontFamily: "'Oswald', sans-serif", 

};

const LeaseListing = () => {
  return (
    <div>
      <h2  style={headingStyle}>Lease Agreement Listing Page:</h2>

      <div className="content-section">
        <p>
          The Lease Management section of our application is designed to streamline the process of managing lease agreements for properties.
          This comprehensive tool allows users to efficiently view, edit, and manage all lease-related information, ensuring that property
          management is both organized and accessible.
        </p>
      </div>
      <br />

      <div className="content-section">
        <b style={headingStyle}>1. Lease Agreement Listing Page:</b>
        <br />
        <p>
          The Lease Agreement Listing Page serves as a centralized hub for managing and viewing lease agreements associated with properties
          within our application. This user-friendly interface is designed to enhance the efficiency and effectiveness of property management,
          allowing users to easily access, organize, and manipulate lease data in a streamlined manner.
        </p>
        <img src={pic} alt="Property Category Image" style={{ width: '800px', marginRight: '10px' }} />
        <br />
        <br />
      </div>

      <div className="content-section">
        <b style={headingStyle}>2. Page Layout and Elements:</b>
        <br />
        <p>
          The Lease Agreement Listing Page is designed with a user-centric approach, ensuring that all essential features are easily
          accessible and organized. Everything is organized intuitively, so even new users can find what they need quickly. This layout
          enhances the overall experience and simplifies lease management. Below, you'll find a breakdown of the page layout and its
          components, showing how they work together to help users manage leases effectively and confidently, which collectively enhance user
          experience and streamline lease management.
        </p>
        <br />

        <b style={headingStyle}>Filters and Search:</b>
        <p>This section empowers users to refine their lease searches for better results.</p>
    
         <ul style={contentStyle}>
          <li>
            <b style={headingStyle}>Lease Date Filter:</b> Users can select a date range to filter leases based on start or end dates. This allows for targeted
            searches, making it easier to manage leases within specific timeframes.
          </li>

          <br />
          <li>
            <b style={headingStyle}>State Filter:</b> A dropdown filter that enables users to narrow down leases based on their current state (e.g., active, expired, under review).
            This filter is essential for quick assessments of lease statuses.
          </li>

          <br />
          <li>
            <b style={headingStyle}>Search Box:</b> Located prominently within the filter section, this search box allows users to enter keywords to find leases
            quickly. It can search through lease titles, tenant names, and other relevant fields.
          </li>

      
        </ul>
      </div>
      <br />

      <div className="content-section">
        <b style={headingStyle}>Lease Listing Table:</b>
        <p style={contentStyle}>The heart of the Lease Agreement Listing Page, this table provides a detailed overview of all leases.</p>

         <ul style={contentStyle}>
          <li>
            <b style={headingStyle}>Grid:</b> The grid displays all relevant lease data in a structured format. Each row represents a lease, with columns for key
            information such as tenant name, property address, lease dates, and payment status.
          </li>
<br/>
       
          <li>
            <b style={headingStyle}>Action Icons:</b>
            <br/>
             <ul style={contentStyle}>
              <li>
                <b style={headingStyle}>View (Eye Icon):</b> This icon allows users to access detailed lease information. Clicking it opens a modal or new page
                where users can view and edit additional details such as payee information, invoices, and renewal options.
              </li>

              <br />
              <li>
                <b style={headingStyle}>Approve (Approval Icon):</b> Positioned near the view icon, this icon facilitates the approval process for leases. A lease
                can be approved if it has at least one payee and one associated document, ensuring that all necessary information is in place
                before approval.
              </li>

            </ul>
          </li>

        </ul>
      </div>

      <div className="content-section">
        <p>
          <b style={headingStyle}>3. Add Button:</b> A prominent button that enables users to initiate the process of adding a new lease agreement. This feature is
          vital for maintaining an up-to-date lease portfolio.
        </p>
      </div>
    </div>
  );
};

export default LeaseListing;
