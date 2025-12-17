import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import SoftwareDeveloper from "./pages/SoftwareDeveloper";
import ProjectDetail from "./pages/ProjectDetail";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("snap-enabled");
    } else {
      document.body.classList.remove("snap-enabled");
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sd" element={<SoftwareDeveloper />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default function App() {
  return <AppContent />;
}
