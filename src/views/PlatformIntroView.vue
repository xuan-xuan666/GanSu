<template>
    <div class="platform-intro-page">
        <!-- 顶部导航横幅 -->
        <div class="top-nav">
            <div class="container">
                <div class="nav-content">
                    <span class="nav-item">关于我们</span>
                    <span class="nav-divider">|</span>
                    <a href="#contact" class="nav-item">联系我们</a>
                </div>
            </div>
        </div>

        <!-- 中心简介 -->
        <section class="center-intro">
            <div class="container">
                <div class="intro-header">
                    <h1 class="intro-title">甘肃文旅融合科学数据中心</h1>
                    <p class="intro-subtitle">Gansu Cultural Tourism Integration Science Data Center</p>
                </div>
                <div class="intro-content">
                    <div class="intro-text">
                        <p class="intro-lead">甘肃文旅融合科学数据中心是甘肃省重点建设的科学数据管理与共享服务平台，致力于整合全省文旅资源，提供全面的数据服务和分析支持。</p>
                        <p>中心依托先进的大数据技术和专业的研究团队，构建开放、高效、安全的科学数据管理体系，为政府决策、科学研究、企业发展和公众服务提供优质的数据支撑。</p>
                        <p>通过整合多源异构数据资源，建立标准化的数据管理流程和共享机制，中心促进文旅与科学的深度融合，推动数据资源的创新应用和价值转化。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 统计数据 -->
        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item" v-for="(stat, index) in platformStats" :key="index">
                        <div class="stat-number">{{ stat.number }}</div>
                        <div class="stat-label">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 功能定位 -->
        <section class="function-positioning">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">功能定位</h2>
                    <div class="title-line"></div>
                </div>
                <div class="positioning-grid">
                    <div class="positioning-card" v-for="(item, index) in positioningItems" :key="index">
                        <div class="card-number">{{ String(index + 1).padStart(2, '0') }}</div>
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-description">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 数据资源 -->
        <section class="data-resources-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">数据资源</h2>
                    <div class="title-line"></div>
                </div>
                <div class="resources-grid">
                    <div class="resource-card" v-for="(resource, index) in dataResources" :key="index">
                        <div class="resource-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                            </svg>
                        </div>
                        <h3 class="resource-title">{{ resource.title }}</h3>
                        <p class="resource-description">{{ resource.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 服务内容 -->
        <section class="service-content-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">服务内容</h2>
                    <div class="title-line"></div>
                </div>
                <div class="service-list">
                    <div class="service-item" v-for="(service, index) in serviceItems" :key="index">
                        <div class="service-number">{{ String(index + 1).padStart(2, '0') }}</div>
                        <div class="service-content">
                            <h3 class="service-title">{{ service.title }}</h3>
                            <p class="service-description">{{ service.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 联系方式 -->
        <section class="contact-section" id="contact">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">联系我们</h2>
                    <div class="title-line"></div>
                </div>
                <div class="contact-content">
                    <div class="contact-info" v-for="(info, index) in contactInfo" :key="index">
                        <div class="contact-label">{{ info.label }}</div>
                        <div class="contact-value">{{ info.value }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 页脚 -->
        <footer class="page-footer">
            <div class="container">
                <div class="footer-content">
                    <p class="copyright">© 2026 甘肃文旅融合科学数据中心 版权所有</p>
                    <p class="technical-support">技术支持：甘肃文旅数据中心技术团队</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const platformStats = ref([
    { number: '1000+', label: '数据资源' },
    { number: '50+', label: '专题项目' },
    { number: '100 万+', label: '累计访问量' },
    { number: '20+', label: '合作单位' }
])

const positioningItems = ref([
    {
        title: '数据汇聚中心',
        description: '整合全省文旅资源数据，建立统一的数据资源池，实现多源异构数据的标准化存储和管理。'
    },
    {
        title: '分析研究中心',
        description: '运用大数据分析和人工智能技术，开展文旅融合发展的理论研究和实践探索。'
    },
    {
        title: '共享服务中心',
        description: '面向政府、企业、科研机构和社会公众，提供多层次、多样化的数据共享服务。'
    },
    {
        title: '创新应用中心',
        description: '推动数据资源与创新应用深度融合，促进文旅产业数字化转型和高质量发展。'
    }
])

const dataResources = ref([
    {
        title: '文化资源数据',
        description: '包括文化遗产、博物馆、图书馆、文化艺术等基础数据和专题数据。'
    },
    {
        title: '旅游资源数据',
        description: '涵盖旅游景区、酒店餐饮、旅行社、旅游交通等全产业链数据资源。'
    },
    {
        title: '融合发展的数据',
        description: '文旅融合项目、文旅消费、文旅产业经济等融合发展相关数据。'
    },
    {
        title: '专题监测数据',
        description: '生态环境、客流监测、舆情分析等专题监测和统计数据。'
    }
])

const serviceItems = ref([
    {
        title: '数据查询与检索服务',
        description: '提供便捷的数据查询、检索和浏览功能，支持多维度筛选和精准定位。'
    },
    {
        title: '数据下载与接口服务',
        description: '支持数据在线下载和 API 接口调用，满足多样化数据使用需求。'
    },
    {
        title: '数据分析与可视化服务',
        description: '提供数据分析工具和可视化展示，帮助用户深入理解数据价值。'
    },
    {
        title: '定制化数据服务',
        description: '根据用户需求提供定制化数据采集、处理和分析服务。'
    },
    {
        title: '决策支持服务',
        description: '基于数据分析结果为政府决策和企业发展提供科学依据和建议。'
    }
])

const contactInfo = ref([
    { label: '单位名称', value: '甘肃文旅融合科学数据中心' },
    { label: '联系地址', value: '甘肃省兰州市城关区 XXX 路 XXX 号' },
    { label: '联系电话', value: '0931-XXXXXXXX' },
    { label: '电子邮箱', value: 'contact@gswlkx.cn' },
    { label: '服务时间', value: '周一至周五 9:00-17:00' }
])
</script>

<style scoped>
.platform-intro-page {
    min-height: 100vh;
    background: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 顶部导航 */
.top-nav {
    background: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
    padding: 12px 0;
}

.nav-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.nav-item {
    font-size: 14px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-item:hover {
    color: #1a237e;
}

.nav-divider {
    color: #ccc;
}

/* 中心简介 */
.center-intro {
    padding: 80px 0 60px;
    background: #fff;
}

.intro-header {
    text-align: center;
    margin-bottom: 50px;
}

.intro-title {
    font-size: 36px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
}

.intro-subtitle {
    font-size: 16px;
    color: #666;
    font-weight: 400;
}

.intro-content {
    max-width: 900px;
    margin: 0 auto;
}

.intro-text {
    line-height: 2;
    color: #333;
}

.intro-lead {
    font-size: 18px;
    font-weight: 500;
    color: #1a237e;
    margin-bottom: 25px;
    line-height: 1.8;
}

.intro-text p {
    margin-bottom: 20px;
    font-size: 16px;
    text-align: justify;
}

/* 统计数据 */
.stats-section {
    padding: 60px 0;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.stat-item {
    text-align: center;
    padding: 30px 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s, background 0.3s;
}

.stat-item:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
}

.stat-number {
    font-size: 48px;
    font-weight: 700;
    color: #4fc3f7;
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif;
}

.stat-label {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
}

/* 通用 section 样式 */
.function-positioning,
.data-resources-section,
.service-content-section,
.contact-section {
    padding: 70px 0;
    background: #f8f9fa;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-title {
    font-size: 32px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 15px;
}

.title-line {
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #4fc3f7 0%, #00bcd4 100%);
    margin: 0 auto;
    border-radius: 2px;
}

/* 功能定位 */
.positioning-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.positioning-card {
    background: #fff;
    padding: 35px 25px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: all 0.3s;
    border: 1px solid #e8e8e8;
}

.positioning-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    border-color: #4fc3f7;
}

.card-number {
    font-size: 42px;
    font-weight: 700;
    color: rgba(79, 195, 247, 0.2);
    margin-bottom: 15px;
    line-height: 1;
}

.card-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 15px;
}

.card-description {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
    text-align: justify;
}

/* 数据资源 */
.resources-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.resource-card {
    background: #fff;
    padding: 35px 25px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: all 0.3s;
    border: 1px solid #e8e8e8;
    text-align: center;
}

.resource-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    border-color: #4fc3f7;
}

.resource-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 20px;
    color: #1a237e;
}

.resource-icon svg {
    width: 100%;
    height: 100%;
}

.resource-title {
    font-size: 17px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 12px;
}

.resource-description {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
}

/* 服务内容 */
.service-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 900px;
    margin: 0 auto;
}

.service-item {
    display: flex;
    gap: 25px;
    background: #fff;
    padding: 30px 35px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: all 0.3s;
    border: 1px solid #e8e8e8;
    align-items: flex-start;
}

.service-item:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #4fc3f7;
    transform: translateX(5px);
}

.service-number {
    font-size: 36px;
    font-weight: 700;
    color: rgba(79, 195, 247, 0.3);
    min-width: 60px;
    line-height: 1;
}

.service-content {
    flex: 1;
}

.service-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 12px;
}

.service-description {
    font-size: 15px;
    color: #666;
    line-height: 1.8;
    text-align: justify;
}

/* 联系方式 */
.contact-section {
    background: #fff;
}

.contact-content {
    background: #f8f9fa;
    padding: 45px 50px;
    border-radius: 12px;
    max-width: 900px;
    margin: 0 auto;
}

.contact-info {
    display: flex;
    padding: 22px 0;
    border-bottom: 1px solid #e0e0e0;
    align-items: baseline;
}

.contact-info:last-child {
    border-bottom: none;
}

.contact-label {
    width: 130px;
    font-size: 15px;
    color: #666;
    font-weight: 500;
    flex-shrink: 0;
}

.contact-value {
    flex: 1;
    font-size: 15px;
    color: #333;
    font-weight: 400;
}

/* 页脚 */
.page-footer {
    background: #1a237e;
    padding: 30px 0;
    border-top: 3px solid #4fc3f7;
}

.footer-content {
    text-align: center;
}

.copyright {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 8px;
}

.technical-support {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
}

/* 响应式设计 */
@media (max-width: 1200px) {
    .stats-grid,
    .positioning-grid,
    .resources-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .stat-number {
        font-size: 40px;
    }
}

@media (max-width: 768px) {
    .intro-title {
        font-size: 26px;
    }
    
    .intro-subtitle {
        font-size: 14px;
    }
    
    .stats-grid,
    .positioning-grid,
    .resources-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-number {
        font-size: 36px;
    }
    
    .section-title {
        font-size: 26px;
    }
    
    .service-item {
        flex-direction: column;
        gap: 15px;
        padding: 25px;
    }
    
    .service-number {
        min-width: auto;
        font-size: 28px;
    }
    
    .contact-content {
        padding: 30px 25px;
    }
    
    .contact-info {
        flex-direction: column;
        gap: 8px;
    }
    
    .contact-label {
        width: auto;
    }
}
</style>