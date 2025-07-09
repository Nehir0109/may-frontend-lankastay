import SearchFilterBar from "../../components/SearchFilterBar";
import Booking from "../../components/Booking"; // ✅ sadece klasör adı

const Home = () => {
  return (
    <div style={{ padding: "40px" }}>
      <SearchFilterBar />
      <Booking price="$200" />
    </div>
  );
};

export default Home;
