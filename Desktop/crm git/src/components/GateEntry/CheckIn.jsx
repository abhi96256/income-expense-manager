import React from 'react';
import pic from "../../assets/Gate/Vehicle Number Search.jpg"
import pic1 from "../../assets/Gate/If the vehicle does not exist.jpg"
import ADDVehicle from "../../assets/Gate/ADD Vehicle.jpg"
import DocumentInformation from "../../assets/Gate/Document Information.jpg"
import PackagingInformation from "../../assets/Gate/Packaging Information.jpg"
import Quantity from "../../assets/Gate/Quantity.jpg"
import MobileNumberSearch from "../../assets/Gate/Mobile Number Search.jpg"
import NumberNotExist from "../../assets/Gate/If the number does not exist.jpg"


const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const CheckIn = () => {
    return (
        <div className="vehicle-checkin">
            <h2 style={headingStyle}>Check-In Process:</h2>

            <section>

                <p>
                    • <strong style={headingStyle}></strong> User enters a   <strong style={headingStyle}>Vehicle Number.</strong>
                </p>


                <h3 style={headingStyle}>Action:</h3>
                 <ul style={contentStyle}>
                    <li>
                        <strong style={headingStyle}>If the vehicle exists:</strong> The form pre-fills all stored vehicle details (e.g., driver name, vehicle type, mobile number).
                    </li>
<br/>
<br/>
<br/>
                    <img
                        src={pic}
                        alt="Vehicle Number Search"
                        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
                    />
                    <li>
                        <strong style={headingStyle}>If the vehicle does not exist:</strong> The form appears blank for new vehicle registration.
                    </li>
<br/>
<br/>
<br/>
                </ul>
            </section>
            <img
                src={pic1}
                alt="Vehicle does exist "
                style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
            />

            <section>
                <h3 style={headingStyle}>UI Elements</h3>
                <h3 style={headingStyle}>Vehicle Information Form:</h3>
                 <ul style={contentStyle}>
                    <li><strong style={headingStyle} >Vehicle Type:</strong> Dropdown to select the type of vehicle (e.g., Car, Truck, etc.).</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Vehicle No.:</strong> Text field (pre-filled if data exists).</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Driver Name:</strong> Text input for driver’s name.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>License No.:</strong> Optional text field for the driver’s license number.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Employee Name:</strong> Dropdown for linked employee.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Department:</strong> Dropdown for selecting a department.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Supplier:</strong> Dropdown for selecting supplier in case of loaded vehicle.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>In-Weight (E/L):</strong> Input fields for getting in the loaded and empty weight check for the vehicle.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Mobile No.:</strong> Text input for the contact number of the driver.</li>
<br/>
<br/>
<br/>
                </ul>

                <h3 style={headingStyle}>Status Type:</h3>
                 <ul style={contentStyle}>
                    <li style={headingStyle}>Radio button:   <strong style={headingStyle}>Loaded</strong> or   <strong style={headingStyle}>Empty</strong> (mandatory).</li>
<br/>
<br/>
<br/>
                </ul>

                <h3 style={headingStyle}>Actions:</h3>
                 <ul style={contentStyle}>
                    <li><strong style={headingStyle}>Check-In:</strong> Submits the form and saves vehicle entry.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Clear:</strong> Resets the form fields.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Search:</strong> Retrieves stored data using the   <strong style={headingStyle}>Vehicle Number.</strong></li>
<br/>
<br/>
<br/>
                </ul>

                <p>
                    If the   <strong style={headingStyle}>Status Type</strong> is set to   <strong style={headingStyle}>'Loaded'</strong> and the vehicle is checked-in, additional UI elements will become visible to complete the vehicle registration process.
                </p>
            </section>
            <img
                src={ADDVehicle}
                alt="ADD Vehicle "
                style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
            />


            <section>
                <h3 style={headingStyle}>Document Information:</h3>
                <p>
                    This section is to be filled with documents directly related to the loaded vehicle, ensuring they are accurately registered alongside the vehicle during the process to enhance reliability and streamline the registration workflow.
                </p>
                 <ul style={contentStyle}>
                    <li><strong style={headingStyle}>Date:</strong> Fills up with the date on which the document getting attached is issued.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Number:</strong> Input field to be filled with document number for the document.</li>
<br/>
<br/>
<br/>
                </ul>
                <p>
                      <strong style={headingStyle}>Document Information</strong>  section must enforce proper input of issue dates and unique document numbers, with error prompts for duplicates or invalid data.
                </p>
            </section>
            <img
                src={DocumentInformation}
                alt="Document Information "
                style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
            />

            <section>
                <h3 style={headingStyle}>Packaging Information:</h3>
                <p>
                    This section is to be filled with information regarding the packages loaded with the Vehicle.
                </p>
                 <ul style={contentStyle}>
                    <li><strong style={headingStyle}>Quantity:</strong> Input field for item description.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Packaging:</strong> Dropdown for the packaging type for the package loaded.</li>
<br/>
<br/>
<br/>
                </ul>
                <img
                    src={Quantity}
                    alt="Quantity"
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
                />
                <p>
                      <strong style={headingStyle}>Packaging Information</strong> section must allow entry of package details with unique packaging types, preventing duplicate entries and displaying appropriate error messages.
                </p>
            </section>
            <img
                src={PackagingInformation}
                alt="Packaging Information"
                style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
            />

            <section>
                <h2 style={headingStyle}>Success Criteria</h2>
                 <ul style={contentStyle}>
                    <li>The process must ensure robust data integrity, streamline vehicle registration workflows, and enhance reliability, resulting in a user-friendly and efficient interface.</li>
<br/>
<br/>
<br/>
                    <li>
                        The system must prevent data redundancy by ensuring that document numbers, packaging types, and other unique identifiers are not duplicated within the same registration entry, with real-time validations and error prompts to maintain data integrity.
                    </li>
<br/>
<br/>
<br/>
                    <li>
                        The system must ensure clear communication of errors or validations to users, guiding them to correct input issues seamlessly.
                    </li>
<br/>
<br/>
<br/>
                </ul>
            </section>

            <section>
                <h2 style={headingStyle}>Summary</h2>
                <p>
                    The check-in process is designed to ensure robust data integrity, streamline vehicle registration workflows, and enhance reliability through a user-friendly interface. The system prevents data redundancy by implementing real-time validations, ensuring that unique identifiers such as document numbers, packaging types, and other critical data points are not duplicated within the same entry.
                </p>
                <p>
                    Clear communication of errors and validation prompts guides users to seamlessly address input issues, maintaining accurate and reliable records. This approach results in an efficient check-in experience that fosters data accuracy and supports smooth, streamlined operations.
                </p>
            </section>
            <section>
                <br />
                <h2>Visitor Registration Functional Requirements </h2>
                <h3> Mobile Number Search :</h3>
                 <ul style={contentStyle}>


                    <li>
                        <strong style={headingStyle}> </strong>User enters a   <strong style={headingStyle}>Mobile Number. </strong><br />
                        <strong style={headingStyle}>•	Action: </strong> <ul style={contentStyle}><li>
                              <strong style={headingStyle}>If the number exists:</strong>  Pre-fills visitor details into the form.
                        </li>
<br/>
<br/>
<br/>
                        </ul>

                    </li>
<br/>
<br/>
<br/>
                    <img
                        src={MobileNumberSearch}
                        alt="Mobile Number Search"
                        style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
                    />

                    <li>
                          <strong style={headingStyle}>If the vehicle does not exist:</strong> The form appears blank for new vehicle registration.
                    </li>
<br/>
<br/>
<br/>

                </ul>
                <img
                    src={NumberNotExist}
                    alt="If the number does not exist"
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }}
                />

            </section>
            <section>
                <h2 style={headingStyle}>UI Elements</h2>
                <h3 style={headingStyle}>•	Visitor Information: </h3>
                 <ul style={contentStyle}>
                    <li><strong style={headingStyle} >Name:</strong> Dropdown for title (Mr./Ms.) + text fields for First Name and Last Name. </li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Organisation Name: </strong> Text input for organization name.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Mobile No: </strong> Pre-filled text field (non-editable)</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>oEmail ID:</strong> Optional input for the visitor’s email address.</li>
<br/>
<br/>
<br/>



                </ul>
            </section>
            <section>
                <h3 style={headingStyle}>•	Meeting Details: </h3>
                 <ul style={contentStyle}>
                    <li><strong style={headingStyle}>Employee Name: </strong>Dropdown to select the employee the visitor is meeting. </li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Department:  </strong> Dropdown for the relevant department</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Designation: </strong> Optional input for visitor’s designation.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Visit Purpose: </strong> Dropdown for selecting the reason for the visit.</li>
<br/>
<br/>
<br/>



                </ul>


            </section>
            <section>
                <h3 style={headingStyle}>• Item Details </h3>
                 <ul style={contentStyle}>
                    <li><strong style={headingStyle}>Item Name: </strong> Input field for item description</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Sr. No.  </strong>  Input for serial number (optional)..</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Quantity:  </strong> Field for item quantity.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Remarks: </strong> Free text for comments or notes</li>
<br/>
<br/>
<br/>



                </ul>

            </section>
            <section>
                <h3 style={headingStyle}>Actions:</h3>
                 <ul style={contentStyle}>
                    <li><strong style={headingStyle}>Check-In:</strong> Finalizes the visitor's entry.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Clear: </strong>  Resets the form.</li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle} >Search: </strong> Retrieves details using the   <strong style={headingStyle}>Mobile Number</strong></li>
<br/>
<br/>
<br/>
                    <li><strong style={headingStyle}>Save Contact:</strong> Saves a new visitor’s contact details.</li>
<br/>
<br/>
<br/>

                </ul>
            </section>

            <section>
                <h3 style={headingStyle}>Success Criteria</h3>
                 <ul style={contentStyle}>
                    <li>Pre-filling stored data for existing visitors.</li>
<br/>
<br/>
<br/>
                    <li>Efficient handling of new visitor additions without interruption.</li>
<br/>
<br/>
<br/>


                </ul>
            </section>

        </div>
    );
};



export default CheckIn;

