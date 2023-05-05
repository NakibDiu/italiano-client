import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Spinner from "../common/Spinner";
import Navbar from "../common/Navbar";
import MenuCard from "../common/MenuCard";

const Recipes = () => {
  const recipes = useLoaderData();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();

  const [chef, setChef] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fetchChefs = async () => {
      setLoading(true);
      const response = await fetch(backendUrl);
      const data = await response.json();
      const chefs = data.chefs;
      setChef(chefs.find((chef) => chef.id === parseInt(id)));
      setLoading(false);
    };
    fetchChefs();
  }, []);

  console.log(chef);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      {/* header */}
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MenuCard showMenu={showMenu} setShowMenu={setShowMenu} />}
      <div className="relative w-full min-h-screen my-6">
        <img
          src={chef?.image.large}
          alt=""
          className="bg-gray-100 lg:bg-opacity-5 absolute inset-0 object-cover lg:object-contain w-full h-1/2"
        />
      </div>
      <div className="grid lg:grid-cols-2">

      </div>
    </div>
  );
};

export default Recipes;
