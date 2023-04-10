import { createServerData$ } from "solid-start/server";
import { db } from "@acme/db";
import { records } from "@acme/db/schema";
import { useRouteData } from "solid-start";
import { For } from "solid-js";

export const routeData = () => {
    return createServerData$(async () => await db.select().from(records));
};

const Home = () => {
    const records = useRouteData<typeof routeData>();

    return (
        <main class="flex min-h-screen flex-col items-center justify-between p-24">
            <div class="flex flex-col items-center justify-center space-y-4">
                <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Solid Start</h1>
                <For each={records()}>
                    {record => (
                        <div>
                            <h2>{record.name}</h2>
                        </div>
                    )}
                </For>
            </div>
        </main>
    );
};

export default Home;
