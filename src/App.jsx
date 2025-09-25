import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.scss";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/VSEvents-Client">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
