import { MdOutlineSettings } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 bg-[#03012d] w-9/10 md:w-8/10 fixed top-0 left-1/2 -translate-x-1/2">
          {/* Logo section */}
          <div>
            <img
              className="w-40 md:w-49"
              src="assets/images/logo.svg"
              alt="logo"
            />
          </div>

          {/* Units */}
          <div>
            <button className="flex items-center gap-1.5 bg-[#312f4b] pl-2 py-0.5 rounded-md">
              <MdOutlineSettings />
              <h>Units</h>
              <RiArrowDropDownLine size={"30px"} />
            </button>
          </div>

          {/* Dropdown */}
          <div className="absolute mr-2 p-2 right-0 top-14 bg-[#312f4b] flex flex-col w-47 rounded-md ">
            <button className="hover:border hover:p-0.5 hover:rounded-md focus:rounded-md h-9">
              <h1 className="text-left">Switch to imperial</h1>
            </button>

            {/* Building the temperature */}
            <div>
              <p className="text-sm">Temperature</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default NavBar;