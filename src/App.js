import "./App.css";
import "./css/fonts.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/header.js";
import Footer from "./pages/footer.js";
import MainComponents from "./pages/main/mainComponents";
import MatchingComponents from "./pages/matchingInfo/matchingInfoComponents";
import InfoDetailComponents from "./pages/infoDetail/infoDetailComponents";
import ProcessComponent from "./pages/process/processComponent";
import EduProgramComponent from "./pages/eduProgram/eduProgramComponent";
import EduDetailComonents from "./pages/eduDetail/eduDetailComponents";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainComponents />} />
        <Route path="/matchingInfo" element={<MatchingComponents />} />
        <Route path="/infoDetail" element={<InfoDetailComponents />} />
        <Route path="/process" element={<ProcessComponent />} />
        <Route path="/eduProgram" element={<EduProgramComponent />} />
        <Route path="/eduDetail" element={<EduDetailComonents />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
