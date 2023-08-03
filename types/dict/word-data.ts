import type { Hinshi } from "./hinshi.ts"

export interface WordData {
  /**
   * 読み方。インデックスになる。
   */
  read: string
  /**
   * 漢字表記
   */
  kanji: string
  /**
   * タイトル。正確な表記
   */
  title: string

  /**
   * この単語の種類別。
   * @remarks
   * 「批判」の場合、動詞と名詞の二種類あるので、動詞についてと名詞についてを書く
   */
  parts: {
    /**
     * 品詞データ
     */
    hinshi: Hinshi
    /**
     * 意味別
     */
    meanings: {
      /**
       * 説明文
       */
      body: string
      /**
       * 例文
       */
      examples: string[]
      /**
       * 画像や図
       */
      images: {
        /**
         * ファイルのパス
         */
        path: string
        /**
         * 画像の簡易的な説明
         */
        alt: string
        /**
         * ファイルのライセンス
         */
        license: "MIT" | "CC0" | string
      }[]
    }[]
  }[]
}
