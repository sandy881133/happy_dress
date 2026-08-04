# 視覺風格網頁 Prompt 指南 (Web Design Prompt Guide)

本指南將兩張圖片的視覺特徵轉化為適用於 **AI 圖像生成 (Midjourney / DALL-E 3)**、**UI/UX 網頁視覺規範 (Figma / Webflow)** 以及 **前端開發 (Tailwind CSS / HTML)** 的專業提示詞。

---

## 🎨 風格一：法式復古手繪風（Coucou 品牌風格）

> **適用網頁類型**：手作麵包店、獨立咖啡館、法式甜點店、文創手作品牌、獨立選品店

### 1. AI 圖像 / UI 生成 Prompt (Midjourney / DALL-E 3)
```text
French vintage bakery website UI layout, retro artisan style, warm cream paper texture background, burgundy red monochrome illustration, hand-drawn shopfront, 3D drop-shadow retro typography, elegant line art, nostalgic aesthetic, minimalist clean composition, high detail --ar 16:9
```

### 2. UI/UX 視覺設計規範 (Figma / Webflow Specs)
* **主配色 (Primary Color)**：深磚紅 `#8B2626`
* **背景色 (Background Color)**：溫暖米白棉麻紙色 `#F5EFEB`
* **標題字體 (Header Typography)**：帶立體斜線陰影或復古襯線體（如 *Retro Serif*, *Cooper Black* 變體）
* **內文字體 (Body Typography)**：人文襯線體（如 *Garamond*, *Georgia*）
* **視覺元素 (Visual Elements)**：
  * 單色鋼筆細線插畫（店面、腳踏車、生活小物）
  * 模擬活版印刷 / Risograph 的不均勻印墨質感
  * 微弧形或立體陰影的大標題排版

### 3. 前端開發 Prompt (Tailwind CSS / Web Component)
```text
Create a warm, nostalgic web landing page with a warm cream textured background (#F5EFEB), deep burgundy typography (#8B2626), custom vintage drop-shadow headings, hand-drawn line-art vector illustrations, and organic subtle borders. Use centered symmetrical alignment with classic editorial column widths.
```

---

## 📐 風格二：現代理性結構與高奢風（OLife 品牌風格）

> **適用網頁類型**：高端時尚品牌、建築/室內設計事務所、精品生活美學、高階品牌顧問、個人品牌網站

### 1. AI 圖像 / UI 生成 Prompt (Midjourney / DALL-E 3)
```text
Modern luxury brand website landing page UI, editorial minimalist style, high contrast modern serif typography, blueprint technical grid lines, architectural geometric layout, subtle recycled concrete paper texture background, charcoal black typography, premium editorial aesthetic, precise composition --ar 16:9
```

### 2. UI/UX 視覺設計規範 (Figma / Webflow Specs)
* **主配色 (Primary Color)**：墨黑 `#1A1A1A` / 深炭灰 `#2D3748`
* **背景色 (Background Color)**：灰褐色再生紙 / 水泥質感 `#C8C3BC`
* **標題字體 (Header Typography)**：高對比度現代襯線體（如 *Bodoni*, *Didot*, *Playfair Display*）
* **內文字體 (Body Typography)**：無襯線工藝體或精細等寬字體（如 *Helvetica Neue*, *Inter*, *SF Mono*）
* **視覺元素 (Visual Elements)**：
  * 極細幾何網格線（Grid Lines, 0.5px）
  * 設計藍圖風格的輔助標註（如角度 `60°`、尺寸 `75px`、圓弧軌跡）
  * 極致的大面積留白與對齊標籤（如 `EST. 2026`）

### 3. 前端開發 Prompt (Tailwind CSS / Web Component)
```text
Create a modern minimalist editorial website with a light charcoal concrete textured background (#C8C3BC), solid black text (#1A1A1A), ultra-thin architectural grid overlays (0.5px borders), high-contrast modern serif typography for title headers, subtle geometric technical markers, and generous vertical whitespace.
```

---

## 📊 兩者應用場景對比表 (Prompt Usage Guide)

| 比較項目 | 法式復古手繪風 (Coucou) | 現代理性結構風 (OLife) |
| :--- | :--- | :--- |
| **品牌情緒 (Mood)** | 親切、溫暖、文化底蘊、手作溫度 | 專業、嚴謹、極致高端、理智美學 |
| **排版核心 (Layout)** | 居中對稱、故事性插畫、插圖與大標呼應 | 幾何網格 (Grid System)、大膽留白、細線軸線 |
| **關鍵色彩 (Palette)** | 磚紅 (`#8B2626`) + 米白紙紋 (`#F5EFEB`) | 墨黑 (`#1A1A1A`) + 水泥灰/再生紙 (`#C8C3BC`) |
| **核心 Prompt 關鍵字** | `Hand-drawn`, `Letterpress`, `Cream paper`, `Burgundy` | `Grid lines`, `Blueprint`, `Modern Serif`, `High Contrast` |

---

> **💡 使用技巧說明**：
> 1. **產生視覺概念圖**：複製 **AI 圖像 Prompt** 直接貼入 Midjourney 或 DALL-E 3。
> 2. **撰寫前端程式碼**：將 **前端開發 Prompt** 提供給 ChatGPT 或 Claude，並加上具體的網頁頁面需求（例：「請幫我用 HTML + Tailwind CSS 製作首頁，風格參考以下：[貼上 Prompt]」）。
