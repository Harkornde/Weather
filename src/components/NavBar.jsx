import { MdOutlineSettings } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 bg-[#03012d] w-9/10 fixed top-0">
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
          <button className="flex items-center gap-1.5">
            <MdOutlineSettings />
            <h>Units</h>
            <RiArrowDropDownLine size={"30px"}/>
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
// padding: 8px;
//     background: red;
//     position: fixed;
//     width: 90%;
//196/40
