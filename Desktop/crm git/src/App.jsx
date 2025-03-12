import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

// Lenskart Components
import Intro from "./components/Lenskart/Intro";
import Scope from "./components/Lenskart/Scope";
import ZvolvPulling from "./components/Lenskart/ZvolvPulling";
import LeaseCreation from "./components/Lenskart/LeaseCreation";
import LeaseListing from "./components/Lenskart/LeaseListing";
import LeaseDetails from "./components/Lenskart/LeaseDetails";
import PayeeManagement from "./components/Lenskart/PayeeManagement";
import LeaseMonitoring from "./components/Lenskart/LeaseMonitoring";
import Dependencies from "./components/Lenskart/Dependencies";
import TestingValidation from "./components/Lenskart/TestingValidation";

// Pre-Sales Components
import Introduction from "./components/PreSales/Introduction";
import ScopeDocument from "./components/PreSales/ScopeDocument";
import LeadCreation from "./components/PreSales/LeadCreation";
import LeadManagement from "./components/PreSales/LeadManagement";
import LeadFlowChart from "./components/PreSales/LeadFlowChart";
import ActivityCreation from "./components/PreSales/ActivityCreation";
import ActivityHistory from "./components/PreSales/ActivityHistory";
import LeadLinkedActivities from "./components/PreSales/LeadLinkedActivities";
import OverdueActivityReport from "./components/PreSales/OverdueActivityReport";
import ActivityFlowChart from "./components/PreSales/ActivityFlowChart";
import MobileAccess from "./components/PreSales/MobileAccess";
import LocationTracking from "./components/PreSales/LocationTracking";
import NonFunctional from "./components/PreSales/NonFunctional";
import DependenciesPre from "./components/PreSales/DependenciesPre";
import TestingValidationPre from "./components/PreSales/TestingValidationPre";

// Post-Sales Components
import Introduction1 from "./components/PostSales/Introduction1";
import Scope1 from "./components/PostSales/Scope1";
import TicketCreation from "./components/PostSales/TicketCreation";
import ServiceManagement from "./components/PostSales/ServiceManagement";
import TicketDetail from "./components/PostSales/TicketDetail";
import RequestFlowChart from "./components/PostSales/RequestFlowChart";
import ContractCreation from "./components/PostSales/ContractCreation";
import ContractManagement from "./components/PostSales/ContractManagement";
import ContractFlowChart from "./components/PostSales/ContractFlowChart";
import MobileAccess1 from "./components/PostSales/MobileAccess1";
import LocationTracking1 from "./components/PostSales/LocationTracking1";
import NonFunctional1 from "./components/PostSales/NonFunctional1";
import DependenciesPost from "./components/PostSales/DependenciesPost";
import TestingValidationPost from "./components/PostSales/TestingValidationPost";

// IMM Components
import Intro3 from "./components/GateEntry/Intro3";
import Scope3 from "./components/GateEntry/Scope3";
import CheckIn from "./components/GateEntry/CheckIn";
import CheckOut from "./components/GateEntry/CheckOut";
import Pass from "./components/GateEntry/Pass";
import BoardView from "./components/GateEntry/BoardView";
import ListView from "./components/GateEntry/ListView";
import Dashboard from "./components/GateEntry/Dashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />}>
          {/* Lenskart Routes */}
          <Route path="Intro" element={<Intro />} />
          <Route path="Scope" element={<Scope />} />
          <Route path="ZvolvPulling" element={<ZvolvPulling />} />
          <Route path="LeaseCreation" element={<LeaseCreation />} />
          <Route path="LeaseListing" element={<LeaseListing />} />
          <Route path="LeaseDetails" element={<LeaseDetails />} />
          <Route path="PayeeManagement" element={<PayeeManagement />} />
          <Route path="LeaseMonitoring" element={<LeaseMonitoring />} />
          <Route path="Dependencies" element={<Dependencies />} />
          <Route path="TestingValidation" element={<TestingValidation />} />

          {/* Pre-Sales Routes */}
          <Route path="Introduction" element={<Introduction />} />
          <Route path="ScopeDocument" element={<ScopeDocument />} />
          <Route path="LeadCreation" element={<LeadCreation />} />
          <Route path="LeadManagement" element={<LeadManagement />} />
          <Route path="LeadFlowChart" element={<LeadFlowChart />} />
          <Route path="ActivityCreation" element={<ActivityCreation />} />
          <Route path="ActivityHistory" element={<ActivityHistory />} />
          <Route path="LeadLinkedActivities" element={<LeadLinkedActivities />} />
          <Route path="OverdueActivityReport" element={<OverdueActivityReport />} />
          <Route path="ActivityFlowChart" element={<ActivityFlowChart />} />
          <Route path="MobileAccess" element={<MobileAccess />} />
          <Route path="LocationTracking" element={<LocationTracking />} />
          <Route path="NonFunctional" element={<NonFunctional />} />
          <Route path="DependenciesPre" element={<DependenciesPre />} />
          <Route path="TestingValidationPre" element={<TestingValidationPre />} />

          {/* Post-Sales Routes */}
          <Route path="Introduction1" element={<Introduction1 />} />
          <Route path="Scope1" element={<Scope1 />} />
          <Route path="TicketCreation" element={<TicketCreation />} />
          <Route path="ServiceManagement" element={<ServiceManagement />} />
          <Route path="TicketDetail" element={<TicketDetail />} />
          <Route path="RequestFlowChart" element={<RequestFlowChart />} />
          <Route path="ContractCreation" element={<ContractCreation />} />
          <Route path="ContractManagement" element={<ContractManagement />} />
          <Route path="ContractFlowChart" element={<ContractFlowChart />} />
          <Route path="MobileAccess1" element={<MobileAccess1 />} />
          <Route path="LocationTracking1" element={<LocationTracking1 />} />
          <Route path="NonFunctional1" element={<NonFunctional1 />} />
          <Route path="DependenciesPost" element={<DependenciesPost />} />
          <Route path="TestingValidationPost" element={<TestingValidationPost />} />

          {/* IMM Routes */}
          <Route path="Intro3" element={<Intro3 />} />
          <Route path="Scope3" element={<Scope3 />} />
          <Route path="CheckIn" element={<CheckIn />} />
          <Route path="CheckOut" element={<CheckOut />} />
          <Route path="Pass" element={<Pass />} />
          <Route path="BoardView" element={<BoardView />} />
          <Route path="ListView" element={<ListView />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Route>

        {/* Default Redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;