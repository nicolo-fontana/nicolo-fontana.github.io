import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  const [openedTabs, setOpenedTabs] = useState<string[]>([
    "_hello",
    "_about-me",
    "_projects",
  ]);
  const [selectedTab, setSelectedTab] = useState<string>("_hello");

  return (
    <div className="main-container bg-primary-200">
      <Header
        openedTabs={openedTabs}
        selectedTab={selectedTab}
        onClick={(clickedTab) => setSelectedTab(clickedTab)}
      />
      <Home />
    </div>
  );
}

export default App;
