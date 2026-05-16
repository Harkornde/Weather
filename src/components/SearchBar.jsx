import UnitItem from "./UnitItem";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <>
      {/* Today's weather */}
      <div className="">
        <h1 className="px-8 mt-25 text-5xl font-bold text-center font-['Bricolage_Grotesque']">
          How's the sky looking today?
        </h1>

        {/* Creating the search input and button */}
        <div className="md:flex justify-center mt-10">
          <div className="flex items-center md:w-110 bg-[#272541] rounded-xl h-13 px-4 shadow-lg ring-1 ring-white/5 focus-within:ring-blue-400 focus-within:ring-2 transition-all cursor-text">
            <IoSearch className="text-gray-400 text-xl shrink-0" />
            <input
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg outline-none ml-3 h-full w-full"
              type="text"
              placeholder="Search for a place..."
              id="search"
            />
          </div>

          {/* Clicked Search Button */}
          <div>
            <button className="mt-3.5 md:mt-0 md:w-30 md:ml-3 block text-xl w-full h-13 bg-[#4455da] shadow-lg focus-within:ring-blue-400 focus-within:ring-2 rounded-xl">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
