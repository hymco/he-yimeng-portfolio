# 何一梦设计作品集网站（可部署源码包）

视觉设计师 / AI设计师 / 品牌设计师 个人作品集网站，暗色高级、克制、科技感风格，PC 端优先，版心 1700px。

## 技术栈

- React 18 + Vite 5
- 纯手写 CSS（设计令牌集中在 `src/styles/global.css`）
- 无第三方 UI 组件库

## 页面结构

| 模块 | 说明 |
|---|---|
| Hero 首页 | 全屏首屏，Canvas 粒子流体动画背景 + 大标题 + 导航栏 + 联系按钮 |
| About 关于 | 头像、个人介绍、教育背景、实习经历、项目数据、技能条、获奖证书 |
| Works 作品 | 8 个筛选器（全部/包装/招贴/书籍/IP/海报/VI手册/文创）+ 7 张真实作品大卡片 |
| Strengths 能力 | 6 张能力卡片（品牌/AI创意/视觉传达/UI/三维/动态） |
| Contact 联系 | 整屏收尾页 + 联系表单 + 页脚 |

## 本地运行

```bash
npm install
npm run dev        # 开发预览 http://localhost:5173
```

## 构建与部署

```bash
npm run build      # 产物输出到 dist/
npm run preview    # 本地预览构建产物
```

将 `dist/` 目录上传到任意静态托管（Nginx / Vercel / Netlify / 腾讯云 COS / 阿里云 OSS 等）即可完成部署。
项目使用 `base: './'` 相对路径，可部署在任意子路径下。

## 目录结构

```
he-yimeng-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── avatar.jpg              # 头像（3:4 竖版证件照）
│   └── works/                  # 7 张作品图（本地化，不依赖远程 CDN）
│       ├── 01-packaging.jpg    # 包装·玉露仙竹山竹茶饮（2026 参赛）
│       ├── 02-poster.jpg       # 招贴·她力量铸红魂（2026 参赛）
│       ├── 03-book.jpg         # 书籍设计系列（2026）
│       ├── 04-poster.jpg       # 海报·未来海洋环保公益（2026）
│       ├── 05-ip.png           # IP·沧充亭狮冲冲文旅IP（2025）
│       ├── 06-vi.jpg           # VI·梦远旅行社 VIS 手册（2026）
│       └── 07-cultural.jpg     # 文创·雄安站地域文创（2024 获奖）
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/global.css       # 设计令牌：色彩/字体/间距/动效
    └── components/             # Navbar / Hero / About / Works / Strengths / Contact
```

## 待替换清单（部署前请核对）

1. **`public/avatar.jpg`**：当前为简历证件照，可按需更换为更正式的写真或工作照（建议 3:4 竖版）。
2. **联系方式**：`src/components/About.jsx` 与 `src/components/Contact.jsx` 中的电话（17739242558）、邮箱（3093167464@qq.com）。注意：更新版简历中电话写的是 17439242558，请确认最终对外号码后在此统一修改（两处都要改）。
3. **作品图**：`public/works/` 下的 7 张图为作品集代表作品，后续新增作品直接放入该目录，并在 `src/components/Works.jsx` 的 `works` 数组中补充对应条目。
4. **微信二维码**：Contact 模块中"微信·扫码添加"暂为占位，可替换为二维码图片。

## 版本记录

- v0.2.0：按更新版简历更新 About 全部信息（自我评价/教育/实习/技能/获奖）；Works 重构为 7 大分类筛选 + 7 张真实作品图（含参赛/获奖标签）；年份更新为 2026。
