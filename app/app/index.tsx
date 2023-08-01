import Navbar from "./components/Navbar.tsx"
import { signal } from "@preact/signals"
import { useEffect, useState } from "preact/hooks"
import { type WordData } from "~/types/dict.ts"

export default () => {
  const [indexes, setIndexes] = useState<{
    id: string
  }[]>([])
  const [wordDatas, setWordDatas] = useState<WordData[]>([])
  useEffect(() => {
    ;(async () => {
      const indexesApiResult = await fetch("/api/dict/get-indexes").then(res => res.json())
      setIndexes(indexesApiResult)

      const wordDatasTmp: WordData[] = []
      for (const index of indexesApiResult) {
        const wordData: WordData = await fetch(`/api/dict/get-data-from-word?id=${index.id}`).then(res => res.json())
        wordDatasTmp.push(wordData)
        setWordDatas([...wordDatasTmp])
      }
    })()

  }, [])
  return <>
    <div>
      <div>This is app</div>
      <div class="mx-10">
        <div class="text-3xl text-center">広辞深</div>
        <div>
          {
            wordDatas.map(wordData => {
              let hinshiTypeAbbr = ""
              switch (wordData.hinshi.name) {
                case '固有名詞':
                  hinshiTypeAbbr = "固名"
                  break
                case '動詞':
                  hinshiTypeAbbr = "動"
                  break
                case '普通名詞':
                  hinshiTypeAbbr = "名"
                  break
                default:
                  hinshiTypeAbbr = "無"
              }
              wordData.hinshi.type
              return <div class="my-4">
                <div>
                  <span><b>{ wordData.read }</b></span>
                  <span><b>【{ wordData.kanji }】</b></span>
                  <span>/ { wordData.title }</span>
                  <span>≪{`${hinshiTypeAbbr}`}≫</span>
                </div>
                <div class="indent-4">
                  {
                    wordData.explanations.map((explanation, index) => {
                      return <div>
                        <div>
                          <div class="rounded-full border w-4 h-4 border-black flex justify-center items-center">
                            <div>{ index + 1 }</div>
                          </div>
                        </div>
                        <div class="indent-4">
                          <div>{ explanation.body }</div>
                          {
                            explanation.examples.length !== 0 ? (<div>
                              <div>例文:</div>
                              <ul class="list-disc">
                                { explanation.examples.map(example => {
                                  return <li>
                                    「{ example }」
                                  </li>
                                })}
                              </ul>
                            </div>) : null
                          }
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
    <div>
      <Navbar />
    </div>
  </>
}
