import { useState } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import HelloPage from "./pages/HelloPage/HelloPage";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { TABS_MENU } from "./constants/TabsMenuConstant";

function App() {
  return (
    <div className="bg-primary-200">
      <Router>
        <Header tabs={TABS_MENU} />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Navigate to="/hello" />} />
            <Route path="/hello" element={<HelloPage />} />
            <Route path="/about-me" element={<HelloPage />} />
            <Route path="/projects" element={<HelloPage />} />
          </Routes>
        </MainContainer>
        <div className="d-none d-xl-block">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
