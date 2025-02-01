import { useState } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import HelloPage from "./pages/HelloPage/HelloPage";

function App() {
  const [openedTabs, setOpenedTabs] = useState<string[]>([
    "_hello",
    "_about-me",
    "_projects",
  ]);
  const [selectedTab, setSelectedTab] = useState<string>("_hello");

  return (
    <div className="bg-primary-200">
      <Header
        openedTabs={openedTabs}
        selectedTab={selectedTab}
        onClick={(clickedTab) => setSelectedTab(clickedTab)}
      />
      <MainContainer>
        <HelloPage />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
