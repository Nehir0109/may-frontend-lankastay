import HeroSection from "../../components/HeroSection/HeroSection";
import SearchFilterBar from "../../components/SearchFilterBar";
import Navbar from "../../components/Header/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <HeroSection />
      <SearchFilterBar />
      <Footer />
      <div style={{ padding: "40px" }}>
        <SearchFilterBar />
      </div>
    </>
  );
};

export default Home;
