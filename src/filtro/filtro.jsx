import React, { useState } from "react";

function Filtro({ personagens, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const results = personagens.filter((personagem) =>
      personagem.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
    onSearch(results);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <input
        type="text"
        placeholder="Pesquisar personagens"
        value={searchTerm}
        onChange={handleSearch}
        className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {searchTerm.length > 0 && searchResults.length === 0 && (
        <p>Nenhum resultado encontrado.</p>
      )}

      {searchResults.length > 0 && (
        <ul className="mt-4">
          {searchResults.map((personagem) => (
            <li key={personagem.id} className="text-gray-800 mb-2">
              {personagem.name}
            </li>
          ))}
        </ul>
      )}
    </div>
   
  );
}

export default Filtro;