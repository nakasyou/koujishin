import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>広辞深</title>
      </Head>
      <main class="min-h-screen">
        <div class="text-center">
          <img
            src="/koujishin.svg"
            alt="Logo"
            class="text-center mx-auto"
          />
        </div>
        <div class="mx-10">
          <div>
            広辞深は、Webをベースにした電子辞書です。
            <div>
              <div class="text-2xl">Concepts</div>
              <div class="ml-5">
                <div>
                  <div class="text-xl">OSS</div>
                  <div>
                    広辞深は、オープンソースソフトウェアとして開発されています。
                    辞書データもオープンソースです。
                    自由で開かれた電子辞書を目指します。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
