import "./App.css";
import Usluge from "./pages/Usluge";
import { Routes, Route } from "react-router-dom";
import Branding from       "./pages/Branding";
import Navbar from         "./components/Navbar";
import VideoFooter from    "./components/VideoFooter";
import ScrollToTop from    "./components/ScrollToTop";
import Home from           "./pages/Home";
import Onama from          "./pages/Onama";
import Kontakt from "./pages/Kontakt";
import KreativaSadrzaj from "./pages/KreativaSadrzaj";
import CopywritingStorytelling from "./pages/CopywritingStorytelling";
import DrustveneMrezeEdukacija from "./pages/DrustveneMrezeEdukacija";
import FotografijaVideo from "./pages/FotografijaVideo";
import UXUIDizajn from "./pages/UXUIDizajn";
import LandingStranice from "./pages/LandingStranice";
import TehnickiSEO from "./pages/TehnickiSEO";
import IzradaWebStranica from "./pages/IzradaWebStranica";
import KakoRadimo from "./pages/KakoRadimo";
import Projekti from "./pages/Projekti";
import Blog from "./pages/Blog";


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
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/usluge/copywriting-storytelling" element={<CopywritingStorytelling />} />
        <Route path="/usluge/drustvene-mreze-edukacija" element={<DrustveneMrezeEdukacija />} />
        <Route path="/usluge/fotografija-video" element={<FotografijaVideo />} />
        <Route path="/usluge/ux-ui-dizajn" element={<UXUIDizajn />} />
        <Route path="/usluge/landing-stranice" element={<LandingStranice />} />
        <Route path="/usluge/tehnicki-seo" element={<TehnickiSEO />} />
        <Route path="/usluge/izrada-web-stranica" element={<IzradaWebStranica />} />
        <Route path="/kako-radimo" element={<KakoRadimo />} />
        <Route path="/projekti" element={<Projekti />} />
        <Route path="/blog" element={<Blog />} />
        
      </Routes>

      <VideoFooter />
    </>
  );
}

export default App;