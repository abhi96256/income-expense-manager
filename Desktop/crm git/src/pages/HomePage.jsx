import React, { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { placeholderEffect } from "../utils/placeholderEffect";
import Mark from "mark.js";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuItems, setMenuItems] = useState([
    {
      name: (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1590/1590907.png" // Direct link to the image
            alt="Set-Up Icon"
            style={{ width: "45px", height: "45px" }} // Adjust size as needed
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center", // Ensure text is centered
              whiteSpace: "nowrap", // Prevent text from wrapping
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            Set-Up
          </span> {/* Text below the icon */}
        </div>
      ),
      isOpen: false,
      subMenus: [
        {
          name : "Lenskart" ,
          topics: [
            { name : "📘 Introduction of Lenskart", path: "/Intro" },
            { name: "📘 Scope of Lenskart", path: "/Scope" },
            { name: "📘 Zvolv Pulling", path: "/ZvolvPulling" },
            { name: "📘 Lease Creation", path: "/LeaseCreation" },
            { name: "📘 Lease Listing", path: "/LeaseListing" },
            { name: "📘 Lease Details", path: "/LeaseDetails" },
            { name: "📘 Payee Management", path: "/PayeeManagement" },
            { name: "📘 Lease Monitoring", path: "/LeaseMonitoring" },
            { name: "📘 Dependencies of Lenskart", path: "/Dependencies" },
            { name: "📘 Testing Validation of Lenskart", path: "/TestingValidation" },
          ],
        },
      ],
    },
    {
      name: (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8654/8654483.png" // Direct link to the IMM icon
            alt="IMM Icon"
            style={{ width: "40px", height: "40px" }} // Adjust size as needed
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center", // Ensure text is centered
              whiteSpace: "nowrap", // Prevent text from wrapping

            }}
          >
            Gate-Entry
          </span> {/* Text below the icon */}
        </div>
      ),
      isOpen: false,
      subMenus: [
        {
          name: "Gate-Entry",
          topics: [
            { name: "📘 Introduction of the Gate-Entry", path: "/Intro3" },
            { name: "📘 Scope of the Gate-Entry", path: "/Scope3" },
            { name: "📘 Check-In Functional Requirements", path: "/CheckIn" },
            { name: "📘 Check-Out Functional Requirement", path: "/CheckOut" },
            { name: "📘 Printing Functional Requirements", path: "/Pass" },
            { name: "📘 Board View", path: "/BoardView" },
            { name: "📘 List View", path: "/ListView" },
            { name: "📘 Dashboard View", path: "/Dashboard" },
          ],
        },
      ],
    },
    {
      name: (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2867/2867297.png" // Direct link to the CRM icon
            alt="CRM Icon"
            style={{ width: "40px", height: "40px" }} // Adjust size as needed
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center", // Ensure text is centered
              whiteSpace: "nowrap", // Prevent text from wrapping
              fontFamily: "'Oswald', sans-serif"
            }}
          >
            CRM
          </span> {/* Text below the icon */}
        </div>
      ),
      isOpen: false,
      subMenus: [
        {
          name: "Pre-Sales",
          topics: [
            { name: "📘 Introduction of the Pre-sales", path: "/Introduction" },
            { name: "📘 Scope of the Pre-Sales", path: "/ScopeDocument" },
            { name: "📘 Lead Creation", path: "/LeadCreation" },
            { name: "📘 Lead Management", path: "/LeadManagement" },
            { name: "📘 Lead FLOW-CHART", path: "/LeadFlowChart" },
            { name: "📘 Activity Creation", path: "/ActivityCreation" },
            { name: "📘 Viewing Activity History", path: "/ActivityHistory" },
            { name: "📘 Performing Actions on Lead-Linked", path: "/LeadLinkedActivities" },
            { name: "📘 Overdue Activity Report", path: "/OverdueActivityReport" },
            { name: "📘 Activity FLOW-CHART", path: "/ActivityFlowChart" },
            { name: "📘 Mobile Access", path: "/MobileAccess" },
            { name: "📘 Employee Location Tracking", path: "/LocationTracking" },
            { name: "📘 Non-Functional Requirements of Pre-Sales", path: "/NonFunctional" },
            { name: "📘 Dependencies Of Pre-Sales", path: "/DependenciesPre" },
            { name: "📘 Testing and Validation of Pre-Sales", path: "/TestingValidationPre" },
          ],
        },
        {
          name: "Post-Sales",
          topics: [
            { name: "📘 Introduction of the Post-Sales", path: "/Introduction1" },
            { name: "📘 Scope of the Post-Sales", path: "/Scope1" },
            { name: "📘 Service Ticket Creation", path: "/TicketCreation" },
            { name: "📘 Service Request Management", path: "/ServiceManagement" },
            { name: "📘 Service Ticket Detail", path: "/TicketDetail" },
            { name: "📘 Service Request Flow-Chart", path: "/RequestFlowChart" },
            { name: "📘 Service Contract Creation", path: "/ContractCreation" },
            { name: "📘 Service Contract Management", path: "/ContractManagement" },
            { name: "📘 Service Contract Flow-Chart", path: "/ContractFlowChart" },
            { name: "📘 Mobile Access", path: "/MobileAccess1" },
            { name: "📘 Employee Location Tracking", path: "/LocationTracking1" },
            { name: "📘 Non-Functional Requirements Of Post-Sales", path: "/NonFunctional1" },
            { name: "📘 Dependencies Of Post-Sales", path: "/DependenciesPost" },
            { name: "📘 Testing and Validation Of Post-Sales", path: "/TestingValidationPost" },
          ],
        },
      ],
    },
  ]);

  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isContentEmpty, setIsContentEmpty] = useState(true);
  const [searchTextContentArea, setSearchTextContentArea] = useState("");
  const [showModuleBox, setShowModuleBox] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [currentModule, setCurrentModule] = useState(null);
  const [currentSubModules, setCurrentSubModules] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [noResultsFound, setNoResultsFound] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const contentRef = useRef(null);
  const { placeholder } = placeholderEffect();

  // Handle menu click
  const onClickMenu = (menu, index) => {
    setSelectedMenu(menu.name);
    if (menu.subMenus && menu.subMenus.length > 0) {
      setShowModuleBox(true);
      setIsContentEmpty(false);
      setCurrentModule(menu.name);
      setCurrentSubModules(menu.subMenus); // Set the sub-modules for the selected module
    } else {
      setShowModuleBox(false);
      setIsContentEmpty(true);
    }
    setMenuItems(
      menuItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );

    // Clear search term and results when a module is clicked
    setSearchTerm("");
    setSearchResults([]);
    setSearchTextContentArea("");
    setNoResultsFound(false);
  };

  // Handle sub-module click (e.g., Pre-Sales, Post-Sales, Gate-Entry)
  const handleSubModuleClick = (subModule) => {
    setShowModuleBox(false);
    setShowTopics(true);
    setCurrentModule(subModule.name); // Set the current sub-module
  };

  // Handle topic click
  const handleTopicClick = (path) => {
    navigate(path);
    setShowTopics(false);
    setShowSearchBar(true);
  };

  // Handle back button click
  const handleBackClick = () => {
    navigate(-1);
    setShowTopics(true);
    setShowSearchBar(false); // Hide search-bar-2 when going back to topics
  };

  // Highlight search text in content area
  useEffect(() => {
    if (contentRef.current) {
      const obj = new Mark(contentRef.current);
      obj.unmark();
      if (searchTextContentArea) {
        obj.mark(searchTextContentArea, { className: "highlight" });
      }
    }
  }, [searchTextContentArea]);

  // Get the current sub-module's topics
  const getCurrentSubModuleTopics = () => {
    const subModule = currentSubModules.find((item) => item.name === currentModule);
    if (subModule && subModule.topics) {
      return subModule.topics;
    }
    return [];
  };

  // Handle search functionality
  const handleSearch = (searchTerm) => {
    const results = [];
    menuItems.forEach((menu) => {
      menu.subMenus.forEach((subMenu) => {
        subMenu.topics.forEach((topic) => {
          if (topic.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push({ ...subMenu, topic });
          }
        });
      });
    });

    if (results.length > 0) {
      setSearchResults(results);
      setShowModuleBox(false);
      setShowTopics(true);
      setIsContentEmpty(false);
      setNoResultsFound(false);
    } else {
      setSearchResults([]);
      setIsContentEmpty(false); // Do not set isContentEmpty to true
      setNoResultsFound(true);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      setSearchResults([]);
      setIsContentEmpty(true);
      setNoResultsFound(false);
    }
  }, [searchTerm]);

  return (
    <div>
      <Navbar
        placeholder={placeholder}
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        menuItems={menuItems}
        onClickMenu={onClickMenu}
        selectedMenu={selectedMenu}
      />

      <div className="container">
        <Sidebar
          menuItems={menuItems}
          searchTerm={searchTerm}
          onClickMenu={onClickMenu}
          selectedMenu={selectedMenu}
        />
        <main className="main-content">
          <div className="content-area">
            <div id="content-area" ref={contentRef}>
              {showSearchBar && (
                <input
                  type="text"
                  id="search-bar-2"
                  className="search-bar-2"
                  placeholder="Search within content..."
                  value={searchTextContentArea}
                  onChange={(e) => setSearchTextContentArea(e.target.value)}
                />
              )}
              {isContentEmpty && !noResultsFound ? (
                <div className="prompt-message" >
                  <h1 className="text-3xl font-bold mb-4" style={{
                    fontFamily: 'Oswald, sans-serif',
                    color: '#444',
                    fontWeight: 'bold'
                  }}> 📚 This is a user-friendly digital guide. </h1>
                  <section>
                    <h3 className="" style={{
                      fontFamily: 'Oswald, sans-serif',
                      color: '#444',
                      fontWeight: 'bold'
                    }}>
                      🔍 To explore these modules in detail, simply select a modulefrom the sidebar menu on the left.🔍
                    </h3>
                  </section>
                  <p className="text-lg mb-6">It includes various modules and the summary of these modules are as follows:.</p>

                  {/* Lenskart Module */}
                  <section className="mb-8">
                    <h2
                      className="text-2xl font-semibold mb-3"
                      style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}
                    >
                      🟢 Lenskart Module
                    </h2>
                    <p className="text-base mb-2">Efficient Lease & Payee Management</p>
                    <p className="mb-4">
                      The Lenskart module covers end-to-end functional requirements for lease and payee management.
                      It simplifies complex workflows and ensures seamless operations.
                    </p>
                    <ul className="list-disc pl-6">
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Introduction & Scope:</strong> Overview of the module's purpose and coverage.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Zvolv Pulling:</strong> Automate data extraction for faster processing.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Lease Creation & Management:</strong> Easily create, manage, and monitor lease agreements.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Payee Management:</strong> Ensure accurate tracking of payee details and payments.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Lease Monitoring:</strong> Get real-time lease status updates and alerts.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Dependencies:</strong> Understand required integrations and systems.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Testing & Validation:</strong> Ensure flawless execution through comprehensive testing.</li>
                    </ul>
                  </section>

                  {/* IMM Module */}
                  <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3" style={{
                      fontFamily: 'Oswald, sans-serif',
                      color: '#444',
                      fontWeight: 'bold'
                    }}>🟠 IMM (Inbound Material Management)</h2>
                    <p className="text-base mb-2">Streamline Material Tracking & Gate Entry</p>
                    <p className="mb-4">
                      The IMM module ensures smooth handling of inbound materials from entry to exit, reducing manual errors and improving efficiency.
                    </p>
                    <ul className="list-disc pl-6">
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Gate Entry Workflow:</strong> Manage check-in, check-out, and pass printing.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Check-In Functional Requirements:</strong> Record material arrivals with accurate details.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Check-Out Functional Requirements:</strong> Ensure smooth exit with documented handover.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Printing Functional Requirements:</strong> Generate entry/exit passes for seamless tracking.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>View-Based Functional Overview:</strong>
                        <ul className="list-circle pl-8">
                          <li><strong style={{
                            fontFamily: 'Oswald, sans-serif',
                            color: '#444',
                            fontWeight: 'bold'
                          }}>Board View:</strong > Visualize material movement at a glance.</li>
                          <li><strong style={{
                            fontFamily: 'Oswald, sans-serif',
                            color: '#444',
                            fontWeight: 'bold'
                          }}>List View:</strong> Detailed listing of all entries and exits.</li>
                          <li><strong style={{
                            fontFamily: 'Oswald, sans-serif',
                            color: '#444',
                            fontWeight: 'bold'
                          }}>Dashboard View:</strong> Real-time insights into overall activity.</li>
                        </ul>
                      </li>
                    </ul>
                  </section>

                  {/* Pre-Sales CRM */}
                  <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3" style={{
                      fontFamily: 'Oswald, sans-serif',
                      color: '#444',
                      fontWeight: 'bold'
                    }}>🔵 Pre-Sales CRM</h2>
                    <p className="text-base mb-2">Effective Lead Management & Conversion</p>
                    <p className="mb-4">
                      This module focuses on lead generation, activity tracking, and seamless communication,
                      empowering your sales team to close deals faster.
                    </p>
                    <ul className="list-disc pl-6">
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Introduction & Scope:</strong> Understand the goals and benefits of the pre-sales process.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Lead Creation & Management:</strong> Track leads from the first touchpoint to conversion.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Lead Flowchart:</strong> Visualize the lead journey for better insights.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Activity Management:</strong> Create, view history, and manage lead-linked tasks.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Overdue Activity Reports:</strong> Stay ahead with alerts for pending tasks.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Mobile Access & Employee Location Tracking:</strong> Ensure field teams stay connected.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Non-Functional Requirements & Testing:</strong> Ensure system performance and reliability.</li>
                    </ul>
                  </section>

                  {/* Post-Sales CRM */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-3" style={{
                      fontFamily: 'Oswald, sans-serif',
                      color: '#444',
                      fontWeight: 'bold'
                    }}>🟣 Post-Sales CRM</h2>
                    <p className="text-base mb-2">Seamless Customer Support & Service Tracking</p>
                    <p className="mb-4">
                      The Post-Sales module simplifies customer service through efficient ticketing, request management, and contract handling.
                    </p>
                    <ul className="list-disc pl-6">
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Introduction & Scope:</strong> Overview of post-sales support objectives.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Service Ticket Creation:</strong> Log and manage customer issues efficiently.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Service Request Management:</strong> Track and resolve customer requests.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Ticket Details & Flowchart:</strong> Detailed view of each service request's lifecycle.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Service Contract Management:</strong> Create and track service agreements.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Mobile Access & Location Tracking:</strong> Monitor field service activity in real-time.</li>
                      <li><strong style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: '#444',
                        fontWeight: 'bold'
                      }}>Testing & Validation:</strong> Ensure accurate implementation and error-free operations.</li>
                    </ul>
                  </section>
                  <br />
                </div>

              ) : (
                <div id="area-search">
                  {showModuleBox && (
                    <div className="module-box-container">
                      {currentSubModules.map((subModule, index) => (
                        <div
                          key={index}
                          className="module-box"
                          onClick={() => handleSubModuleClick(subModule)}
                        >
                          <h2>{subModule.name}</h2>
                        </div>
                      ))}
                    </div>
                  )}
                  {showTopics && (
                    <div className="topics-container">
                      {noResultsFound ? (
                        <div className="no-results-prompt">
                          <p>No results found for "{searchTerm}". Please try another search term.</p>
                        </div>
                      ) : searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                          <div
                            key={index}
                            className="topic-box"
                            onClick={() => handleTopicClick(result.topic.path)}
                          >
                            <h3>{result.topic.name}</h3>
                            <p>Found in: {result.name}</p>
                          </div>
                        ))
                      ) : (
                        getCurrentSubModuleTopics().map((topic, index) => (
                          <div
                            key={index}
                            className="topic-box"
                            onClick={() => handleTopicClick(topic.path)}
                          >
                            <h3>{topic.name}</h3>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                  {!showModuleBox && !showTopics && (
                    <div>
                      <button className="back-button" onClick={handleBackClick}>
                        ← Back to Topics
                      </button>
                      <Outlet />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;