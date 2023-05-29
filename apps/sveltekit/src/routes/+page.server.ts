import type { PageServerLoad } from "./$types";

interface Pokemon {
    name: string;
    url: string;
}

export const load = (async () => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const { results } = (await resp.json()) as { results: Pokemon[] };
    
    return { pokemon: [...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results] };
}) satisfies PageServerLoad;
