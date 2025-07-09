import HeroSection from "../../components/HeroSection/HeroSection";
import SearchFilterBar from "../../components/SearchFilterBar";
import Navbar from "../../components/Header/Navbar/Navbar.jsx";

const Home = () => {
  return (
    <>
      <header><Navbar /></header>
      <HeroSection />
      <SearchFilterBar />
    </>
  );
};

export default Home;
