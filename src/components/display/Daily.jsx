// import "assets/images/bg-today-small.svg"

function Daily() {
  return (
    <>
      <div>
        {/* Country and Weather coondition */}
        <div
          className={
            "bg-[url(assets/images/bg-today-small.svg)] w-full h-72 bg-cover rounded-3xl bg-no-repeat m-auto"
          }
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold pt-10">Capital, Country</h1>
            <p className="text-[1.125rem] text-[#C7D2FE] mt-1.5">
              Tuesday, Aug 5, 2025
            </p>
          </div>

          <div className="mt-4 flex justify-center items-center gap-6">
            <img className="w-25" src="/assets/images/icon-sunny.webp" />
            <h1 className="font-bold text-7xl">68°</h1>
          </div>
        </div>

        {/* Humidity Wind Precipitation */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-[#272541] rounded-2xl p-4">
            <p className="text-xl text-[#aeaeb7] font-[Bricolage_Grotesque]">
              Feels like
            </p>
            <h1 className="text-3xl mt-4 text-[#d5d4d9]">18°</h1>
          </div>
          <div className=" bg-[#272541] rounded-2xl p-4">
            <p className="text-xl text-[#aeaeb7] font-[Bricolage_Grotesque]">
              Humidity
            </p>
            <h1 className="text-3xl mt-4 text-[#d5d4d9]">46%</h1>
          </div>
          <div className=" bg-[#272541] rounded-2xl p-4">
            <p className="text-xl text-[#aeaeb7] font-[Bricolage_Grotesque]">
              Wind
            </p>
            <h1 className="text-3xl mt-4 text-[#d5d4d9]">14km/h</h1>
          </div>
          <div className="bg-[#272541] rounded-2xl p-4">
            <p className="text-xl text-[#aeaeb7] font-[Bricolage_Grotesque]">
              Precipitation
            </p>
            <h1 className="text-3xl mt-4 text-[#d5d4d9]">0mm</h1>
          </div>
        </div>

        {/* Daily Forecast */}
        <h1 className="mt-6 mb-4 text-xl font-bold">Daily Forecast</h1>

        <div className="grid grid-cols-3 gap-4 pb-4">
          <div className=" bg-[#272541] rounded-2xl p-4 text-center">
            <p className="text-xl">Day</p>
            <img src="assets\images\icon-drizzle.webp" />
            <div className="flex justify-between text-xl">
              <h1 className="">25°</h1>
              <h1 className="text-[#aeaeb7]">14°</h1>
            </div>
          </div>
          <div className="bg-[#272541] rounded-2xl p-4">
            <p className="">Wind </p>
            <h1 className="">14km/h</h1>
          </div>
          <div className="bg-[#272541] rounded-2xl p-4">
            <p className="">Wind</p>
            <h1 className="">14km/h</h1>
          </div>
          <div className=" bg-[#272541] rounded-2xl p-4">
            <p className="">Wind</p>
            <h1 className="">14km/h</h1>
          </div>
          <div className=" bg-[#272541] rounded-2xl p-4">
            <p className="">Wind</p>
            <h1 className="">14km/h</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Daily;
