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
  read: string
  kanji: string
  title: string
  explanations: Explanation[]
  /**
   * 品詞データ
   */
  hinshi: {
    /**
     * 品詞の種類
     */
    name: "固有名詞" | "動詞"
    /**
     * 品詞の活用の段
     * @example
     * - サ行で活用 → サ行
     */
    conjugation?: "カ" | "サ"
    /**
     * 自動詞か他動詞か
     */
    isIntransitiveVerb?: boolean
  }
}

export interface WordIndex {
  name: string
}
export type WordIndexes = WordIndex[]