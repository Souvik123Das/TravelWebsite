import Navbar1 from "../components/Navbar1";
import Hero1 from "../components/Hero1";
import AboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";
import About1 from "../components/About1";

function About() {
  return (
    <>
      <Navbar1 />
      <Hero1 cName="hero" Heroimg={AboutImg} title="About" btnCLass="hide" />
      <About1 />
      <Footer />
    </>
  );
}
export default About;
