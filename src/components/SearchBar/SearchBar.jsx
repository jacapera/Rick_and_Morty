import { useState } from 'react';
import styleSearchBar from '../SearchBar/SearchBar.module.css';
//import axios from 'axios';

export default function SearchBar(props) {
   //console.log(props)

   const [id, setId] = useState("");

   const [valorInput, setValorInput] = useState('');

   const handleChange = (event) => {
      const {value} = event.target;
      setId(value);
      setValorInput(event.target.value);
      //console.log(valorInput)
      //console.log("id: ", id);
   }

   const handleSearch = (id) => {
      props.onSearch(id);
      setValorInput("");
   }

   return (
      <div className={styleSearchBar.divPrincipalSearch}>
         <input
            className={styleSearchBar.inputSearch}
            type='text'
            name='search'
            id='search'
            value={valorInput}
            onChange={handleChange}
         />
         <button
            className={styleSearchBar.button}
            onClick={() =>handleSearch(id)}
         >Agregar</button>
         <button
            className={styleSearchBar.button}
            onClick={props.onRandom}
         >Random</button>
      </div>
   );
}
