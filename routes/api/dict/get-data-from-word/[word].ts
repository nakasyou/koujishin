import { getDataFromIndex } from "~/dict/mod.ts"
import { HandlerContext } from "$fresh/server.ts"

export const handler = async (_req: Request, ctx: HandlerContext): Promise<Response> => {
  const result = await getDataFromIndex(ctx.params.word)
  return new Response(JSON.stringify(result))
}
