import "./App.css";
import Usluge from "./pages/Usluge";
import { Routes, Route } from "react-router-dom";
import Branding from       "./pages/Branding";
import Navbar from         "./components/Navbar";
import VideoFooter from    "./components/VideoFooter";
import ScrollToTop from    "./components/ScrollToTop";
import Home from           "./pages/Home";
import Onama from          "./pages/Onama";
import KreativaSadrzaj from "./pages/KreativaSadrzaj";


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/usluge/kreativni-koncepti" element={<KreativaSadrzaj />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/usluge/branding" element={<Branding />} />  
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<Onama />} />
        
      </Routes>

      <VideoFooter />
    </>
  );
}

export default App;