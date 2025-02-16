import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homePage";
import Footer from "./component/footer";
import MainContent from "./component/mainContent"; // Example default page
import Navbar from "./component/Navbar";
import PricingPage from "./pages/pricingPage";
import NotFound from "./pages/notFound";
import TeamPage from "./pages/team";
import EnterprisePage from "./pages/enterpriceSection";
import PrivacyCommitment from "./component/privacySection";
import Chatbot from "./chatbot/chat";
import Download from "./pages/downloadPage";
// import AnotherPage from "./pages/anotherPage"; // Example new page

function App() {
  return (
    <div className="bg-black">
      <Router>
        <Navbar />
        <Routes>
          {/* HomePage layout manages Sidebar + Navbar */}
          <Route path="/" element={<HomePage />}>
            {/* Default content inside Outlet */}
            <Route index element={<MainContent />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="*" element={<NotFound />} />{" "}
            <Route path="/team" element={<TeamPage />} />{" "}
            <Route path="/enterprise" element={<EnterprisePage />} />{" "}
            <Route path="/privacy" element={<PrivacyCommitment />} />
            <Route path="/chat" element={<Chatbot />} />
            <Route path="/download" element={<Download />} />
            {/* Catch-All for Unknown URLs */}
            {/* <Route path="another" element={<AnotherPage />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-All for Unknown URLs */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
