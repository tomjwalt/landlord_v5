import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Searchbar from "./Components/searchbar/Searchbar";
import { Property } from "../SUPA_BASS/types";

const App = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  
  return (
    <>
      <Navbar setProperties={setProperties} />
      {properties.length === 0 ? (
        <div className="Background">
          <div className="App">
            <div className="search-bar-container">
              <Searchbar setProperties={setProperties} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {properties &&
            properties.map((property, index) => {
              return <div key={index}>{property.property_name}</div>;
            })}
        </div>
      )}
    </>
  );
};

export default App;
