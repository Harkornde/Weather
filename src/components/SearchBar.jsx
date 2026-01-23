import UnitItem from "./UnitItem";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <>
      {/* Today's weather */}
      <div className="mt-18">
        <h1 className="p-5 text-5xl font-bold text-center font-['Bricolage_Grotesque']">
          How's the sky looking today?
        </h1>

        {/* Creating the search input and button */}
        <div className="md:flex justify-center">
          <div className="flex items-center w-full md:w-110 bg-[#272541] rounded-xl h-13 px-4 shadow-lg ring-1 ring-white/5 focus-within:ring-blue-400 focus-within:ring-2 transition-all cursor-text">
            <IoSearch className="text-gray-400 text-xl shrink-0" />
            <input
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg outline-none ml-3 h-full w-full"
              type="text"
              placeholder="Search for a place..."
              id="search"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
