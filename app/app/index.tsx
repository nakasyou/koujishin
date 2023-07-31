import Navbar from "./components/Navbar.tsx"
import { signal } from "@preact/signals"
import { useEffect, useState } from "preact/hooks"

export default () => {
  const [indexes, setIndexes] = useState<{
    name: string
  }[]>([])
  useEffect(() => {
    ;(async () => {
      const indexesApiResult = await fetch("/api/dict/get-indexes").then(res => res.json())
      setIndexes(indexesApiResult)
    })()
  }, [])
  return <>
    <div>
      <div>This is app</div>
      <div>
        { JSON.stringify(indexes) }
      </div>
    </div>
    <div>
      <Navbar />
    </div>
  </>
}
