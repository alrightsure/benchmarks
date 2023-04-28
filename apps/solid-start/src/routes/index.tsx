import { createServerData$ } from "solid-start/server";
import { useRouteData } from "solid-start";
import { For } from "solid-js";

interface Pokemon {
    name: string;
    url: string;
}

export function routeData() {
    return createServerData$(async () => {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const { results } = (await resp.json()) as { results: Pokemon[] };
        return results;
    });
}
const Home = () => {
    const records = useRouteData<typeof routeData>();

    return (
        <main class="flex min-h-screen flex-col items-center justify-between p-24">
            <div class="flex flex-col items-center justify-center space-y-4">
                <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Solid Start</h1>
                <table>
                    <thead class="border-b-2">
                        <tr>
                            <td>Name</td>
                            <td>URL</td>
                        </tr>
                    </thead>
                    <tbody>
                        <For each={records()}>
                            {record => (
                                <tr>
                                    <td>{record.name}</td>
                                    <td>{record.url}</td>
                                </tr>
                            )}
                        </For>
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Home;
