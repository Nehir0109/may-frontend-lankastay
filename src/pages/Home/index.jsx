import HeroSection from "../../components/HeroSection/HeroSection";
import SearchFilterBar from "../../components/SearchFilterBar";
import Navbar from "../../components/Header/Navbar/Navbar.jsx";
import Register from "../../components/Register/Register.jsx";

const Home = () => {
  return (
    <>
      <header><Navbar /></header>
      <HeroSection />
      <SearchFilterBar />
      <Register />
    </>
  );
};

export default Home;
