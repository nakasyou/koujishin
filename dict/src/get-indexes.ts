import { expandGlob } from "$std/fs/mod.ts"

export async function *getIndexes() {
  for await (const entry of expandGlob('./dict/data/**/index.yaml')) {
    yield entry
  }
}
