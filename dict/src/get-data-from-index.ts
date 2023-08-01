import * as yaml from "$std/yaml/mod.ts"

export async function getDataFromIndex(id: string) {
  let index = ""
  const [read, kanji] = id.split("/")
  if (read.length === 1) {
    index = `${read[0]}/${read}/${kanji}`
  } else {
    index = `${read[0]}/${read[1]}/${read}/${kanji}`
  }
  const yamlData = await Deno.readTextFile(`./dict/data/${index}/index.yaml`)
  const data = yaml.parse(yamlData)
  return data
}
