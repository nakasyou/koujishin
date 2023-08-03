// 形容動詞とかの概念が英語にないので、動詞もVerbとせずに、Doushiとする

interface HinshiBase {
  /**
   * 品詞の種類
   */
  type: "普通名詞" | "固有名詞" | "数量詞" | "動詞" | "形容詞" | "形容動詞"
}
interface Doushi extends HinshiBase {
  type: "動詞"
  /**
   * 活用の行。
   * @remarks
   * 「信じる」はザ行上一段活用。よって「ザ」になる。
   */
  conjugationColumn: "ア" | "カ" | "ガ" | "サ" | "ザ" | "ワ" // めんどくさいので随時追加
  /**
   * 活用の段。
   * @remarks
   * 「信じる」はザ行上一段活用。よって「上一段」になる。
   */
  conjugationType: "五段" | "上一段" | "下一段"
  /**
   * 自動詞か他動詞か。中学文法で習ったはず
   */
  jitaDoushi: "自" | "他"
}
interface Meishi extends HinshiBase {
  type: "普通名詞" | "固有名詞" | "数量詞"
}
interface Keiyodoushi extends HinshiBase {
  type: "形容動詞",
  /**
   * ダ活用とからしい。私はまだ習っていないのでよくわからない。でも一応入れる
   */
  conjugationType: "ダ"
}
interface Keiyoushi extends HinshiBase {
  type: "形容詞"
}
export type Hinshi =
  (
    Doushi |
    Meishi |
    Keiyoushi |
    Keiyodoushi
  ) 
  & HinshiBase