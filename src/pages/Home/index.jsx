import HeroSection from "../../components/HeroSection/HeroSection";
import SearchFilterBar from "../../components/SearchFilterBar";
import Navbar from "../../components/Header/Navbar/Navbar.jsx";
import BookingCriteria from "../../components/BookingCriteria/BookingCriteria.jsx";
import { useState } from 'react';

const Home = () => {
  const [bookingData, setBookingData] = useState(null);
  return (
    <>
      <header><Navbar /></header>
      <BookingCriteria onChange={(data) => setBookingData(data)} />
    </>
  );
};

export default Home;
