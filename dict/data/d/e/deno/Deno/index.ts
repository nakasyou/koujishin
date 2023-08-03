import { defineWordData } from "~/types/dict.ts"

export default defineWordData({
  read: "deno",
  kanji: "でぃの",
  title: "Deno",
  parts: [
    {
      hinshis: [{
        type: "固有名詞"
      }],
      meanings: [
        {
          body: "V8 JavaScript Engineに基づき、Rustで作られた、JavaScriptやTypeScriptのランタイム環境。",
          examples: [],
          images: [
            {
              alt: "Denoのロゴ",
              path: "logo.svg",
              license: "MIT",
            }
          ]
        }
      ]
    }
  ]
})