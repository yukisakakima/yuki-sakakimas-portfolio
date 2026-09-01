# Yuki Sakakima's Portfolio

## Description :

個人作品などを掲載したポートフォリオサイト。<br>
初代 IBM パソコンが好きだったこともあり、そのようなデザインになっております。<br>
また、グラフィックには、初代 IBM パソコンのコンセプトを崩さない為に、当時のスペックで可能なグラフィックとして幾何学模様を採用しております。

## View :

<img width="1440" alt="portfolio-site-home-image-for-readme" src="/public/images/portfolio-site-home-image-for-readme.png">
<img width="1440" alt="portfolio-site-works-image-for-readme" src="/public/images/portfolio-site-works-image-for-readme.png">
<img width="1440" alt="portfolio-site-quick-quill-image-for-readme" src="/public/images/portfolio-site-quick-quill-image-for-readme.png">

## Site URL :

[Yuki Sakakima's Portfolio](https://yuki-sakakimas-portfolio.herokuapp.com/)

## Languages and Tools :

- HTML
- CSS
- JavaScript
  - particle.js
  - Chart.js
  - Curzr
- Node.js 22.x（ローカル確認・ビルド用）
- Vercel（静的配信）

## Deploy on Vercel :

このサイトはサーバー側の動的処理を使用しないため、Vercel では静的サイトとして公開します。デプロイ時に `npm run build` が `pages/*.html` を `public/*.html` に生成し、`vercel.json` の `cleanUrls` 設定によって既存の `/profile`、`/works` などの URL を維持します。

ローカル確認は `npm start` を実行してください。Vercel に公開する出力を確認する場合は、先に `npm run build` を実行します。

## Structure :

<img alt="structure" src="/public/images/structure.png">
