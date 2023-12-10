import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Searchbar from "./Components/searchbar/Searchbar";

const App = () => {

  return (
    <div className="Background">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="App">
          <div className="search-bar-container">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
