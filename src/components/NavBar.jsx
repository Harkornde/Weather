import UnitsDropdown from "./UnitsDropdown";

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 bg-[#03012d] w-9/10 md:w-8/10 fixed top-0 left-1/2 -translate-x-1/2 z-50 rounded-b-lg shadow-lg">
        {/* Logo section */}
        <div>
          <img
            className="w-40 md:w-49"
            src="assets/images/logo.svg"
            alt="logo"
          />
        </div>

        {/* Dropdown */}
        <UnitsDropdown />
      </div>
    </>
  );
}

export default NavBar;
