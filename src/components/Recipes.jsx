import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Spinner from "../common/Spinner";
import Navbar from "../common/Navbar";
import MenuCard from "../common/MenuCard";
import RecipeCard from "./RecipeCard";
import { toast } from "react-toast";
import Footer from "./Footer";

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

  const handleAddToFavorite = (id) => {
    console.log(id);
    toast.success("Recipe added to favorites");
  }

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
      <div className=" w-full my-6 bg-green-400 relative">
        <img
          src={chef?.image.large}
          alt="chef poster image"
          className="bg-gray-100 lg:bg-opacity-5 opacity-85  object-cover lg:object-contain w-full min-h-[250px]"
        />
        <div className="absolute inset-0 flex flex-col items-left text-white justify-end lg:justify-center gap-4 px-4 py-4 lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl font-extrabold">{chef?.name}</h1>
          <p className="text-sm lg:text-base leading-tight">
            {chef?.description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 lg:gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} handleAddToFavorite={handleAddToFavorite} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
