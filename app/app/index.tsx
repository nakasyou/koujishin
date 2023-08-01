import Navbar from "./components/Navbar.tsx"
import { signal } from "@preact/signals"
import { useEffect, useState } from "preact/hooks"
import { type WordData } from "~/types/dict.ts"

export default () => {
  const [indexes, setIndexes] = useState<{
    name: string
  }[]>([])
  const [wordDatas, setWordDatas] = useState<WordData[]>([])
  useEffect(() => {
    ;(async () => {
      const indexesApiResult = await fetch("/api/dict/get-indexes").then(res => res.json())
      setIndexes(indexesApiResult)

      const wordDatasTmp: WordData[] = []
      for (const index of indexesApiResult) {
        const wordData: WordData = await fetch(`/api/dict/get-data-from-word/${index.name}`).then(res => res.json())
        wordDatasTmp.push(wordData)
        setWordDatas([...wordDatasTmp])
      }
    })()

  }, [])
  return <>
    <div>
      <div>This is app</div>
      <div>
        <div class="text-3xl text-center">広辞深</div>
        <div>
          {
            wordDatas.map(wordData => {
              return <div>
                <div>
                  <span><b>{ wordData.title }</b></span>
                  <span><b>【{ wordData.kanji }】</b></span>
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
