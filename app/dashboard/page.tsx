import React from "react";
import Header from "../ui/dashboard/header";
import Searchbar from "../ui/dashboard/searchbar";
import PokeCard from "../ui/dashboard/pokeCard";
import { getPokemons, getPokemonSprite } from "../lib/APICall";

const Dashbaord = async () => {
    const pokemonData = await getPokemons();
    return (
        <div className="grid grid-cols-1 gap-2">
            <Header />
            <Searchbar />
            <div className="grid grid-cols-2 gap-3 mt-2 pb-4 md:grid-cols-3 lg:grid-cols-4">
                {pokemonData.map((pokemon: any, index: number) => (
                    <PokeCard
                        key={index}
                        number={index}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashbaord;
