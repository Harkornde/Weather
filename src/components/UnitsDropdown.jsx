import { useState } from "react";
import UnitItem from "./UnitItem";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function UnitsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Units */}
      <div>
        <button className="flex items-center gap-1.5 bg-[#312f4b] pl-2 py-0.5 rounded-md">
          <MdOutlineSettings />
          <h>Units</h>
          <RiArrowDropDownLine size={"30px"} />
        </button>
      </div>

      <div className="absolute mr-2 p-2 right-0 top-14 bg-[#312f4b] w-47 rounded-md ">
        <button className="hover:border hover:p-0.5 hover:rounded-md focus:rounded-md h-9">
          <h1 className="text-left">Switch to imperial</h1>
        </button>

        {/* Building the temperature */}
        <div>
          <p className="text-sm text-[#aeaeb7]">Temperature</p>
          <UnitItem label="Celsius (°C)" />
          <UnitItem label="Fahrenheit (°F)" />
        </div>

        {/* Building the Wind speed */}
        <div>
          <p className="text-sm text-[#aeaeb7]">Wind speed</p>
          <UnitItem label="km/h" />
          <UnitItem label="mph" />
        </div>

        {/* Bilding the precipitation Menu */}
        <div>
          <p className="text-sm text-[#aeaeb7]">Wind speed</p>
          <UnitItem label="Millimeters (mm)" />
          <UnitItem label="Inches (in)" />
        </div>
      </div>
    </>
  );
}

export default UnitsDropdown;
