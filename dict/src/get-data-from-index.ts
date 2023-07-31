import * as yaml from "$std/yaml/mod.ts"

export async function getDataFromIndex(name: string) {
  let index = ""
  if (name.length === 1) {
    index = `${name[0]}/${name}`
  } else {
    index = `${name[0]}/${name[1]}/${name}`
  }
  const yamlData = await Deno.readTextFile(`./dict/data/${index}/index.yaml`)
  const data = yaml.parse(yamlData)
  return data
}
