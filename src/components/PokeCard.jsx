import axios from "axios";
import { useEffect, useState } from "react";

const PokeCard = ({ url, name }) => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetchPokeDetailData();
  }, []);

  const fetchPokeDetailData = async () => {
    try {
      const response = await axios.get(url);
      const pokemonData = formatPokemonData(response.data);
      setPokemon(pokemonData);
    } catch (err) {
      console.log(err);
    }
  };

  const formatPokemonData = (params) => {
    const { id, types, name } = params;
    const PokeData = {
      id,
      name,
      type: types[0].type.name,
    };
    return PokeData;
  };

  return <div>Pokemon</div>;
};

export default PokeCard;
