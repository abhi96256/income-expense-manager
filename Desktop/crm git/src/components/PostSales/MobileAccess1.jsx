import React from 'react';
import  pic from "../../assets/Post/Ticket View.png"
import  pic1 from "../../assets/Post/Add Item.png"
import  pic2 from "../../assets/Post/Actions on Service Ticket(add item).png"
import  pic3 from "../../assets/Post/Add document.png"
import  pic4 from "../../assets/Post/Reply.png"
import  pic5 from "../../assets/Post/Payment Collection-2.png"
const headingStyle = { color: "#444",  fontWeight: "bold",   fontFamily: "'Oswald', sans-serif" };
const contentStyle = { 
  
   fontFamily: "'Oswald', sans-serif", 
  fontStyle: "normal", 
  fontSize: "17px", 
  lineHeight: "1.6" 
};

const MobileAccess = () => {
  return (
    <div>
      <h2 style={headingStyle}>Mobile Access:</h2>
      <p>
        In addition to desktop access, users can manage service tickets directly through the mobile interface. This includes the ability to view tickets based on status, select a date range, add items, upload documents, and process payments. The mobile functionality ensures seamless service ticket management from anywhere, providing flexibility and improving responsiveness.
      </p>

      <section>
        <h2 style={headingStyle}>Ticket View</h2>
        <p>Users can view the ticket based on date range, status, and categories.</p>
        <img src={pic} alt="Ticket View" style={{ width: '300px', marginRight: '10px', marginLeft: '30px' }} />
      </section>

      <section>
        <h2 style={headingStyle}>Add Item</h2>
        <p>Users can view ticket details and add items based on item name, billing type, quantity, with the price automatically calculated and reflected.</p>
        <img src={pic1} alt="Add Item" style={{ width: '300px', marginRight: '10px', marginLeft: '30px' }} />
        <p>
          Users can effortlessly add new items to their ticket by selecting from an extensive and organized list of available options. As they input the quantity for each item, the system dynamically calculates the total price in real-time, taking into account the chosen billing structure—whether it's a flat rate, hourly, or tiered pricing model. This ensures that the pricing remains accurate and transparent throughout the process. The updated total is immediately reflected in the ticket summary, offering users a clear, up-to-date view of their costs at all times.
        </p>
        <p>
          Users also have full flexibility to modify their selections by easily editing quantities, adjusting items, or removing them altogether. This level of control empowers users to fine-tune their billing as needed, streamlining the entire process and providing greater confidence in managing their charges.
        </p>
      </section>

      <section>
        <h2 style={headingStyle}>Actions on Service Ticket</h2>
         <ul style={contentStyle}>
          <li>
            <strong style={headingStyle}>Add Item:</strong> Users can view ticket details and click on ‘+’ button. Add items based on item name, billing type, quantity, with the price automatically calculated and reflected.
          </li>
<br/>
        </ul>
        <img src={pic2} alt="Actions on Service Ticket(add item)" style={{ width: '300px', marginRight: '10px', marginLeft: '30px' }} />
        <p>
          The updated total price is instantly reflected in the ticket summary, providing users with immediate visibility into the impact of their additions and adjustments in real-time. This seamless and responsive process not only enhances the overall user experience by making it intuitive and straightforward but also empowers users to monitor their expenditures with ease, ensuring they are always aware of the financial implications of their choices.
        </p>
        <p>
          By offering this immediate feedback, the system enables users to make informed decisions throughout the process. Furthermore, users have the flexibility to review, modify, or fine-tune item details at any stage before finalizing their changes, ensuring they retain full control over the ticket management process.
        </p>
        <p>
          Whether adjusting quantities, switching billing options, or refining item descriptions, this functionality allows for a high degree of customization, reducing the risk of errors and giving users the confidence that their final ticket reflects exactly what they intended.
        </p>
      </section>

      <section>
        <h2 style={headingStyle}>Add Document</h2>
        <img src={pic3} alt="Add document" style={{ width: '300px', marginRight: '10px', marginLeft: '30px' }} />
        <p>Click on the image button in the top-right corner. From there, you can upload documents by selecting either the camera or gallery option.</p>
        <p>
          Once you’ve made your selection and confirmed the upload, the document will be seamlessly attached to your current project or ticket. You’ll receive a prompt notification confirming the successful upload, and the document will be immediately accessible for viewing and sharing with team members or stakeholders.
        </p>
        <p>
          This smooth integration eliminates any delays, ensuring that the document becomes part of your project without interruption. By consolidating all relevant materials in one centralized location, this feature not only streamlines the documentation process but also enhances collaboration and efficiency, making it easier to stay organized and keep everyone on the same page.
        </p>
      </section>

      <section>
        <h2 style={headingStyle}>Reply</h2>
        <p>The engineer will click on the reply button and perform actions by selecting the appropriate ticket status. If the engineer has reached the client location, they can select the "Reached" status and specify the date and time. The agent can close the ticket once all services are completed.</p>
        <img src={pic4} alt="Reply" style={{ width: '300px', marginRight: '10px', marginLeft: '30px' }} />
        <p>
          If the engineer has successfully arrived at the client’s location, they can select the "Reached" status. This selection is crucial as it not only updates the ticket but also provides visibility to both the team and the client regarding the engineer’s on-site presence. Upon selecting this status, the engineer will be prompted to specify the exact date and time of their arrival. This timestamp is automatically recorded, ensuring an accurate log of the service timeline, which can be valuable for future reference and reporting.
        </p>
      </section>

      <section>
        <h2 style={headingStyle}>Payment Collection</h2>
         <ul style={contentStyle}>
          <li>Payment can be collected via multiple modes, including cash, UPI, cheque, or partially across these methods.</li>
<br/>
        </ul>
        <img src={pic5} alt="Payment Collection" style={{ width: '300px', marginRight: '10px', marginLeft: '30px' }} />
        <p>
          Each payment method is designed to be secure and user-friendly, with clear prompts guiding clients through the transaction process. After payment is collected, the system generates a receipt automatically, which can be sent via email or SMS for the client’s records. This ensures transparency and provides both parties with a clear record of the transaction.
        </p>
        <p>
          By offering a diverse range of payment options, the payment collection process becomes more efficient and accommodating, ultimately enhancing the overall customer experience.
        </p>
      </section>
    </div>
  );
};

export default MobileAccess;
