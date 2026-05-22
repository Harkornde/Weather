import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Display from "./components/display/Display";

function App() {
  return (
    <>
      <div className="w-9/10 m-auto">
        <NavBar />
        <SearchBar />
        <Display />
      </div>
    </>
  );
}

export default App;
