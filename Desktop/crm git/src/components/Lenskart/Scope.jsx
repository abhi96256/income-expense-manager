import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};
const Scope = () => {
  return (
    <div>
      <h2  style={headingStyle}>Scope of the Document:</h2>
      <p>
        This Functional Requirements Document (FRD) outlines the specific
        functionalities to be developed and implemented as part of the
        <b style={headingStyle}>Lease Management Module</b> in FebiNext.
      </p>
      <p>The FRD covers the following key areas:</p>

      <div className="section">
        <h2 style={headingStyle}>1. Property and Lease Management:</h2>
        <p>
          <b style={headingStyle}>• Property Management:</b> The system will store essential property
          details, including ownership types, categories, lease tenure, and
          operational dates, ensuring effective property portfolio management.
        </p>
        <p>
          <b style={headingStyle}>• Lease Creation:</b> Users can create new leases by entering key
          details such as lease start and end dates, rental amounts, and terms.
          Duplicate entries will be avoided through system validation against
          existing records.
        </p>
        <p>
          <b style={headingStyle}>• Lease Tracking:</b> The lifecycle of each lease will be managed
          within the system, including rent status, renewal timelines, and
          extensions. Users can filter lease information based on date range &amp;
          state.
        </p>
      </div>
      <br />

      <div className="section">
        <h2  style={headingStyle}>2. Rent and Payment Management:</h2>
        <p>
          <b style={headingStyle}>• Rent Parameters:</b> The system will support the configuration of
          detailed rent parameters, such as rent amount, lease area, rate per
          square foot, start date, lock-in period, and notice period, accommodating
          both fixed and variable rent structures.
        </p>
        <p>
          <b style={headingStyle}>• Penalty for Delayed Payment:</b> Users can configure penalties for
          delayed rent payments, ensuring compliance with lease terms. The penalty
          rules will be automatically applied to overdue payments.
        </p>
        <p>
          <b style={headingStyle}>• Security Deposit Management:</b> The system will store and track
          security deposits for each lease, including details of deposit amounts
          and any deductions, ensuring complete transparency.
        </p>
        <p>
          <b style={headingStyle}>• Lease Renewal Parameters:</b> Lease renewal rules can be configured,
          including predefined escalation clauses for rent increases.
        </p>
        <p>
          <b style={headingStyle}>• Add Payee:</b> Users will be able to define payees associated with
          each lease, along with their bank details and payment terms, to
          streamline the payment process.
        </p>
        <br />
      </div>

      <div className="section">
        <h2  style={headingStyle}>3. Documentation Management:</h2>
        <p>
          <b style={headingStyle}>• Document Management:</b> All lease-related documents, including
          agreements, ownership certificates, and invoices, will be stored and
          managed within the system. Users can easily upload, access, and organize
          documents for each lease.
        </p>
      </div>
      <br />

      <div className="section">
        <h2  style={headingStyle}>4. User Roles and Access Control:</h2>
        <p>
          <b style={headingStyle}>• Role-Based Access Control:</b> The system will implement role-based
          access to ensure that only authorized users can view or modify lease
          information. For example, finance teams will access payment modules,
          while property managers handle lease creation and updates.
        </p>
      </div>

      <div className="section">
        <h2  style={headingStyle}>Success Criteria:</h2>
        <p>
            <b style={headingStyle}>• Functional Completeness:</b> All functionalities outlined in this
            document—property management, rent tracking, penalties for delays, and
            lease renewal must be fully implemented within the project’s scope.
            </p>
         
        
          <p>
            <b style={headingStyle}>• Performance:</b> The module must handle multiple leases, activities,
            and users efficiently, ensuring quick response times and supporting
            concurrent access by multiple users.
            </p>
        
       
          <p>
            <b style={headingStyle}>• Usability:</b> The interface must be user-friendly, allowing users
            to easily configure rent parameters, track lease activities, and manage
            payments with minimal training.
            </p>
        
       
          <p>
            <b style={headingStyle}> • Security:</b> The module must adhere to high-security standards to
            protect sensitive lease data, including financial information and
            lease documents. Encryption and role-based access controls will
            prevent unauthorized access.
            </p>
       
       
          <p>
            <b style={headingStyle}>• Compliance:</b> The module must comply with relevant real estate
            and financial regulations, ensuring proper documentation, and
            adherence to privacy policies.
         
       </p>
      </div>

      <p>
        This detailed scope provides a comprehensive understanding of the Lease
        Management Module, aligning all stakeholders with the project objectives.
        The attached screenshots (as provided) offer a visual reference to
        demonstrate key steps and functionalities, promoting clarity and
        facilitating smooth adoption across the organization.
      </p>
    </div>
  );
};

export default Scope;
