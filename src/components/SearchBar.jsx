import UnitItem from "./UnitItem";

function SearchBar() {
  return (
    <>
      {/* Today's weather */}
      <div className="mt-18">
        <h1 className="p-10 text-5xl font-bold text-center">
          How's the sky looking today?
        </h1>

        {/* Creating the search input and button */}
        <div>
          <input type="text" className="border" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
