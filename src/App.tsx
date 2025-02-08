import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HelloPage from "./pages/HelloPage/HelloPage";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import { TABS_MENU } from "./constants/TabsMenuConstant";
import AboutMePage from "./pages/AboutMePage/AboutMePage";

function App() {
  return (
    <div className="bg-primary-200">
      <Router>
        <Header tabs={TABS_MENU} />
        <Routes>
          <Route path="/" element={<Navigate to="/hello" />} />
          <Route path="/hello" element={<HelloPage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/projects" element={<AboutMePage />} />
        </Routes>
        <div className="d-none d-xl-block">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
