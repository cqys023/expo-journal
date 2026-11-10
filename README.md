# 📚 博览数字资源导航站

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

基于 **Cloudflare Workers** 搭建的高性能、轻量级博览网（Bookan）数字资源代理与导航系统。

---

## ✨ 网站功能介绍

网站部署完成后将具备以下功能：

- **首页展示期刊列表**
- 支持 **按名称搜索**
- 支持 **翻页 / 跳转页面**
- **多级分类导航**：支持大类与子分类快速筛选
- **历年期数追溯**：支持查看期刊详细介绍、历年出版列表及往期期数
- **沉浸式双模阅读器**：支持双页对照、单页独占放大、鼠标滚轮无极缩放及全方向无死角拖拽平移

---

## 🛠️ 项目架构

本项目采用纯单文件（Single-File）方案实现前后端一体化：
1. **Worker 代理后端**：拦截并代理博览网各类 API 请求，自动注入 `User-Agent` 与 `Referer`，完美解决跨域（CORS）问题。
2. **单页前端 (SPA)**：采用 Tailwind CSS 构建的高颜值现代化用户界面。

---

## 🚀 快速部署指南

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 进入 **Workers & Pages** -> 点击 **Create application** -> **Create Worker**。
3. 输入 Worker 名称并点击 **Deploy**。
4. 部署成功后点击 **Edit code**，将项目的完整代码粘贴进去。
5. 点击右上角 **Save and deploy** 即可发布生效。

---

## 📄 免责声明

本项目仅供个人学习、技术研究与交流使用。所有数据接口及资源均归原平台所有，请遵守相关法律法规。

---

## 📝 License

基于 [MIT License](LICENSE) 开源协议发布。
