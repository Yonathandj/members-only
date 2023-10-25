import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/Navbar/NavBar";
import Slider from "../../components/Slider/Slider";

export default function Landingpage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Slider />
      </main>
    </>
  );
}
