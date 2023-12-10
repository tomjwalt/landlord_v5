import {useState} from 'react';
import './SearchBar.css';
import {FaSearch} from "react-icons/fa";
import supabase from "../../../SUPA_BASS/SUPABASS"

export const Searchbar = () => {
  const [input, setInput] = useState("");

  const fetchData = async (value: string) => {
    let {data} = await supabase.from('properties').select().like("property_name", `${value}%`)
    if(data){
      console.log(data);
      
    }

  }

  const handleChange = (value: string) => {
    setInput(value);
  }

  const onSearch = async () => {
     await fetchData(input);
  }
    return (
    <div className='input-wrapper'>
      <input placeholder='Enter a Location...' value={input} onChange={(e) => handleChange(e.target.value)}/>
      <FaSearch onClick={()=> onSearch()} id='search-icon'/>
    </div>

  )
}

export default Searchbar
