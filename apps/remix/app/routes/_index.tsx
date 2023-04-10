import { db } from "@acme/db";
import { records } from "@acme/db/schema";
import { json, LoaderArgs } from "@vercel/remix";
import { useLoaderData } from "@remix-run/react";

export const loader = async (args: LoaderArgs) => {
    const fetchedRecords = await db.select().from(records);
    return json({ records: fetchedRecords });
};

const Home = () => {
    const { records } = useLoaderData<typeof loader>();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Remix</h1>
                {records.map(record => (
                    <div key={record.id}>
                        <h2>{record.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Home;
