import { useQuery } from "@tanstack/react-query";
import getCharacters from "./services/api";
import { useState } from "react";
import "./index.css";
import Header from "./header/header";
import Filtro from "./filtro/filtro"
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "./redux/actions";
import ResultadosPesquisa from "./pages/ResultadosPesquisa";
import Favoritos from "./pages/favoritos";
//import Routes from "./routes/routes";


function App() {

  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);
  const handleSearch = (resultados) => {
    setResultadosPesquisa(resultados);
  };


  const [page, setPage] = useState(1); // Adicione essa linha para declarar e inicializar a variável page
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const handleToggleFavorite = (character) => {
        dispatch(toggleFavorite(character));



  };

  const { data, isFetching, isError } = useQuery(["@characteres", page], () =>
    getCharacters(page)
  );

  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Erro ao buscar dados</p>;
  }

  const displayedCharacters = data.results;

  return (
    <>
      <Header />
      {/* <Routes/> */}
      
      <Filtro personagens={displayedCharacters} onSearch={handleSearch} />
      {resultadosPesquisa.length > 0 && (
        <ResultadosPesquisa resultados={resultadosPesquisa} />
      )} 

<h1 className="text-5xl p-9 text-center font-custom">
  Rick and Morty
</h1>
<ul className="grid grid-cols-4 gap-4 m-2">
  {displayedCharacters.map((character) => (
    <div className="border-solid border-2 border-sky-500 p-3 bg-slate-900" key={character.id}>
      <li className="flex items-start">
        <img src={character.image} width={200} alt={character.name} className="mr-4" />
        <div className="flex flex-col justify-between">
          <div className="text-white">
            <h3 className="text-xl font-bold">{character.name}</h3>
            <h3
              className={
                character.status === 'Alive'
                  ? 'bg-green-500'
                  : character.status === 'Dead'
                  ? 'bg-red-500'
                  : ''
              }
            >
              {character.status}
            </h3>
            <h3>{character.species}</h3>
          </div>
        </div>
        <button onClick={() => handleToggleFavorite(character)} className="self-end">
          {favorites.some((fav) => fav.id === character.id) ? '❤️' : '🤍'}
        </button>
      </li>
    </div>
  ))}
</ul>

<div className="flex items-center justify-center space-x-4">
  <select
    className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={(e) => setPage(Number(e.target.value))}
  >
    {Array.from({ length: data.info.pages }).map((value, index) => (
      <option value={index} key={index}>
        {index}
      </option>
    ))}
  </select>

  <button
    className={`${
      page < 2 ? 'bg-gray-300 cursor-not-allowed' : 'bg-slate-300 hover:bg-slate-400'
    } rounded-md px-5 py-2`}
    disabled={page < 2}
    onClick={() => setPage((previous) => previous - 1)}
  >
    Anterior
  </button>

  <h3 className="pt-3">Página atual: {page}</h3>

  <button
    className={`${
      page > data.info.pages - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-slate-300 hover:bg-slate-400'
    } rounded-md px-5 py-2`}
    disabled={page > data.info.pages - 1}
    onClick={() => setPage((previous) => previous + 1)}
  >
    Próxima
  </button>
</div>
 
       <Favoritos />
         
     
    </>
  );
}

export default App;