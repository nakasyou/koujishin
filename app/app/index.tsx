import Navbar from "./components/Navbar.tsx"
import { signal } from "@preact/signals"
import { useEffect } from "preact/hooks"

export default () => {
  const indexes = signal<{
    name: string
  }[]>([])
  useEffect(() => {
    ;(async () => {
      const indexesApiResult = await fetch("/api/dict/get-indexes").then(res => res.json())
      indexes.value = indexesApiResult
      alert(JSON.stringify(indexes.value))
    })()
  }, [])
  return <>
    <div>
      <div>This is app</div>
      <div>
        { JSON.stringify(indexes.value) }
      </div>
    </div>
    <div>
      <Navbar />
    </div>
  </>
}
