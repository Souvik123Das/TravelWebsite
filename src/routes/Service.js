import Navbar1 from "../components/Navbar1";
import Hero1 from "../components/Hero1";
import ServiceImg from "../assets/Services.jpg";
import Footer from "../components/Footer";
import Service1 from "../components/Service1";
import Trip from "../components/trip";

function Service() {
  return (
    <>
      <Navbar1 />
      <Hero1
        cName="hero"
        Heroimg={ServiceImg}
        title="Services"
        btnCLass="hide"
      />
      <Trip />
      <hr></hr>
      <Service1 />
      <Footer />
    </>
  );
}
export default Service;
