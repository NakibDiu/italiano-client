import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs/Chefs";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const chefsData = useLoaderData();
  const chefs = chefsData.chefs;

  return (
    <div>
      <Header />
      <Chefs chefs={chefs} />
      <Footer />
    </div>
  );
};

export default Home;
