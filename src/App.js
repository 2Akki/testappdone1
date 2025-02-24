import logo from "./logo.svg";
import "./App.css";
import SigmaBar from "./components/SigmaBar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Info from "./pages/Info.jsx";
import Spil from "./pages/Spil.jsx";

import Bioinformatik from "./components/studieretninger/Bioinformatik.jsx";
import Geoscience from "./components/studieretninger/Geoscience.jsx";
import ScienceFysik from "./components/studieretninger/ScienceFysik.jsx";
import ScienceKemi from "./components/studieretninger/ScienceKemi.jsx";
import TeknologiSamfundsfag from "./components/studieretninger/TeknologiSamfundsfag.jsx";
import TeknologiDesign from "./components/studieretninger/TeknologiDesign.jsx";
import ComputerScience from "./components/studieretninger/ComputerScience.jsx";
import ComputerScienceInformatik from "./components/studieretninger/ComputerScienceInformatik.jsx";
import Login from "./pages/Login.jsx";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { AuthProvider } from "./AuthContext.jsx";

function App() {


  return (
    <>
      <SigmaBar></SigmaBar>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/chat" element={<ProtectedRoute><Info /></ProtectedRoute>} />

        <Route path="/spil" element={<Spil />} />
        <Route path="/login" element={<Login />} />
        {/* _______________________________________________________________studeretninger */}

        <Route path="/Bioinformatik" element={<Bioinformatik />} />
        <Route path="/Geoscience" element={<Geoscience />} />
        <Route path="/ScienceFysik" element={<ScienceFysik />} />
        <Route path="/ScienceKemi" element={<ScienceKemi />} />
        <Route
          path="/TeknologiSamfundsfag"
          element={<TeknologiSamfundsfag />}
        />
        <Route path="/TeknologiDesign" element={<TeknologiDesign />} />
        <Route path="/ComputerScienceprog" element={<ComputerScience />} />
        <Route
          path="/ComputerScienceInformatik"
          element={<ComputerScienceInformatik />}
        />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
