import { getDataFromIndex } from "~/dict/mod.ts"
import { HandlerContext } from "$fresh/server.ts"

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
  const url: URL = new URL(req.url)
  const id = url.searchParams.get("id")
  const result = await getDataFromIndex(id)
  return new Response(JSON.stringify(result))
}
