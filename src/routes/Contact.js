import Navbar1 from "../components/Navbar1";
import Hero1 from "../components/Hero1";
import ContactImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import Contact1 from "../components/Contact1";

function Contact() {
  return (
    <>
      <Navbar1 />
      <Hero1
        cName="hero"
        Heroimg={ContactImg}
        title="Contact us"
        btnCLass="hide"
      />
      <Contact1 />
      <Footer />
    </>
  );
}
export default Contact;
