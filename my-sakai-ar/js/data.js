/**
 * js/data.js
 * ホーム画面のデータ管理ファイル
 * ※後から新しい項目や画像を簡単に追加・編集できます。
 */

// 1. 上部スライダー画像とスポット名
const HERO_SLIDES = [
  {
    title: '大仙古墳',
    imageUrl: 'https://rn23033z.github.io/sakai-kanko-ar/my-sakai-ar/image/daisen.jpg'
  },
  {
    title: 'さかい利晶の杜',
    imageUrl: 'https://rn23033z.github.io/sakai-kanko-ar/my-sakai-ar/image/risho.jpeg'
  },
  {
    title: '旧堺燈台',
    imageUrl: 'https://rn23033z.github.io/sakai-kanko-ar/my-sakai-ar/image/sakaitodai.jpg'
  },
  {
    title: '鉄砲鍛冶屋敷',
    imageUrl: 'https://rn23033z.github.io/sakai-kanko-ar/my-sakai-ar/image/teppo.jpg'
  }
];

// 2. お知らせ (Announcements) データ
const ANNOUNCEMENTS_DATA = [
  {
    id: 1,
    title: 'ARスタンプラリー2026がスタートしました！堺の観光地を巡ろう。',
    date: '2026.10.28'
  },
  {
    id: 2,
    title: '大仙公園エリアで新しいキャラクター「にんとくくん」が登場！',
    date: '2026.10.20'
  },
  {
    id: 3,
    title: 'システムメンテナンスのお知らせ（11月1日深夜）',
    date: '2026.10.15'
  }
];

// 3. ニュース (News) データ
const NEWS_DATA = [
  {
    id: 1,
    title: '堺の伝統工芸「刃物」体験イベントが今週末に開催決定。',
    date: '2026.10.25'
  },
  {
    id: 2,
    title: '秋の特別拝観：妙國寺の樹齢400年「大ソテツ」公開。',
    date: '2026.10.18'
  }
];

// 4. お問い合わせ (Contact Us) データ
const CONTACT_DATA = [
  {
    id: 1,
    title: 'アプリの操作方法・カメラが起動しない場合のご案内',
    date: 'よくある質問'
  },
  {
    id: 2,
    title: '観光ガイド・イベントに関するお問い合わせフォーム',
    date: 'お問い合わせ'
  }
];
