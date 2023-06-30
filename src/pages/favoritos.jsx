import React from "react";
import { useSelector } from "react-redux";

function Favoritos() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favoritos:</h2>
      <ul className="grid grid-cols-4 gap-4">
        {favorites.map((favorite) => (
          <li key={favorite.id} className="flex flex-col items-center">
            <img src={favorite.image} width={200} alt={favorite.name} className="mb-2" />
            <span className="text-center">{favorite.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;