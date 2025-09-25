import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Events from "./pages/Events"; // Uncomment later if needed

import "./App.scss";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Navbar is sticky at top */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
