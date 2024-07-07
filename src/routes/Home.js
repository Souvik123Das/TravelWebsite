import Navbar1 from "../components/Navbar1";
import Hero1 from "../components/Hero1";
import Destination from "../components/Destination";
import Trip from "../components/trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar1 />
      <Hero1
        cName="hero"
        Heroimg="https://i.pinimg.com/736x/0a/4c/5c/0a4c5c16b1627b60514db03c8d4878b3.jpg"
        title="Journey starts from here"
        text="Where do you want to go?"
        buttonText="Explore now"
        url="/"
        btnCLass="show"
      />
      <Destination />
      <Trip />

      <Footer />
    </>
  );
}
export default Home;
