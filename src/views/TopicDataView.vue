<template>
    <div class="standard-grid-page topic-data-page">
        <!-- 筛选区域 -->
        <section class="filter-section">
            <div class="container">
                <div class="filter-bar">
                    <div class="filter-group">
                        <label>搜索：</label>
                        <input
                            v-model="searchKeyword"
                            type="text"
                            placeholder="输入关键词搜索..."
                            @input="handleSearch"
                        />
                    </div>
                    <div class="filter-group">
                        <label>分类：</label>
                        <select v-model="selectedCategory" @change="handleFilter">
                            <option value="all">全部分类</option>
                            <option value="culture">文化遗产</option>
                            <option value="tourism">旅游资源</option>
                            <option value="ecology">生态环境</option>
                            <option value="economy">旅游经济</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>排序：</label>
                        <select v-model="sortBy" @change="handleSort">
                            <option value="latest">最新</option>
                            <option value="popular">最热</option>
                            <option value="downloads">下载量</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <!-- 主内容区域 -->
        <main class="main-content">
            <div class="container">
                <!-- 数据网格 -->
                <div v-if="filteredData.length > 0" class="standard-grid data-grid">
                    <div
                        v-for="item in paginatedData"
                        :key="item.id"
                        class="data-card"
                        @click="handleCardClick(item)"
                    >
                        <div class="card-image">
                            <img :src="item.image" :alt="item.title" />
                            <span class="card-category">{{ getCategoryName(item.category) }}</span>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">{{ item.title }}</h3>
                            <p class="card-description">{{ truncateText(item.description, 80) }}</p>
                            <div class="card-meta">
                                <span><i class="fas fa-calendar"></i> {{ item.date }}</span>
                                <span><i class="fas fa-download"></i> {{ item.downloads }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <h3>暂无数据</h3>
                    <p>当前筛选条件下没有找到相关数据</p>
                    <button class="reset-btn" @click="handleResetFilters">重置筛选条件</button>
                </div>

                <!-- 分页组件 -->
                <div v-if="totalPages > 1" class="pagination-wrapper">
                    <button :disabled="currentPage === 1" class="page-btn" @click="currentPage--">
                        &lt; 上一页
                    </button>
                    <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
                    <button :disabled="currentPage === totalPages" class="page-btn" @click="currentPage++">
                        下一页 &gt;
                    </button>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 响应式数据
const searchKeyword = ref('')
const selectedCategory = ref('all')
const sortBy = ref('latest')
const currentPage = ref(1)
const pageSize = ref(9)

// 模拟数据
const allData = ref([
    {
        id: 1,
        title: '甘肃省文化遗产资源数据库',
        description: '整合甘肃省境内各类文化遗产资源，包括石窟寺、古遗址、古墓葬、古建筑、近现代重要史迹等不可移动文物数据，以及可移动文物数据。涵盖地理位置、年代、类型、保存状况等详细信息。',
        category: 'culture',
        date: '2026-03-15',
        downloads: 3580,
        image: 'https://picsum.photos/400/300?random=1'
    },
    {
        id: 2,
        title: '敦煌莫高窟数字化资源库',
        description: '敦煌莫高窟高精度数字化采集数据，包括洞窟全景影像、壁画高清图像、彩塑三维模型等。采用先进的数字摄影测量和三维激光扫描技术，为文化遗产保护与研究提供数据支撑。',
        category: 'culture',
        date: '2026-03-12',
        downloads: 4250,
        image: 'https://picsum.photos/400/300?random=2'
    },
    {
        id: 3,
        title: '甘肃省旅游资源普查数据',
        description: '甘肃省全域旅游资源普查成果，包含自然旅游资源、人文旅游资源两大类的详细数据。涵盖地文景观、水域风光、生物景观、天象与气候景观、遗址遗迹、建筑与设施、旅游购品、人文活动等资源类型。',
        category: 'tourism',
        date: '2026-03-10',
        downloads: 2890,
        image: 'https://picsum.photos/400/300?random=3'
    },
    {
        id: 4,
        title: '甘肃省 A 级旅游景区监测数据',
        description: '甘肃省所有 A 级旅游景区的实时监测数据，包括游客接待量、门票收入、游客满意度、景区承载量等指标。支持日度、周度、月度多维度数据分析，为景区管理和决策提供依据。',
        category: 'tourism',
        date: '2026-03-08',
        downloads: 3120,
        image: 'https://picsum.photos/400/300?random=4'
    },
    {
        id: 5,
        title: '甘肃省生态环境质量监测数据',
        description: '甘肃省生态环境质量监测数据，包含空气质量、水环境质量、声环境质量、土壤环境质量等指标。整合全省各级生态环境监测站点的监测数据，为生态环境保护和治理提供科学依据。',
        category: 'ecology',
        date: '2026-03-05',
        downloads: 2450,
        image: 'https://picsum.photos/400/300?random=5'
    },
    {
        id: 6,
        title: '甘肃省旅游经济统计数据',
        description: '甘肃省旅游经济主要统计数据，包括旅游总收入、旅游接待人次、旅行社经营情况、旅游饭店经营情况、旅游从业人员等指标。为旅游经济分析和政策制定提供数据支持。',
        category: 'economy',
        date: '2026-03-02',
        downloads: 2780,
        image: 'https://picsum.photos/400/300?random=6'
    },
    {
        id: 7,
        title: '丝绸之路（甘肃段）文化遗产数据',
        description: '丝绸之路（甘肃段）沿线文化遗产资源数据，包括河西走廊石窟群、长城遗址、古城遗址、古战场遗址等。整合考古调查、文物保护、学术研究等多源数据，展现丝绸之路历史文化风貌。',
        category: 'culture',
        date: '2026-02-28',
        downloads: 3650,
        image: 'https://picsum.photos/400/300?random=7'
    },
    {
        id: 8,
        title: '甘肃省红色旅游资源数据库',
        description: '甘肃省红色旅游资源专题数据，涵盖革命遗址、革命纪念建筑物、革命文物等红色旅游资源。包括会宁会师旧址、南梁革命纪念馆、高台烈士陵园等重要红色旅游景点的详细信息。',
        category: 'tourism',
        date: '2026-02-25',
        downloads: 2340,
        image: 'https://picsum.photos/400/300?random=8'
    },
    {
        id: 9,
        title: '甘肃省非物质文化遗产数据库',
        description: '甘肃省非物质文化遗产资源数据库，包括民间文学、传统音乐、传统舞蹈、传统戏剧、曲艺、传统体育游艺与杂技、传统美术、传统技艺、传统医药、民俗等十大类别的非遗项目数据。',
        category: 'culture',
        date: '2026-02-22',
        downloads: 3180,
        image: 'https://picsum.photos/400/300?random=9'
    },
    {
        id: 10,
        title: '甘肃省旅游客流监测数据',
        description: '基于手机信令、交通票务、景区闸机等多源数据的旅游客流监测数据。提供客源地分析、游客画像、流动轨迹、停留时长等分析结果，为旅游市场分析和精准营销提供数据支撑。',
        category: 'economy',
        date: '2026-02-20',
        downloads: 2950,
        image: 'https://picsum.photos/400/300?random=10'
    },
    {
        id: 11,
        title: '甘肃省黄河流域生态数据',
        description: '黄河流域（甘肃段）生态环境基础数据，包括水资源、水土保持、湿地资源、生物多样性等数据。整合遥感监测、地面观测、调查评估等多源数据，为黄河流域生态保护和高质量发展提供支撑。',
        category: 'ecology',
        date: '2026-02-18',
        downloads: 2120,
        image: 'https://picsum.photos/400/300?random=11'
    },
    {
        id: 12,
        title: '甘肃省文旅产业投资数据',
        description: '甘肃省文旅产业投资项目数据，包括重点文旅项目、招商引资项目、产业扶持政策等信息。涵盖项目投资规模、建设内容、进展情况、经济效益等指标，为文旅产业投资决策提供参考。',
        category: 'economy',
        date: '2026-02-15',
        downloads: 2560,
        image: 'https://picsum.photos/400/300?random=12'
    }
])

// 筛选后的数据
const filteredData = computed(() => {
    let result = [...allData.value]
    
    // 分类筛选
    if (selectedCategory.value !== 'all') {
        result = result.filter(item => item.category === selectedCategory.value)
    }
    
    // 关键词搜索
    if (searchKeyword.value.trim()) {
        const keyword = searchKeyword.value.toLowerCase()
        result = result.filter(item =>
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword)
        )
    }
    
    // 排序
    switch (sortBy.value) {
        case 'latest':
            result.sort((a, b) => new Date(b.date) - new Date(a.date))
            break
        case 'popular':
            result.sort((a, b) => b.downloads - a.downloads)
            break
        case 'downloads':
            result.sort((a, b) => b.downloads - a.downloads)
            break
    }
    
    return result
})

// 分页后的数据
const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return filteredData.value.slice(start, end)
})

// 总页数
const totalPages = computed(() => Math.ceil(filteredData.value.length / pageSize.value))

// 截断文本
const truncateText = (text, maxLength) => {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
}

// 获取分类名称
const getCategoryName = (category) => {
    const categoryMap = {
        culture: '文化遗产',
        tourism: '旅游资源',
        ecology: '生态环境',
        economy: '旅游经济'
    }
    return categoryMap[category] || '未知'
}

// 处理搜索
const handleSearch = () => {
    currentPage.value = 1
}

// 处理筛选
const handleFilter = () => {
    currentPage.value = 1
}

// 处理排序
const handleSort = () => {
    currentPage.value = 1
}

// 重置筛选
const handleResetFilters = () => {
    searchKeyword.value = ''
    selectedCategory.value = 'all'
    sortBy.value = 'latest'
    currentPage.value = 1
}

// 处理卡片点击
const handleCardClick = (item) => {
    router.push(`/topicDataDetail/${item.id}`)
}
</script>

<style scoped>
/* 使用标准网格页面基础样式 */
.standard-grid-page {
    min-height: 100vh;
    background: #f5f5f5;
}

/* 筛选区域 */
.filter-section {
    background: #fff;
    padding: 20px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    margin-bottom: 30px;
}

.filter-bar {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.filter-group label {
    font-size: 14px;
    color: #666;
    font-weight: 500;
    white-space: nowrap;
}

.filter-group input,
.filter-group select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s;
}

.filter-group input:focus,
.filter-group select:focus {
    outline: none;
    border-color: #1a237e;
    box-shadow: 0 0 0 2px rgba(26, 35, 126, 0.1);
}

.filter-group input {
    width: 250px;
}

/* 主内容区域 */
.main-content {
    padding: 40px 0;
    min-height: 600px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* 标准网格布局 */
.standard-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-bottom: 30px;
}

/* 分页包装器 */
.pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
}

.page-btn {
    padding: 8px 16px;
    background: #fff;
    border: 1px solid #ddd;
    color: #333;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}

.page-btn:not(:disabled):hover {
    background: #1a237e;
    color: #fff;
    border-color: #1a237e;
}

.page-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.page-info {
    padding: 8px 16px;
    color: #666;
    font-size: 14px;
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
    margin: 0 0 20px 0;
}

.reset-btn {
    padding: 8px 20px;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
}

.reset-btn:hover {
    background: linear-gradient(135deg, #283593 0%, #1a237e 100%);
}

/* 数据卡片 */
.data-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.data-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.data-card:hover .card-image img {
    transform: scale(1.1);
}

.card-category {
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.card-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-title {
    font-size: 16px;
    color: #1a237e;
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.4;
}

.card-description {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin: 0 0 15px 0;
    flex: 1;
}

.card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #999;
    padding-top: 15px;
    border-top: 1px solid #f0f0f0;
}

.card-meta i {
    margin-right: 4px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .standard-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .filter-bar {
        flex-direction: column;
    }
    
    .filter-group {
        width: 100%;
    }
    
    .filter-group input {
        width: 100%;
    }
    
    .standard-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .main-content {
        padding: 20px 0;
    }
}
</style>
