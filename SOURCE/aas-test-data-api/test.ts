import { readdir } from "node:fs/promises";

const files = await readdir('./models')
const jsonArray: any[] = []

for await (const fileName of files) {
    const file = Bun.file(`./models/${fileName}`)
    const json = await file.json()
    jsonArray.push(json)
}