import { readdir } from "node:fs/promises";

async function getFilesAsArray(): Promise<any[]> {
    const files = await readdir('./models')
    const jsonArray: any[] = []

    for await (const fileName of files) {
        const file = Bun.file(`./models/${fileName}`)
        const json = await file.json()
        jsonArray.push(json)
    }

    return jsonArray
}

Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url)
        if (url.pathname === '/testfiles') {
            return new Response(JSON.stringify(await getFilesAsArray()))
        }
        return new Response('Not Found')
    }
});

