import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AuthProvider from "./context/AuthProvider";
import LandingPage from "./pages/LandingPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useState } from "react";
import PopUpModal from "./modals/PopUpModal/PopUpModal";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  return (
    <>
      <AuthProvider>
        <NavigationBar
          setOpenModal={setOpenModal}
          setActiveTab={setActiveTab}
        />
        {openModal ? (
          <PopUpModal setOpenModal={setOpenModal} activeTab={activeTab} />
        ) : (
          ""
        )}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
