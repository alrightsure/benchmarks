import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface Pokemon {
    name: string;
    url: string;
}

export const useGetPokemon = routeLoader$(async () => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const { results } = (await resp.json()) as { results: Pokemon[] };
    return [...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results];
});

export default component$(() => {
    const records = useGetPokemon();

    return (
        <main class="flex min-h-screen flex-col items-center justify-between p-24">
            <div class="flex flex-col items-center justify-center space-y-4">
                <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Qwik</h1>
                <table>
                    <thead class="border-b-2">
                        <tr>
                            <td>Name</td>
                            <td>URL</td>
                        </tr>
                    </thead>
                    <tbody>
                        {records.value.map((record, i) => (
                            <tr key={i}>
                                <td>{record.name}</td>
                                <td>{record.url}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
});
