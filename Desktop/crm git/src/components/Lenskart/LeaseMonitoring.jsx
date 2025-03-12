import React from 'react';
import  pic from "../../assets/lenskart/lease agreement monitoring.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const LeaseMonitoring = () => {
  return (
    <div>
      <h2  style={headingStyle}>Lease Agreement Monitoring:</h2>

      <div className="content-section">
        <img
          src={pic}
          alt="Property Category Image"
          style={{ width: '800px', marginRight: '10px' }}
        />
        <br />

        <p>
          The <b style={headingStyle}>Lease Agreement Monitoring</b> page offers features to track, search, and update invoices
          related to lease agreements across various cities. Users can monitor the status of invoices, filter
          them by multiple criteria, and initiate actions on invoices in progress.
          <br />
        </p>
        <br />

        <b style={headingStyle}>Key UI Elements & Functionalities:</b>
        <br />
        <br />

        <b style={headingStyle}>1. Top Navigation Tabs:</b>
        <br />
         <ul style={contentStyle}>
          <li><b style={headingStyle}>Invoicing:</b> The default tab to manage lease-related invoices.</li>
<br/>
          <br />
          <li><b style={headingStyle}>Renewal:</b> Navigates to lease renewal tracking.</li>
<br/>
          <br />
          <li><b style={headingStyle}>Closure:</b> Navigates to the lease closure section for finalized contracts.</li>
<br/>
          <br />
        </ul>

        <b style={headingStyle}>2. Filters:</b>
        <br />
        <br />
         <ul style={contentStyle}>
          <li><b style={headingStyle}>Year & Month Dropdowns:</b>
             <ul style={contentStyle}>
              <li>Users can <b style={headingStyle}>filter invoices</b> by selecting a specific <b style={headingStyle}>year</b> and <b style={headingStyle}>month</b> to narrow down relevant entries.</li>
<br/>
            </ul>
          </li>
<br/>
          <br />
          <li><b style={headingStyle}>Date Range Picker:</b>
             <ul style={contentStyle}>
              <li>Users can specify a <b style={headingStyle}>From</b> and <b style={headingStyle}>To</b> date range to further filter the lease invoices.</li>
<br/>
            </ul>
          </li>
<br/>
          <br />
          <li><b style={headingStyle}>Search Box:</b>
             <ul style={contentStyle}>
              <li>A <b style={headingStyle}>search field</b> to search specific entries by keywords like Agreement No, Invoice No, or Payee Name.</li>
<br/>
            </ul>
          </li>
<br/>
        </ul>
        <br />

        <b style={headingStyle}>3. Invoice List Table:</b>
        <br />
        <br />
         <ul style={contentStyle}>
          <li><b style={headingStyle}>Columns in the Table:</b>
             <ul style={contentStyle}>
              <li><b style={headingStyle}>Action:</b> Icons for specific actions like:
                 <ul style={contentStyle}>
                  <li><strong style={headingStyle}>Edit/View:</strong> Allows the user to view or edit details of the selected invoice.</li>
<br/>
                  <li><strong style={headingStyle}>Status Indicator:</strong> Shows a colored status, indicating the current state of the invoice.</li>
<br/>
                </ul>
              </li>
<br/>
            </ul>
          </li>
<br/>
          <li><b style={headingStyle}>SR#:</b> Serial number to organize the entries.</li>
<br/>
          <li><b style={headingStyle}>Agreement No:</b> The unique number associated with each lease agreement.</li>
<br/>
          <li><b style={headingStyle}>City:</b> Displays the city in which the leased property is located.</li>
<br/>
          <li><b style={headingStyle}>Invoice No:</b> The assigned invoice number (can be pre-filled or entered manually).</li>
<br/>
          <li><b style={headingStyle}>Invoice Date:</b> The date when the invoice was created.</li>
<br/>
          <li><b style={headingStyle}>Payee Name:</b> The name of the store manager, owner, or relevant party assigned for payment.</li>
<br/>
          <li><b style={headingStyle}>Invoice Status:</b>
             <ul style={contentStyle}>
              <li><b style={headingStyle}>In-Creation:</b> (Yellow) The invoice is being generated but not finalized.</li>
<br/>
              <li><b style={headingStyle}>Approved:</b> (Green) The invoice is approved and ready for further processing.</li>
<br/>
            </ul>
          </li>
<br/>
          <li><b style={headingStyle}>From & To Dates:</b> Indicates the duration for which the invoice is applicable (billing period).</li>
<br/>
          <li><b style={headingStyle}>Store Code:</b> A unique identifier assigned to each store location, used to link the lease or invoice to a specific store.</li>
<br/>
          <li><b style={headingStyle}>Vendor Code:</b> A unique code assigned to the vendor (lessor), used to identify the property owner or leasing party for billing and tracking purposes.</li>
<br/>
          <li><b style={headingStyle}>Rent:</b> The monthly rent amount payable for the leased property, as per the lease agreement.</li>
<br/>
          <li><b style={headingStyle}>Service Type:</b> The type of service or facility (e.g., maintenance, utilities) provided along with the rent, if applicable.</li>
<br/>
          <li><b style={headingStyle}>Amount:</b> The total amount to be paid, inclusive of rent, service charges, and other applicable fees.</li>
<br/>
          <li><b style={headingStyle}>Base Amount:</b> The core rent amount before any additional service charges, taxes, or discounts are applied.</li>
<br/>
        </ul>
        <br />

        <b style={headingStyle}>4. Action Buttons:</b>
        <br />
         <ul style={contentStyle}>
          <li><b style={headingStyle}>Generate Invoice (Top Right):</b>
             <ul style={contentStyle}>
              <li>This button opens a pop-up to generate a new invoice by specifying the month (as shown in the previous image).</li>
<br/>
              <li>After generation, the invoice will appear in the list with the status <b style={headingStyle}>In-Creation.</b></li>
<br/>
            </ul>
          </li>
<br/>
        </ul>
        <br />

        <b style={headingStyle}>5. Functionalities:</b>
        <br />
         <ul style={contentStyle}>
          <li><b style={headingStyle}>Invoice Generation & Management:</b>
             <ul style={contentStyle}>
              <li>Users can initiate new invoices by selecting the <b style={headingStyle}>Generate Invoice</b> button.</li>
<br/>
              <li>Invoice status changes from <b style={headingStyle}>In-Creation</b> to <b style={headingStyle}>Approved</b> once finalized.</li>
<br/>
            </ul>
          </li>
<br/>
          <li><b style={headingStyle}>Filtering and Search:</b>
             <ul style={contentStyle}>
              <li>Users can quickly filter invoices by <b style={headingStyle}>month</b>, <b style={headingStyle}>date range</b>, or <b style={headingStyle}>city.</b></li>
<br/>
              <li>A <b style={headingStyle}>search bar</b> allows searching by Agreement Number, Invoice Number, or Payee.</li>
<br/>
            </ul>
          </li>
<br/>
          <li><b style={headingStyle}>Monitoring Status and Actions:</b>
             <ul style={contentStyle}>
              <li>Users can edit/view the invoices by clicking the action icon in the Action column.</li>
<br/>
              <li>The color-coded Invoice Status provides quick insight into the progress.</li>
<br/>
            </ul>
          </li>
<br/>
          <li><b style={headingStyle}>Assignment of Payee:</b>
             <ul style={contentStyle}>
              <li>For each invoice, a <b style={headingStyle}>payee name</b> is assigned to manage payments.</li>
<br/>
              <li>If invoices are <b style={headingStyle}>non-GST</b>, they do not require collection, as mentioned earlier.</li>
<br/>
            </ul>
          </li>
<br/>
        </ul>

        <b style={headingStyle}>To ensure data integrity and avoid discrepancies, the system will validate the following things at the time of invoice submission:</b>
        <br />
         <ul style={contentStyle}>
          <li>Duplicate Invoice No in FY,</li>
<br/>
          <li>Rent Month - Service</li>
<br/>
          <li>Single Invoice can have Rent and CAM</li>
<br/>
          <li>Agreement terms</li>
<br/>
        </ul>

        <b style={headingStyle}>Duplicate Invoice No in FY, Other Requested Features:</b>
        <br />
         <ul style={contentStyle}>
          <li>All fields should be editable at Finance End.</li>
<br/>
          <li>Approval and Rejection.</li>
<br/>
          <li>Screen for Finance.</li>
<br/>
          <li>After approval, it will go to Payment.</li>
<br/>
          <li>Column for Payment to be done.</li>
<br/>
        </ul>

        <b style={headingStyle}>Other Workflows to be Developed:</b>
        <br />
        <ol>
          <li>Invoice Rejection.</li>
<br/>
          <li>Transfer invoice to BD team for negotiation & corrections.</li>
<br/>
          <li>Rent escalations.</li>
<br/>
          <li>Agreement Closure.</li>
<br/>
          <li>Deductions & hold payments.</li>
<br/>
          <li>GST Status Update.</li>
<br/>
        </ol>
      </div>
    </div>
  );
};

export default LeaseMonitoring;
