# 应用主页（来自新小灵感）

使用 Pug、Tailwind CSS 和 Vanilla JS 开发的单页应用网站。

预览地址： https://idea.xinxiao.tech

## 文件结构

```
├── package.json
├── postcss.config.js
├── src
│   ├── index.pug
│   ├── partials
│   │   └── _footer.pug
│   ├── privacy.pug
│   ├── styles
│   │   └── index.css
│   └── vendor
│       └── vendor.css
├── static
│   ├── favicon.ico
│   └── img
│       ├── card.png
│       ├── ios-screenshot.png
│       └── mac-screenshot.png
├── tailwind.config.js
```

## 开始开发

```
yarn
yarn dev
```

## 部署

```
yarn build
```

然后将 `./dist` 部署到任何静态网站服务，例如 Vercel 或 Netlify。

## 协议

MIT