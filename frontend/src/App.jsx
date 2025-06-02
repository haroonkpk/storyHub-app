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

function App() {
  const { authUser, checkingAuth, isCheckingAuth } = useAuthStore();
  const { theme} = useThemeStore();


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
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={true} />
      <Footer />
    </div>
  );
}

export default App;
