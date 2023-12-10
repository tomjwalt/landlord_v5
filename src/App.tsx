import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Searchbar from "./Components/searchbar/Searchbar";
import { Property } from "../SUPA_BASS/types";

const App = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  return (
    <div className="main-container">
        <Navbar />
      <div className="search-bar-container">
        <Searchbar setProperties={setProperties} />
      </div>
    </div>
  );
};

export default App;
