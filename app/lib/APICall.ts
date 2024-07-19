export async function getPokemons() {
    const base_url = "https://pokeapi.co/api/v2/";
    const res = await fetch(base_url + "pokemon?limit=20&offset=0", {
        cache: "no-store",
    });
    const data = await res.json();
    return data.results;
}

export async function getPokemonSprite(url: string) {
    const res = await fetch(url, {
        cache: "no-store",
    });
    const data = await res.json();
    return data.sprites.front_default;
}

export async function getPokemonTypes(url: string) {
    const res = await fetch(url, {
        cache: "no-store",
    });
    const data = await res.json();

    return data.types;
}
