export type CategorySlug = "sake" | "wine" | "beer" | "shochu" | "umeshu";
export type Accent = "amber" | "ruby" | "forest" | "sunset" | "plum";

export type RadarMetric = {
  label: string;
  value: number;
};

export type Fact = {
  label: string;
  value: string;
};

export type AlcoholCategory = {
  slug: CategorySlug;
  title: string;
  latinTitle: string;
  description: string;
  focus: string;
  status: "ready" | "preview";
  accent: Accent;
};

export type SakeBottle = {
  name: string;
  style: string;
  summary: string;
  notes: string;
  highlights: string[];
  facts: Fact[];
  radar: RadarMetric[];
};

export type SakeBrand = {
  category: "sake";
  slug: string;
  name: string;
  summary: string;
  story: string;
  accent: Accent;
  facts: Fact[];
  highlights: string[];
  lineup: SakeBottle[];
};

export type WineBottle = {
  name: string;
  winery: string;
  region: string;
  summary: string;
  highlights: string[];
};

export type WineCountry = {
  slug: string;
  country: string;
  region: string;
  summary: string;
  bottles: WineBottle[];
};

export type WineVariety = {
  category: "wine";
  slug: string;
  name: string;
  summary: string;
  story: string;
  accent: Accent;
  facts: Fact[];
  highlights: string[];
  radar: RadarMetric[];
  countries: WineCountry[];
};

export type CategoryCard = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  accent: Accent;
  highlights: string[];
  meta: string;
};

export const categories: AlcoholCategory[] = [
  {
    slug: "sake",
    title: "日本酒",
    latinTitle: "Sake",
    description:
      "ブランドを起点にして、その中の代表的な種類を一覧で見比べられるように整理しています。",
    focus: "ブランド → 種類",
    status: "ready",
    accent: "amber",
  },
  {
    slug: "wine",
    title: "ワイン",
    latinTitle: "Wine",
    description:
      "品種を選んだあとに、各国の傾向と具体的なワイン例を見られる構成です。",
    focus: "品種 → 国 → ワイン",
    status: "ready",
    accent: "ruby",
  },
  {
    slug: "beer",
    title: "ビール",
    latinTitle: "Beer",
    description: "スタイルごとの違いを整理する拡張枠です。",
    focus: "スタイル → 地域",
    status: "preview",
    accent: "sunset",
  },
  {
    slug: "shochu",
    title: "焼酎",
    latinTitle: "Shochu",
    description: "原料と蒸留方法を軸に追加できる構成です。",
    focus: "原料 → 造り",
    status: "preview",
    accent: "forest",
  },
  {
    slug: "umeshu",
    title: "梅酒",
    latinTitle: "Umeshu",
    description: "ベース酒や甘さの違いを整理するための枠です。",
    focus: "ベース → 味わい",
    status: "preview",
    accent: "plum",
  },
];

const radarTemplate = (values: [number, number, number, number, number]): RadarMetric[] => [
  { label: "香り", value: values[0] },
  { label: "甘み", value: values[1] },
  { label: "コク", value: values[2] },
  { label: "キレ", value: values[3] },
  { label: "余韻", value: values[4] },
];

const sakeBrands: SakeBrand[] = [
  {
    category: "sake",
    slug: "dassai",
    name: "獺祭",
    summary: "華やかでクリーンな方向性がわかりやすく、日本酒初心者にも入りやすいブランドです。",
    story:
      "獺祭は純米大吟醸を主軸にした現代的な日本酒ブランドです。果実感のある香りと透明感ある飲み口が特徴で、種類ごとの磨きの差も比較しやすいです。",
    accent: "amber",
    highlights: ["華やか", "クリーン", "純米大吟醸中心"],
    facts: [
      { label: "製造会社", value: "旭酒造" },
      { label: "都道府県", value: "山口県" },
      { label: "ブランド傾向", value: "香りが高く現代的" },
      { label: "見るポイント", value: "磨きの違いと香りの出方" },
    ],
    lineup: [
      {
        name: "獺祭 純米大吟醸45",
        style: "バランス型",
        summary: "獺祭らしい華やかさと飲みやすさの中心にある定番。",
        notes: "白桃のような香りと軽やかな甘み。初めての一本として最も入りやすいです。",
        highlights: ["定番", "フルーティー", "軽やか"],
        facts: [
          { label: "製法", value: "純米大吟醸" },
          { label: "精米歩合", value: "45%" },
          { label: "おすすめ温度", value: "8-12°C" },
        ],
        radar: radarTemplate([4.8, 3.4, 2.8, 4.1, 3.7]),
      },
      {
        name: "獺祭 磨き三割九分",
        style: "上位スタンダード",
        summary: "45より香りの精度と伸びが少し上がり、より繊細にまとまる一本。",
        notes: "果実感はあるものの、甘みが暴れず、後半の抜けがきれいです。",
        highlights: ["繊細", "上品", "香りがきれい"],
        facts: [
          { label: "製法", value: "純米大吟醸" },
          { label: "精米歩合", value: "39%" },
          { label: "おすすめ温度", value: "8-10°C" },
        ],
        radar: radarTemplate([4.9, 3.2, 2.9, 4.4, 4.0]),
      },
      {
        name: "獺祭 磨き二割三分",
        style: "フラッグシップ",
        summary: "獺祭の象徴的な一本で、香りの上品さと滑らかさが際立ちます。",
        notes: "ボリューム感は控えめでも、余韻の長さと質感の美しさがはっきり感じられます。",
        highlights: ["象徴的", "上質", "余韻が長い"],
        facts: [
          { label: "製法", value: "純米大吟醸" },
          { label: "精米歩合", value: "23%" },
          { label: "おすすめ温度", value: "10°C前後" },
        ],
        radar: radarTemplate([5.0, 3.0, 3.1, 4.5, 4.7]),
      },
    ],
  },
  {
    category: "sake",
    slug: "aramasa",
    name: "新政",
    summary: "生酒のフレッシュさと酸の印象が強く、モダンな日本酒の代表格として見られるブランドです。",
    story:
      "新政は従来の淡麗辛口とは違う、酸と瑞々しさで見せる現代的な酒質が魅力です。同じブランド内でもシリーズで個性が大きく変わるため、比較のしがいがあります。",
    accent: "ruby",
    highlights: ["モダン", "酸が立つ", "シリーズ差が大きい"],
    facts: [
      { label: "製造会社", value: "新政酒造" },
      { label: "都道府県", value: "秋田県" },
      { label: "ブランド傾向", value: "フレッシュで現代的" },
      { label: "見るポイント", value: "酸とテクスチャの違い" },
    ],
    lineup: [
      {
        name: "No.6 S-type",
        style: "バランス型",
        summary: "No.6らしいフレッシュ感を保ちながら、比較的整ったバランスで飲みやすい一本。",
        notes: "軽いガス感と果実味があり、白ワインに近い感覚で楽しみやすいです。",
        highlights: ["フレッシュ", "軽快", "現代的"],
        facts: [
          { label: "製法", value: "生酒" },
          { label: "シリーズ", value: "No.6" },
          { label: "おすすめ温度", value: "8-10°C" },
        ],
        radar: radarTemplate([4.2, 3.5, 3.1, 3.8, 4.4]),
      },
      {
        name: "No.6 R-type",
        style: "リッチ寄り",
        summary: "S-typeより厚みがあり、果実感と旨みが前に出やすいタイプ。",
        notes: "酸はあるものの少し丸く、飲み口にふくらみを感じやすいです。",
        highlights: ["ふくらみ", "果実感", "ややリッチ"],
        facts: [
          { label: "製法", value: "生酒" },
          { label: "シリーズ", value: "No.6" },
          { label: "おすすめ温度", value: "8-12°C" },
        ],
        radar: radarTemplate([4.1, 3.8, 3.8, 3.4, 4.3]),
      },
      {
        name: "Colors 亜麻猫",
        style: "酸を楽しむタイプ",
        summary: "酸の印象が特に強く、新政の個性を最もわかりやすく感じやすい一本。",
        notes: "レモンやヨーグルトのような軽い酸のニュアンスがあり、料理との相性も幅広いです。",
        highlights: ["酸が主役", "個性的", "印象に残る"],
        facts: [
          { label: "製法", value: "生酒" },
          { label: "シリーズ", value: "Colors" },
          { label: "おすすめ温度", value: "6-10°C" },
        ],
        radar: radarTemplate([4.0, 3.2, 2.9, 4.2, 4.6]),
      },
    ],
  },
  {
    category: "sake",
    slug: "kokuryu",
    name: "黒龍",
    summary: "香りとキレのバランスが上品で、和食と合わせやすい洗練されたブランドです。",
    story:
      "黒龍は華やかすぎず、かといって地味でもない、洗練された飲み心地が魅力です。食中酒としてのまとまりが高く、種類ごとの質感差が見やすいブランドです。",
    accent: "plum",
    highlights: ["上品", "なめらか", "食中酒向き"],
    facts: [
      { label: "製造会社", value: "黒龍酒造" },
      { label: "都道府県", value: "福井県" },
      { label: "ブランド傾向", value: "上品で滑らか" },
      { label: "見るポイント", value: "香りとキレの均衡" },
    ],
    lineup: [
      {
        name: "いっちょらい",
        style: "定番吟醸",
        summary: "黒龍の入口としてわかりやすい、端正で飲み疲れしない一本。",
        notes: "きれいな酒質で、刺身や寿司の繊細さを壊しにくいです。",
        highlights: ["端正", "定番", "なめらか"],
        facts: [
          { label: "製法", value: "吟醸" },
          { label: "位置づけ", value: "ブランド定番" },
          { label: "おすすめ温度", value: "10-14°C" },
        ],
        radar: radarTemplate([3.8, 2.8, 3.4, 4.0, 3.8]),
      },
      {
        name: "純吟",
        style: "ややふくらみあり",
        summary: "吟醸のきれいさを保ちながら、少しふくらみを持たせたタイプ。",
        notes: "冷やしすぎない方が旨みが出やすく、食中での安定感があります。",
        highlights: ["旨み", "上品", "食事向け"],
        facts: [
          { label: "製法", value: "純米吟醸" },
          { label: "位置づけ", value: "やや厚みあり" },
          { label: "おすすめ温度", value: "12-15°C" },
        ],
        radar: radarTemplate([3.5, 2.9, 3.8, 3.8, 4.0]),
      },
      {
        name: "龍",
        style: "上位レンジ",
        summary: "質感の滑らかさと余韻の整い方が印象的な、上位レンジの一本。",
        notes: "派手な香りではなく、飲んだあとに残る美しさで差が見えるタイプです。",
        highlights: ["上質", "余韻", "洗練"],
        facts: [
          { label: "製法", value: "大吟醸" },
          { label: "位置づけ", value: "上位レンジ" },
          { label: "おすすめ温度", value: "10-12°C" },
        ],
        radar: radarTemplate([4.1, 2.6, 3.6, 4.2, 4.6]),
      },
    ],
  },
];

const wineVarieties: WineVariety[] = [
  {
    category: "wine",
    slug: "cabernet-sauvignon",
    name: "カベルネ・ソーヴィニヨン",
    summary: "しっかりした骨格を持つ赤ワイン品種で、国ごとの違いが比較しやすい定番です。",
    story:
      "カベルネ・ソーヴィニヨンは黒系果実、タンニン、熟成感の出方に国ごとの違いが見えやすい品種です。フランスでは端正、アメリカでは豊か、チリではコストバランスが見やすいです。",
    accent: "ruby",
    highlights: ["フルボディ", "黒果実", "国で差が出やすい"],
    facts: [
      { label: "主なスタイル", value: "重厚な赤" },
      { label: "香りの方向", value: "カシス / 杉 / スパイス" },
      { label: "見るポイント", value: "タンニンと果実味の出方" },
      { label: "相性", value: "赤身肉 / 熟成チーズ" },
    ],
    radar: radarTemplate([3.9, 2.1, 4.8, 3.2, 4.6]),
    countries: [
      {
        slug: "france",
        country: "フランス",
        region: "Bordeaux",
        summary: "ボルドーを中心に、端正でクラシックな骨格が出やすいスタイル。",
        bottles: [
          {
            name: "Chateau Lynch-Bages",
            winery: "Pauillac",
            region: "Bordeaux",
            summary: "力強さはありつつも、果実味と樽感が整ったクラシックな例。",
            highlights: ["クラシック", "骨格", "熟成向き"],
          },
          {
            name: "Chateau Montrose",
            winery: "Saint-Estephe",
            region: "Bordeaux",
            summary: "より引き締まったタンニンを感じやすい代表例。",
            highlights: ["引き締まる", "重厚", "長熟"],
          },
        ],
      },
      {
        slug: "usa",
        country: "アメリカ",
        region: "Napa Valley",
        summary: "ナパを中心に果実味と厚みが前に出やすく、わかりやすい豪華さがあります。",
        bottles: [
          {
            name: "Robert Mondavi Cabernet Sauvignon",
            winery: "Robert Mondavi Winery",
            region: "Napa Valley",
            summary: "果実の豊かさと樽感のバランスがわかりやすい一本。",
            highlights: ["リッチ", "樽感", "果実味"],
          },
          {
            name: "Caymus Cabernet Sauvignon",
            winery: "Caymus Vineyards",
            region: "Napa Valley",
            summary: "濃密でなめらか、アメリカらしい厚みを感じやすい有名銘柄。",
            highlights: ["濃密", "なめらか", "豪華"],
          },
        ],
      },
      {
        slug: "chile",
        country: "チリ",
        region: "Colchagua / Puente Alto",
        summary: "熟した果実味がありつつ、価格とのバランスの良さが魅力です。",
        bottles: [
          {
            name: "Montes Alpha Cabernet Sauvignon",
            winery: "Montes",
            region: "Colchagua Valley",
            summary: "果実味のわかりやすさと飲みごたえのバランスが良い一本。",
            highlights: ["コスパ", "果実味", "飲みやすい"],
          },
          {
            name: "Don Melchor",
            winery: "Concha y Toro",
            region: "Puente Alto",
            summary: "チリの上位レンジとして知られる、完成度の高い例。",
            highlights: ["上位", "完成度", "厚み"],
          },
        ],
      },
    ],
  },
  {
    category: "wine",
    slug: "pinot-noir",
    name: "ピノ・ノワール",
    summary: "軽やかで香りが繊細な赤ワイン品種で、国によるニュアンス差が大きいタイプです。",
    story:
      "ピノ・ノワールは厚みよりも繊細さで個性が出る品種です。フランスでは土や紅茶のような複雑さ、アメリカでは果実のふくらみ、ニュージーランドでは透明感が出やすいです。",
    accent: "plum",
    highlights: ["エレガント", "軽やか", "香りが複雑"],
    facts: [
      { label: "主なスタイル", value: "繊細な赤" },
      { label: "香りの方向", value: "チェリー / 紅茶 / 土" },
      { label: "見るポイント", value: "果実味と質感の細さ" },
      { label: "相性", value: "鴨肉 / きのこ料理" },
    ],
    radar: radarTemplate([4.4, 2.6, 2.8, 3.6, 4.2]),
    countries: [
      {
        slug: "france",
        country: "フランス",
        region: "Burgundy",
        summary: "ブルゴーニュでは、繊細さと土っぽい複雑さが魅力になりやすいです。",
        bottles: [
          {
            name: "Louis Jadot Bourgogne Pinot Noir",
            winery: "Louis Jadot",
            region: "Burgundy",
            summary: "ブルゴーニュの繊細さを入り口として理解しやすい一本。",
            highlights: ["繊細", "赤果実", "クラシック"],
          },
          {
            name: "Gevrey-Chambertin",
            winery: "Various Producers",
            region: "Burgundy",
            summary: "やや骨格があり、土やスパイスのニュアンスも感じやすい代表地域。",
            highlights: ["複雑", "土っぽさ", "上品"],
          },
        ],
      },
      {
        slug: "usa",
        country: "アメリカ",
        region: "California / Oregon",
        summary: "オレゴンやカリフォルニアでは果実のふくらみが比較的わかりやすく出ます。",
        bottles: [
          {
            name: "Meiomi Pinot Noir",
            winery: "Meiomi",
            region: "California",
            summary: "果実感が前に出て、ピノの軽やかさを残しつつ親しみやすい一本。",
            highlights: ["親しみやすい", "果実感", "まろやか"],
          },
          {
            name: "Domaine Drouhin Pinot Noir",
            winery: "Domaine Drouhin Oregon",
            region: "Oregon",
            summary: "アメリカの果実味とブルゴーニュ的な繊細さの中間にある印象。",
            highlights: ["バランス", "上品", "透明感"],
          },
        ],
      },
      {
        slug: "new-zealand",
        country: "ニュージーランド",
        region: "Marlborough / Central Otago",
        summary: "透明感のある果実味が出やすく、比較的ピュアな印象にまとまりやすいです。",
        bottles: [
          {
            name: "Cloudy Bay Pinot Noir",
            winery: "Cloudy Bay",
            region: "Marlborough",
            summary: "明るい果実味ときれいな酸が感じやすい代表例。",
            highlights: ["ピュア", "きれいな酸", "明るい"],
          },
          {
            name: "Felton Road Bannockburn Pinot Noir",
            winery: "Felton Road",
            region: "Central Otago",
            summary: "凝縮感もありつつ、冷涼感を伴った完成度の高い一本。",
            highlights: ["凝縮", "冷涼感", "完成度"],
          },
        ],
      },
    ],
  },
  {
    category: "wine",
    slug: "chardonnay",
    name: "シャルドネ",
    summary: "産地や造りで表情が大きく変わる、白ワインの中心的な品種です。",
    story:
      "シャルドネはステンレスタンクならシャープに、樽熟成なら厚みのある方向に寄りやすく、国ごとの違いも見やすい品種です。白ワインの幅を理解する起点に向いています。",
    accent: "amber",
    highlights: ["白の定番", "造りで差が出る", "表情が広い"],
    facts: [
      { label: "主なスタイル", value: "シャープからリッチまで幅広い" },
      { label: "香りの方向", value: "柑橘 / りんご / バター" },
      { label: "見るポイント", value: "酸と樽感のバランス" },
      { label: "相性", value: "白身魚 / クリーム系" },
    ],
    radar: radarTemplate([3.7, 2.8, 4.1, 3.1, 3.9]),
    countries: [
      {
        slug: "france",
        country: "フランス",
        region: "Burgundy",
        summary: "ブルゴーニュではミネラル感や上品さが出やすく、シャルドネの基準になりやすいです。",
        bottles: [
          {
            name: "Chablis",
            winery: "Various Producers",
            region: "Burgundy",
            summary: "シャープでミネラル感があり、樽感が控えめな代表スタイル。",
            highlights: ["ミネラル", "シャープ", "上品"],
          },
          {
            name: "Meursault",
            winery: "Various Producers",
            region: "Burgundy",
            summary: "よりふくよかで、ナッツやバターのような厚みを感じやすい地域。",
            highlights: ["ふくよか", "樽感", "上質"],
          },
        ],
      },
      {
        slug: "usa",
        country: "アメリカ",
        region: "California / Napa Valley",
        summary: "カリフォルニアでは熟した果実味と樽由来の厚みが前に出やすいです。",
        bottles: [
          {
            name: "Kendall-Jackson Vintner's Reserve Chardonnay",
            winery: "Kendall-Jackson",
            region: "California",
            summary: "リッチなシャルドネ像をわかりやすく体感しやすい一本。",
            highlights: ["リッチ", "バター感", "親しみやすい"],
          },
          {
            name: "Far Niente Chardonnay",
            winery: "Far Niente",
            region: "Napa Valley",
            summary: "樽感と果実味の完成度が高い上位レンジの例。",
            highlights: ["厚み", "樽感", "完成度"],
          },
        ],
      },
      {
        slug: "australia",
        country: "オーストラリア",
        region: "South Australia / Margaret River",
        summary: "近年は重すぎず、果実味と酸のバランスを取ったスタイルも増えています。",
        bottles: [
          {
            name: "Penfolds Bin 311 Chardonnay",
            winery: "Penfolds",
            region: "South Australia",
            summary: "果実味を保ちつつ、きれいな酸も感じられるバランス型。",
            highlights: ["バランス", "果実味", "モダン"],
          },
          {
            name: "Leeuwin Estate Prelude Chardonnay",
            winery: "Leeuwin Estate",
            region: "Margaret River",
            summary: "柑橘感と樽のニュアンスが整った、モダンなオーストラリア例。",
            highlights: ["モダン", "柑橘", "上品"],
          },
        ],
      },
    ],
  },
];

export function getReadyCategories() {
  return categories.filter((category) => category.status === "ready");
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getSakeBrands() {
  return [...sakeBrands];
}

export function getWineVarieties() {
  return [...wineVarieties];
}

export function getCategoryCards(category: CategorySlug): CategoryCard[] {
  if (category === "sake") {
    return sakeBrands.map((brand) => ({
      slug: brand.slug,
      title: brand.name,
      subtitle: "Brand",
      summary: brand.summary,
      accent: brand.accent,
      highlights: brand.highlights,
      meta: `${brand.lineup.length} types`,
    }));
  }

  if (category === "wine") {
    return wineVarieties.map((variety) => ({
      slug: variety.slug,
      title: variety.name,
      subtitle: "Variety",
      summary: variety.summary,
      accent: variety.accent,
      highlights: variety.highlights,
      meta: `${variety.countries.length} countries`,
    }));
  }

  return [];
}

export function getDetailPaths() {
  return [
    ...sakeBrands.map((brand) => ({ category: "sake", slug: brand.slug })),
    ...wineVarieties.map((variety) => ({ category: "wine", slug: variety.slug })),
  ];
}

export function getSakeBrand(slug: string) {
  return sakeBrands.find((brand) => brand.slug === slug);
}

export function getWineVariety(slug: string) {
  return wineVarieties.find((variety) => variety.slug === slug);
}
