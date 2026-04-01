# 甘肃文旅融合科学数据中心

甘肃省重点建设的科学数据平台，致力于整合全省文旅资源，提供全面的数据服务和分析支持。中心依托先进的大数据技术，为政府决策、科学研究和公众服务提供有力支撑。

## 项目简介

本项目是一个基于 Vue 3 的科学数据中心网页应用，采用现代化的前端技术栈构建，实现了文旅资源数据的可视化展示、实时监测和动态更新功能。

## 功能特性

- **核心数据总览**：动态数字面板展示关键数据指标
- **智能轮播图**：自动轮播展示平台特色和重要信息
- **客流热力图**：可视化展示各景区客流分布和实时热度
- **天气监测预警**：实时天气信息和灾害预警提示
- **综合新闻资讯**：最新文旅新闻和动态更新
- **数据资源中心**：旅游资源、游客行为、环境监测等数据分类展示
- **专题数据**：黄河文化、丝绸之路、生态旅游等专题数据
- **模型资源**：旅游流量预测、游客偏好分析等模型资源
- **科普专栏**：科学数据中心知识普及和智慧旅游指南
- **响应式设计**：完美适配桌面端和移动端

## 技术栈

### 核心框架
- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具

### 前端技术
- HTML5
- CSS3 (使用 CSS Grid 和 Flexbox 布局)
- JavaScript (ES6+)

### 开发工具
- Node.js
- npm

## 项目结构

```
GanSu/
├── index.html                 # HTML 入口文件
├── package.json               # 项目配置和依赖
├── vite.config.js             # Vite 构建配置
├── README.md                  # 项目说明文档
├── src/
│   ├── main.js                # 应用入口文件
│   ├── App.vue                # 根组件
│   ├── assets/
│   │   └── style.css          # 全局样式文件
│   └── components/
│       ├── HeaderComponent.vue           # 头部导航组件
│       ├── CarouselComponent.vue         # 轮播图组件
│       ├── DataOverviewComponent.vue     # 数据总览组件
│       ├── NewsSectionComponent.vue      # 新闻列表组件
│       ├── DataResourcesComponent.vue    # 数据资源组件
│       ├── SpecialTopicComponent.vue     # 专题数据组件
│       ├── ModelResourcesComponent.vue   # 模型资源组件
│       ├── SciencePopularizationComponent.vue  # 科普专栏组件
│       ├── PlatformIntroComponent.vue    # 平台介绍组件
│       └── FooterComponent.vue           # 页脚组件
├── html/                      # 静态 HTML 文件
├── css/                       # 静态 CSS 文件
└── js/                        # 静态 JavaScript 文件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

项目将在 http://localhost:8080 启动，浏览器会自动打开。

### 生产环境构建

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 组件说明

### HeaderComponent
顶部导航栏，包含 logo、网站标题和导航菜单。

### CarouselComponent
自动轮播组件，展示平台特色内容和重要信息。

### DataOverviewComponent
核心数据展示区域，包含：
- 关键数据指标面板
- 景区客流热力图
- 天气监测预警
- 最新数据更新

### NewsSectionComponent
综合新闻列表，展示最新文旅新闻和动态。

### DataResourcesComponent
数据资源分类展示，包括旅游资源、游客行为、环境监测等。

### SpecialTopicComponent
专题数据展示，如黄河文化、丝绸之路、生态旅游等。

### ModelResourcesComponent
数据分析模型资源展示。

### SciencePopularizationComponent
科普专栏，提供科学数据中心知识和智慧旅游指南。

### PlatformIntroComponent
平台介绍和统计数据展示。

### FooterComponent
页脚组件，包含链接和版权信息。

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

ISC License

## 联系方式

© 2026 甘肃文旅融合科学数据中心 版权所有
