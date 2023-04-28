import { json, LoaderArgs } from "@vercel/remix";
import { useLoaderData } from "@remix-run/react";

interface Pokemon {
    name: string;
    url: string;
}

export const loader = async (args: LoaderArgs) => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const { results } = (await resp.json()) as { results: Pokemon[] };
    return json({ records: [...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results] });
};

const Home = () => {
    const { records } = useLoaderData<typeof loader>();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Remix</h1>
                <table>
                    <thead className="border-b-2">
                        <tr>
                            <td>Name</td>
                            <td>URL</td>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, i) => (
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
};

export default Home;
