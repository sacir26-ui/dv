import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Naslovna from "./components/Naslovna";
import KakoRadimoLink from "./components/KakoRadimoLink";
import CreativeSection from "./components/CreativeSection";
import WebSection from "./components/WebSection";
import VideoFooter from "./components/VideoFooter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Naslovna />
      <KakoRadimoLink />
      <CreativeSection />
      <WebSection />
      <VideoFooter />
    </>
  );
}

export default App;