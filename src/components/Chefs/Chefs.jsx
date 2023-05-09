import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
const Chefs = ({ chefs }) => {
  const navigate = useNavigate();
  return (
    <div className="py-10 lg:py-28 px-6 lg:px-8 space-y-11 lg:space-y-20">
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#252B42]">
          Chef Spotlights
        </h2>
        <p className="text-center text-sm lg:text-lg text-gray-500">
          Discover the culinary magic of Italy with our Chef Spotlights section,
          where you can meet the talented chefs who are creating some of the
          most delicious and authentic Italian dishes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chefs.map((chef) => {
          const { id, name, description, image } = chef;
          return (
            <div className="relative" key={id}>
              <LazyLoad height={"452px"}>
                <img
                  src={image.small}
                  alt={name}
                  loading="lazy"
                  className="h-[452px] w-full rounded-xl"
                />
              </LazyLoad>
              <div className="absolute inset-0 bg-gray-600 opacity-70 rounded-xl"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="text-white z-10 px-6 py-7 space-y-4">
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="text-sm leading-6 text-white mb-2">{`${description.substring(
                    0,
                    100
                  )}....`}</p>

                  <button
                    className="bg-[#23A6F0] text-white py-2 px-4 rounded-lg uppercase tracking-wider font-semibold hover:bg-[#4187af] hover:text-white transition duration-300 cursor-pointer"
                    onClick={() => navigate(`/${id}/recipes`)}
                  >
                    View Recipes
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chefs;
