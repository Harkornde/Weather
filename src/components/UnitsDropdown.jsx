import UnitItem from "./UnitItem";

function UnitsDropdown() {
  return (
    <>
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
