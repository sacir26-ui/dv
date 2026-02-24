import Hero from "../components/Hero";
import Naslovna from "../components/Naslovna";
import KakoRadimoLink from "../components/KakoRadimoLink";
import CreativeSection from "../components/CreativeSection";
import WebSection from "../components/WebSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Naslovna />
      <KakoRadimoLink />
      <CreativeSection />
      <WebSection />
    </>
  );
}