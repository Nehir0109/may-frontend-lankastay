
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchFilterBar from "../../components/SearchFilterBar";
import Navbar from "../../components/Header/Navbar/Navbar.jsx";
import Register from "../../components/Register/Register.jsx";
import Footer from "../../components/Footer/Footer.jsx" ;
import Booking from "../../components/Booking"; // ✅ sadece klasör adı

const Home = () => {
  return (
    <>
      <header><Navbar /></header>
      <HeroSection />
      <SearchFilterBar />
      <Footer/>
       <div style={{ padding: "40px" }}>
      <SearchFilterBar />
      <Booking price="$200" />
    </div>
    </>
  );
};

export default Home;
