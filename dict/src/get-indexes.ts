import { expandGlob } from "$std/fs/mod.ts"

export async function *getIndexes() {
  for await (const entry of expandGlob('./dict/data/**/index.ts')) {
    const pathSplited = entry.path.split("/")
    yield {
      id: pathSplited.at(-3) + "/" + pathSplited.at(-2)
    }
  }
}
