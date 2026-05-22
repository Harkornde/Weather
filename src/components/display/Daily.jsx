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
      </div>
    </>
  );
}

export default Daily;
