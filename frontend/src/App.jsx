import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import toast, { Toaster } from "react-hot-toast";
import { useAuthStore } from "./stores/auth.store.js";
import { useEffect, useState } from "react";
import { LoaderPinwheel } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import { useThemeStore } from "./stores/theme.store.js";
import Footer from "./components/Footer.jsx";
import { useLocation } from "react-router-dom";
import Admin from "./pages/Admin.jsx";
import StoriesPage from "./pages/StoriesPage.jsx";
import EpisodePage from "./pages/EpisodePage.jsx";
import EpisodeDetail from "./pages/EpisodeDetail.jsx";

function App() {
  const location = useLocation();
  

  const { authUser, checkingAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    checkingAuth();
  }, [checkingAuth]);

  if (isCheckingAuth)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <LoaderPinwheel className="size-10 animate-spin duration-100" />
      </div>
    );
  return (
    <div className="min-h-screen bg-base-200 relative overflow-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/stories/:typeId" element={<StoriesPage />} />
        <Route path="/episodes/:storyId" element={<EpisodePage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/admin-dashboard"
          element={authUser?.role === "admin" ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="/episode/:episodeId" element={<EpisodeDetail />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={true} />
      {!(
        location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/admin-dashboard"
      ) && <Footer />}
    </div>
  );
}

export default App;
