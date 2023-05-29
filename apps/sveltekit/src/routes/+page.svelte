<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<main class="flex min-h-screen flex-col items-center justify-between p-24">
    <div class="flex flex-col items-center justify-center space-y-4">
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Sveltekit</h1>
        <table>
            <thead class="border-b-2">
                <tr>
                    <td>Name</td>
                    <td>URL</td>
                </tr>
            </thead>
            <tbody>
                {#each data.pokemon as record}
                    <tr>
                        <td>{record.name}</td>
                        <td>{record.url}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>
