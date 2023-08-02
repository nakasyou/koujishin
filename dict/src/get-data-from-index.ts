import * as yaml from "$std/yaml/mod.ts"

export async function getDataFromIndex(id: string) {
  let index = ""
  const [read, kanji] = id.split("/")
  if (read.length === 1) {
    index = `${read[0]}/${read}/${kanji}`
  } else {
    index = `${read[0]}/${read[1]}/${read}/${kanji}`
  }
  const yamlData = await Deno.readTextFile(`./dict/data/${index}/index.ts`)
  //const data = yaml.parse(yamlData)
  const data = JSON.stringify(yamlData.match(/(?<=export default defineWordData\().*(?=\))/s))
  return data
}
