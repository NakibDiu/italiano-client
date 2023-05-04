import { useState } from "react";
import heroBg from "../assets/HeroBg.jpg";
import Navbar from "../common/Navbar";
import MenuCard from "../common/MenuCard";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="h-screen lg:h-screen">
      <img src={heroBg} alt="background" className="h-full w-full relative" />
      <div className="absolute h-full  w-full bg-transparent top-0 flex flex-col items-center">
        <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
        {showMenu && <MenuCard  setShowMenu={setShowMenu} showMenu={showMenu}/>}
        <div className="flex flex-col h-full w-full lg:justify-evenly justify-around items-center">
          <h3 className="text-xl lg:text-2xl text-white font-bold">Una fetta dItalia</h3>
          <div className="space-y-6 mt-4 flex flex-col items-center animate-pulse">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white text-center">
              A Slice of Italy
            </h1>
            <button className="bg-[#23A6F0] hover:bg-[#4187af] text-white lg:p-5 px-3 py-2 text-lg rounded-lg font-bold lg:text-2xl shadow-lg">
              Dine with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
