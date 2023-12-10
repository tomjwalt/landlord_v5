import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Searchbar from "./Components/searchbar/Searchbar";
import {Property} from '../SUPA_BASS/types'

const App = () => {

  const [properties, setProperties] = useState<Property[]>([])


  return (
    <div className="Background">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="App">
          <div className="search-bar-container">
            <Searchbar setProperties={setProperties}/>
          </div>
          <div>
            {properties && properties.map((property, index) => {
              return <div key={index}>
                {property.property_name}
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
