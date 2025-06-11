import useData from "../../hooks/useData";

const Home = () => {
  const { data } = useData("hotels");
  console.log("Home Page Data:", data);
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
