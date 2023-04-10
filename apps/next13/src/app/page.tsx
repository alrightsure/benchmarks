import { db } from "@acme/db";
import { records } from "@acme/db/schema";

export const revalidate = 0;

const getRecords = async () => {
    return await db.select().from(records);
};

const Home = async () => {
    const startTime = new Date();
    const records = await getRecords();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Next.js 13</h1>
                <h3>Seconds to load: {new Date().getTime() - startTime.getTime() / 1000}</h3>
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
