import HeroSection from "../../components/HeroSection/HeroSection";
import SearchFilterBar from "../../components/SearchFilterBar";
import Navbar from "../../components/Header/Navbar/Navbar.jsx";
import Register from "../../components/Register/Register.jsx";
import Footer from "../../components/Footer/Footer.jsx" ;

const Home = () => {
  return (
    <>
      <header><Navbar /></header>
      <HeroSection />
      <SearchFilterBar />
      <Footer/>
      
    </>
  );
};

export default Home;
