import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs/Chefs";
import Header from "./Header";

const Home = () => {
  const chefsData = useLoaderData();
  const chefs = chefsData.chefs;

  return (
    <div>
      <Header />
      <Chefs chefs={chefs} />
    </div>
  );
};

export default Home;
