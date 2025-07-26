import HeroSection from "../../components/HeroSection/HeroSection";
import SearchFilterBar from "../../components/SearchFilterBar";
import Navbar from "../../components/Header/Navbar/Navbar.jsx";
import MostPicked from "../../components/MostPicked/MostPicked";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <HeroSection />
      <SearchFilterBar />
      <MostPicked />
    </>
  );
};

export default Home;
