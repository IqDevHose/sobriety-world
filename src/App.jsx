import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@material-tailwind/react";
import { MyNavbar } from "./components/MyNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18next";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white">
      <I18nextProvider i18n={i18n}>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </I18nextProvider>
    </div>
  );
}

export default App;
