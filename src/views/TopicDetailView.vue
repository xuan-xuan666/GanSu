<template>
    <div class="standard-detail-page topic-detail-page">
        <!-- 专题介绍 -->
        <section class="intro-section">
            <div class="container">
                <div class="section-title">
                    <h2>专题介绍</h2>
                    <div class="title-line"></div>
                </div>
                <div class="intro-content">
                    <p>{{ topicDetail.description }}</p>
                </div>
            </div>
        </section>

        <!-- 数据集列表 -->
        <section class="dataset-section">
            <div class="container">
                <div class="section-title">
                    <h2>数据集列表</h2>
                    <div class="title-line"></div>
                </div>

                <!-- 数据集网格 -->
                <div v-if="datasets.length > 0" class="standard-grid dataset-grid">
                    <div
                        v-for="dataset in datasets"
                        :key="dataset.id"
                        class="dataset-card"
                        @click="handleDatasetClick(dataset)"
                    >
                        <div class="dataset-card-header">
                            <div class="dataset-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="dataset-title">{{ dataset.title }}</h3>
                        </div>
                        <p class="dataset-description">{{ truncateText(dataset.description, 100) }}</p>
                        <div class="dataset-meta">
                            <span class="dataset-format">{{ dataset.format }}</span>
                            <span class="dataset-size">{{ dataset.size }}</span>
                            <span class="dataset-date">{{ dataset.date }}</span>
                        </div>
                        <div class="dataset-actions">
                            <button class="download-btn" @click.stop="handleDownload(dataset)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                下载
                            </button>
                            <button class="detail-btn" @click.stop="handleViewDetail(dataset)">
                                查看详情
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <h3>暂无数据集</h3>
                    <p>该专题暂无相关数据集</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 专题详情数据
const topicDetail = ref({
    id: 1,
    title: '甘肃省文化遗产资源专题数据库',
    description: '整合甘肃省内石窟寺、古遗址、古墓葬、古建筑等不可移动文物资源数据，以及可移动文物、非物质文化遗产等文化遗产资源数据。为文化遗产保护、研究和利用提供全面的数据支撑。',
    date: '2026-03-15',
    downloads: 2850,
    views: 15680
})

// 数据集列表
const datasets = ref([
    {
        id: 1,
        title: '甘肃省石窟寺文物资源数据集',
        description: '包含甘肃省境内所有石窟寺的基础信息、壁画数据、彩塑数据、建筑数据等，共计 5000+ 条记录。数据来源于甘肃省文物考古研究所，经过专业整理和校核。',
        format: 'CSV/Excel',
        size: '125 MB',
        date: '2026-03-10'
    },
    {
        id: 2,
        title: '甘肃省古遗址空间分布数据',
        description: '整合甘肃省第三次全国文物普查成果，提供古遗址的空间位置、年代、类型、保存状况等详细信息，支持 GIS 分析和空间可视化。',
        format: 'Shapefile/GeoJSON',
        size: '85 MB',
        date: '2026-03-08'
    },
    {
        id: 3,
        title: '甘肃省非物质文化遗产名录数据',
        description: '收录甘肃省国家级、省级、市县级非物质文化遗产项目名录，包括项目名称、类别、传承人、申报地区等完整信息。',
        format: 'CSV/Excel',
        size: '45 MB',
        date: '2026-03-05'
    },
    {
        id: 4,
        title: '甘肃省馆藏文物目录数据',
        description: '提供甘肃省各级博物馆、纪念馆馆藏文物目录，包括文物名称、年代、类别、级别、尺寸等基础信息，共计 10 万 + 条记录。',
        format: 'CSV/Excel',
        size: '256 MB',
        date: '2026-03-02'
    },
    {
        id: 5,
        title: '甘肃省长城资源调查数据',
        description: '基于甘肃省长城资源调查成果，提供长城墙体、关堡、烽燧等遗迹的空间数据和属性数据，支持长城保护规划和研究工作。',
        format: 'Shapefile/GeoJSON',
        size: '156 MB',
        date: '2026-02-28'
    }
])

// 截断文本
const truncateText = (text, maxLength) => {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
}

// 处理数据集点击
const handleDatasetClick = (dataset) => {
    console.log('点击数据集:', dataset)
}

// 处理下载
const handleDownload = (dataset) => {
    alert(`正在下载 ${dataset.title}...`)
}

// 处理查看详情
const handleViewDetail = (dataset) => {
    console.log('查看详情:', dataset)
}
</script>

<style scoped>
/* 标准详情页基础样式 */
.standard-detail-page {
    min-height: 100vh;
    background: #f5f5f5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* 区块通用样式 */
.intro-section,
.dataset-section {
    padding: 40px 0;
}

/* 区块标题 */
.section-title {
    text-align: center;
    margin-bottom: 30px;
}

.section-title h2 {
    font-size: 28px;
    color: #1a237e;
    margin: 0 0 15px 0;
    font-weight: 600;
}

.title-line {
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    margin: 0 auto;
    border-radius: 2px;
}

/* 专题介绍内容 */
.intro-content {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.intro-content p {
    font-size: 16px;
    color: #333;
    line-height: 1.8;
    margin: 0;
}

/* 标准网格布局 */
.standard-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

/* 数据集卡片 */
.dataset-card {
    background: #fff;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.dataset-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.dataset-card-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.dataset-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-shrink: 0;
}

.dataset-title {
    font-size: 18px;
    color: #1a237e;
    margin: 0;
    font-weight: 600;
    flex: 1;
}

.dataset-description {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin: 0 0 20px 0;
}

.dataset-meta {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f0f0f0;
}

.dataset-format,
.dataset-size,
.dataset-date {
    font-size: 13px;
    color: #999;
    padding: 4px 10px;
    background: #f5f5f5;
    border-radius: 4px;
}

.dataset-actions {
    display: flex;
    gap: 10px;
}

.download-btn,
.detail-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s;
}

.download-btn {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
}

.download-btn:hover {
    background: linear-gradient(135deg, #283593 0%, #1a237e 100%);
}

.detail-btn {
    background: #f5f5f5;
    color: #333;
}

.detail-btn:hover {
    background: #e0e0e0;
}

/* 空状态 */
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.empty-state svg {
    color: #ddd;
    margin-bottom: 20px;
}

.empty-state h3 {
    font-size: 18px;
    color: #666;
    margin: 0 0 10px 0;
}

.empty-state p {
    color: #999;
    font-size: 14px;
    margin: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .standard-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .standard-grid {
        grid-template-columns: 1fr;
    }
    
    .section-title h2 {
        font-size: 24px;
    }
}

@media (max-width: 640px) {
    .intro-section,
    .dataset-section {
        padding: 20px 0;
    }
    
    .dataset-card-header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .dataset-actions {
        flex-direction: column;
    }
    
    .download-btn,
    .detail-btn {
        width: 100%;
        justify-content: center;
    }
}
</style>
