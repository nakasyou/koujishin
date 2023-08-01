import { getIndexes } from "~/dict/mod.ts"
import { HandlerContext } from "$fresh/server.ts"

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const result = []
  for await (const name of getIndexes()) {
    result.push(name)
  }
  return new Response(JSON.stringify(result))
}
