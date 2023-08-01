/**
 * 意味一つにつきこれ一つ
 */
export interface Explanation {
  /**
   * 用語の例文
   */
  examples: string[]
  /**
   * その意味の画像
   */
  images: {
    /**
     * 画像の簡易的な説明
     */
    alt: string
    /**
     * 画像のパス
     */
    path: string
    /**
     * ライセンス
     */
    license: "MIT" | "CC0" | string
  }[]
  /**
   * 説明文
   */
  body: string
}
export interface WordData {
  title: string
  kanji: string
  raw: string
  explanations: Explanation[]
}

export interface WordIndex {
  name: string
}
export type WordIndexes = WordIndex[]