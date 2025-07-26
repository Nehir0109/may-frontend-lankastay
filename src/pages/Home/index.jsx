import TreasureToChoose from "../../components/TreasureChoose/TreasureToChoose.jsx";
import useData from "../../hooks/useData.js";


const Home = () => {

    const {data} = useData("hotels");

  return (
    <>
      <h1>Home Page</h1>
        <TreasureToChoose
        choices={data ? data : []}
        />
    </>
  );
};

export default Home;