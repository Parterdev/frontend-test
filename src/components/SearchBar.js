import axios from 'axios';
import React, { useState } from 'react';
import Results from './Results';

//Definimos la constante principal de mi componente
const SearchBar = () => {
  //Utilizamos el use state para el cambio de estado del componente input
  const [searchInput, setSearchInput] = useState('Parterdev');
  //Por defecto, el array en vacio
  const [repos, setRepos] = useState([]);

  //Constante de escucha y recibimiento de data del input
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  //Constante para seteo y log de data post => button action
  const handleClick = async () => {
    //Usamos axios para el llamado al API de Github
    console.log(searchInput);

    try {
      //Lllamada al API y uso de interpolacion de string para concatenar el valor del input
      const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
      setRepos(result);
    }catch(err) {
      console.log(err);
    }

  };

  //console.warn(repos);

  return (
  <> 
  {/* <div>
    <input 
      type="text"
      placeholder="Github profile name"
      value={searchInput} 
      onChange={handleChange} 
    />
    <button
      className="btn btn-blue btn-blue:hover" 
      onClick={handleClick}>Buscar</button>
  </div> */}
  <div className="m-4 flex justify-center items-center">
    	<input 
        className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Perfil en Github..."
        value={searchInput} 
        onChange={handleChange} 
      />
		  <button 
        className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
        onClick={handleClick}>Buscar
      </button>
  </div>
  <Results repos={repos}/>
  </>
  );
};

export default SearchBar;

//Fetch de la data de Github user profile (con Axios)


