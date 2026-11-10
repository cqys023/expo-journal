
# 📚 博览期刊数字资源导航站

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

基于 Cloudflare Workers 搭建的高性能、轻量级博览期刊数字资源代理与导航系统。项目采用前后端一体化单文件设计，内置现代化的响应式前端（Tailwind CSS），支持海量数字期刊的高效检索、多级分类筛选、往期追溯以及具备完美居中、鼠标滚轮缩放与全方位拖拽能力的沉浸式电子书阅读器。

---

## ✨ 核心功能亮点

- 🚀 **Serverless 零成本架构**：完全运行于 Cloudflare Workers 之上，无需购买和维护云服务器，享受全球 CDN 边缘加速。
- 🛡️ **智能跨域代理 (CORS)**：完美突破浏览器的同源策略限制。
- 📂 **多级资源分类导航**：支持大类资源导航与子分类精准筛选，配备完善的动态分页、页码直接跳转及状态恢复机制。
- 📅 **历年期数深度追溯**：支持查看期刊详细介绍、出版社信息、ISSN、历年出版列表以及具体到每一期的直达入口。
- 📖 **沉浸式双模电子书阅读器**：
  - **双页对照模式**：还原真实纸质书刊的双页翻阅体验，支持点击单页独占放大。
  - **单页自由缩放与拖拽**：单页默认完美居中显示，支持鼠标滚轮无极缩放与全方向鼠标无死角拖拽平移，阅读体验极致流畅。

---

## 🛠️ 项目架构与工作原理

本项目采用纯单文件（Single-File）方案实现前后端分离在边缘端的融合：

| 模块 | 实现方式 | 核心职责 |
| :--- | :--- | :--- |
| **Worker 代理后端** | `export default { fetch(...) }` | 追加 `Access-Control-Allow-Origin: *` 返回。 |
| **单页前端 (SPA)** | `HTML_CONTENT` 字符串 | 采用 Tailwind CSS 构建的高颜值现代化用户界面，负责分类选项卡渲染、瀑布流式资源展示、弹窗交互及 Canvas/Image 阅读器逻辑。 |

---

## 🚀 部署指南

### ☁️ 方法一：通过 Cloudflare Workers 控制台部署（推荐）

1. 🔑 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 🧭 在左侧菜单栏选择 **Workers & Pages**，点击右上角 **Create application** -> **Create Worker**。
3. 🏷️ 为您的 Worker 输入一个易于辨识的名称（例如 `bl-navigator`），点击 **Deploy**。
4. 📝 部署成功后，点击 **Edit code** 进入在线代码编辑器。
5. 📋 清空编辑器原有内容，将项目的完整 `b_worker.js` 代码粘贴进去。
6. 🚀 点击右上角的 **Save and deploy** 即可保存并实时生效。

### 💻 方法二：通过 Wrangler CLI 命令行部署

如果你习惯本地开发或使用 CI/CD 流程：

**① 📦 全局安装 Cloudflare Wrangler 工具：**

```bash
npm install -g wrangler
```

**② ⚙️ 在本地项目根目录下创建 `wrangler.toml` 配置文件：**

```toml
name = "bl-navigator"
main = "b_worker.js"
compatibility_date = "2026-01-01"
```

**③ 📄 将主程序代码保存为 `b_worker.js`。**

确保 `b_worker.js` 和 `wrangler.toml` 位于同一个项目根目录。

**④ 🔐 登录 Cloudflare 并执行一键发布命令：**

```bash
wrangler login
wrangler deploy
```

**⑤ 🎉 部署完成！**

等待部署成功后，Wrangler 会输出 Cloudflare Workers 的访问地址，复制链接即可访问网站。

---

## 📖 详细使用说明

### 🔍 1. 资源检索与筛选

- 🌐 打开部署好的 Cloudflare Worker 访问链接，页面会自动拉取机构下的数字资源大类。
- 📂 点击顶部大类标签或下方的子分类，即可快速筛选不同方向的期刊、报纸。

### 📚 2. 查看刊物详情与往期

- 🖼️ 点击任意一本刊物的封面卡片，会弹窗展示该资源的详细简介、出版社以及历年出版年份。
- 📅 点击不同的年份，下方将自动刷新出该年份对应的所有期数。

### 📖 3. 在线沉浸式阅读

- 📕 点击具体某期后即可进入阅读器界面。
- ↔️ **翻页操作**：通过界面左右两侧的悬浮箭头或底部的控制栏进行翻页。
- 🔎 **自由缩放与拖拽**：在阅读过程中可随时利用鼠标滚轮放大/缩小细节，按住鼠标左键即可任意平移拖拽无死角阅读。

---

## ⚠️ 免责声明

- 📌 本项目仅供个人学习、技术研究与交流使用。
- ©️ 所有数据接口及资源均归版权商所有，开发者不保证其永久可用性、完整性与准确性。
- ⚖️ 请在使用时严格遵守相关法律法规，不得将其用于任何商业用途或恶意爬虫行为。

---

## 📝 License

本项目基于 [MIT License](LICENSE) 开源协议发布。
