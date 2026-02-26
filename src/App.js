import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from         "./components/Navbar";
import VideoFooter from    "./components/VideoFooter";
import ScrollToTop from    "./components/ScrollToTop";
import Home from           "./pages/Home";
import Onama from          "./pages/Onama";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<Onama />} />
        
      </Routes>

      <VideoFooter />
    </>
  );
}

export default App;