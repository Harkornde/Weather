import Daily from "./Daily";
import Hourly from "./Hourly";

function Display() {
  return (
    <>
      <div className="md:w-9/10 m-auto h-10 mt-6">
        <Daily />
        <Hourly />
      </div>
    </>
  );
}

export default Display;
