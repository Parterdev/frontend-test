import React from 'react';

//Definimos la constante principal de mi componente que recibira props por SearchBar
const Results = (props) => {
  const { repos } = props;
  console.log('Los repos aquí:', repos.data);

  const reposList = repos.length !== 0 ? ( 
    repos.data.map((item) => 


    <li class="p-2 hover:bg-gray-50 cursor-pointer" key={item.id}>
      {/* <img src={item.owner.avatar_url} /> */}
      <span href="#" class="inline-block rounded-full bg-white border-4 border-blue-400 p-1 text-xs font-bold mr-3"></span>
      <a class="animate-bounce" href={item.html_url} target="_blank">{item.name}</a>
    </li>)
   ) : ( 
    <li>No encontramos nada...</li>
   );

  return (
    <div class="flex items-center justify-center bg-gray-200">
      <div class="container">
        <div class="flex justify-center">
          <div class="bg-white shadow-xl rounded-lg w-full">
            <ul class="divide-y divide-gray-300">
              {reposList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Results;