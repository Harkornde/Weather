import { useState, useEffect, useRef } from "react";
import UnitItem from "./UnitItem";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function UnitsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [system, setSystem] = useState("Metric");
  const [units, setUnits] = useState({
    temp: "Celsius",
    wind: "km/h",
    precip: "Millimeters",
  });

  const dropdownRef = useRef(null);

// Close dropdown if clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handing Unit change.
  function handleSystemChange(newSystem) {
    setSystem(newSystem);
    if (newSystem === "Metric") {
      setUnits({ temp: "Celsius", wind: "km/h", precip: "Millimeters" });
    } else {
      setUnits({ temp: "Fahrenheit", wind: "mph", precip: "Inches" });
    }
  }

  //Switching Between Unit
  const handleUnitChange = (category, value) => {
    // const newUnits = { ...units, [category]: value };
    setUnits({ ...units, [category]: value });
    console.log(`Unit changed: ${value}`);
  };

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        {/* Units */}
        <div onClick={() => setIsOpen((isopen) => !isopen)}>
          <button className="flex items-center gap-1.5 bg-[#312f4b] pl-2 py-0.5 rounded-md">
            <MdOutlineSettings />
            <h1>Units</h1>
            <RiArrowDropDownLine
              size={"24px"}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="absolute mr-2 p-2 right-0 top-14 bg-[#312f4b] w-47 rounded-md ">
            {/* Changing to either imperial or metric */}
            <div className="flex bg-[#16152e] p-1 rounded-lg mb-4">
              <button
                onClick={() => handleSystemChange("Imperial")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded transition-all ${
                  system === "Imperial"
                    ? "bg-[#4b4870] text-white shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <h1 className="text-left">Switch to imperial</h1>
              </button>

              <button
                onClick={() => handleSystemChange("Metric")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  system === "Metric"
                    ? "bg-[#4b4870] text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Metric
              </button>
            </div>

            {/* Building the temperature */}
            <div>
              <p className="text-sm text-[#aeaeb7]">Temperature</p>
              <UnitItem
                label="Celsius (°C)"
                active={units.temp === "Celsius"}
                onClick={() => handleUnitChange("temp", "Celsius")}
              />
              <UnitItem
                label="Fahrenheit (°F)"
                active={units.temp === "Fahrenheit"}
                onClick={() => handleUnitChange("temp", "Fahrenheit")}
              />
            </div>

            {/* Building the Wind speed */}
            <div>
              <p className="text-sm text-[#aeaeb7]">Wind speed</p>
              <UnitItem
                label="km/h"
                active={units.wind === "km/h"}
                onClick={() => handleUnitChange("wind", "km/h")}
              />
              <UnitItem
                label="mph"
                active={units.wind === "mph"}
                onClick={() => handleUnitChange("wind", "mph")}
              />
            </div>

            {/* Bilding the precipitation Menu */}
            <div>
              <p className="text-sm text-[#aeaeb7]">Wind speed</p>
              <UnitItem
                label="Millimeters (mm)"
                active={units.precip === "Millimeters"}
                onClick={() => handleUnitChange("precip", "Millimeters")}
              />
              <UnitItem
                label="Inches (in)"
                active={units.precip === "Inches"}
                onClick={() => handleUnitChange("precip", "Inches")}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UnitsDropdown;
