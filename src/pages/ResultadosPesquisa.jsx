import React from "react";

function ResultadosPesquisa({ resultados }) {

  
  const pesquisaRealizada = resultados !== null; // Verifica se a pesquisa foi realizada


  return (
    <div>
      {pesquisaRealizada && resultados.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Resultados da Pesquisa:</h2>
          <ul className="grid grid-cols-4 gap-4">
            {resultados.map((personagem) => (
              <li key={personagem.id} className="flex items-center w-100 bg-green-900">
                <img
                  src={personagem.image}
                  alt={personagem.name}
                  className="w-48 bg-white"
                />
                <span className="text-white p-4">{personagem.name}</span>
               
              </li>
              
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResultadosPesquisa;