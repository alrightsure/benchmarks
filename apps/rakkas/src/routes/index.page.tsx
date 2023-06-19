import { useServerSideQuery } from "rakkasjs";

interface Pokemon {
    name: string;
    url: string;
}

export default function HomePage() {
    const { data } = useServerSideQuery(async () => {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const { results } = (await resp.json()) as { results: Pokemon[] };
        return [...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results, ...results];
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Rakkas</h1>
                <table>
                    <thead className="border-b-2">
                        <tr>
                            <td>Name</td>
                            <td>URL</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((record, i) => (
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
}
