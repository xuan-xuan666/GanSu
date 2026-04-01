<template>
    <div class="standard-grid-page news-page">
        <!-- 筛选区域 -->
        <section class="filter-section">
            <div class="container">
                <NewsFilterComponent @filter-change="handleFilterChange" />
            </div>
        </section>

        <!-- 主内容区域 -->
        <main class="main-content">
            <div class="container">
                <!-- 数据网格 -->
                <div class="standard-grid news-grid">
                    <NewsCardComponent 
                        v-for="news in displayedNews" 
                        :key="news.id" 
                        :news="news"
                    />
                </div>
                
                <!-- 分页组件 -->
                <div class="pagination-wrapper">
                    <PaginationComponent 
                        :current-page="currentPage"
                        :total-pages="totalPages"
                        :total-items="filteredNews.length"
                        @page-change="handlePageChange"
                    />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NewsFilterComponent from '../components/NewsFilterComponent.vue'
import NewsCardComponent from '../components/NewsCardComponent.vue'
import PaginationComponent from '../components/PaginationComponent.vue'

const allNews = ref([
    {
        id: 1,
        title: '甘肃文旅融合科学数据中心正式上线运行',
        summary: '甘肃文旅融合科学数据中心经过一年的建设和试运行，现已正式上线。该平台整合了全省文旅资源数据，为政府决策、科学研究和公众服务提供有力支撑。',
        date: '2026-03-15',
        category: 'platform',
        image: 'https://picsum.photos/400/300?random=1'
    },
    {
        id: 2,
        title: '全省文旅大数据平台建设推进会议召开',
        summary: '甘肃省文化和旅游厅召开全省文旅大数据平台建设推进会议，总结前期工作成果，部署下一阶段重点任务，推动文旅数字化转型。',
        date: '2026-03-12',
        category: 'platform',
        image: 'https://picsum.photos/400/300?random=2'
    },
    {
        id: 3,
        title: '文旅融合科技创新项目获得省级表彰',
        summary: '甘肃省文旅融合科学数据中心申报的"基于大数据的文旅融合创新平台"项目荣获甘肃省科技进步奖，标志着中心在科技创新方面取得重要突破。',
        date: '2026-03-10',
        category: 'activity',
        image: 'https://picsum.photos/400/300?random=3'
    },
    {
        id: 4,
        title: '数据中心发布 2026 年第一季度旅游趋势报告',
        summary: '报告显示，甘肃省第一季度旅游接待量同比增长 15%，其中敦煌莫高窟、张掖丹霞等热门景区游客量创历史新高。',
        date: '2026-03-08',
        category: 'industry',
        image: 'https://picsum.photos/400/300?random=4'
    },
    {
        id: 5,
        title: '《甘肃省文旅融合发展条例》正式实施',
        summary: '《甘肃省文旅融合发展条例》于 3 月 1 日起正式实施，为全省文旅融合发展提供了法律保障和制度支撑。',
        date: '2026-03-05',
        category: 'policy',
        image: 'https://picsum.photos/400/300?random=5'
    },
    {
        id: 6,
        title: '敦煌莫高窟数字化保护项目取得新进展',
        summary: '敦煌研究院与甘肃文旅融合科学数据中心合作，完成莫高窟第 285 窟高精度数字化采集，为文化遗产保护提供技术支持。',
        date: '2026-03-02',
        category: 'platform',
        image: 'https://picsum.photos/400/300?random=6'
    },
    {
        id: 7,
        title: '甘肃省智慧旅游平台用户突破百万',
        summary: '甘肃省智慧旅游平台累计注册用户突破 100 万，平台提供的智能导览、在线预订等服务深受游客欢迎。',
        date: '2026-02-28',
        category: 'industry',
        image: 'https://picsum.photos/400/300?random=7'
    },
    {
        id: 8,
        title: '文旅融合创新大赛报名启动',
        summary: '2026 年甘肃文旅融合创新大赛正式启动，面向全国征集文旅融合创新项目和创意方案，推动文旅产业高质量发展。',
        date: '2026-02-25',
        category: 'activity',
        image: 'https://picsum.photos/400/300?random=8'
    },
    {
        id: 9,
        title: '丝绸之路文化遗产数字化工程启动',
        summary: '丝绸之路文化遗产数字化工程在兰州启动，计划用三年时间完成甘肃段主要文化遗产的数字化采集和展示。',
        date: '2026-02-22',
        category: 'platform',
        image: 'https://picsum.photos/400/300?random=9'
    },
    {
        id: 10,
        title: '甘肃省文旅产业投资洽谈会圆满举行',
        summary: '甘肃省文旅产业投资洽谈会在兰州举行，现场签约项目 28 个，总投资额达 156 亿元，为文旅产业发展注入新动力。',
        date: '2026-02-20',
        category: 'industry',
        image: 'https://picsum.photos/400/300?random=10'
    },
    {
        id: 11,
        title: '《甘肃省数字文旅发展三年行动计划》发布',
        summary: '甘肃省发布《数字文旅发展三年行动计划（2026-2028）》，明确数字文旅发展目标和重点任务，推动文旅产业数字化转型。',
        date: '2026-02-18',
        category: 'policy',
        image: 'https://picsum.photos/400/300?random=11'
    },
    {
        id: 12,
        title: '文旅融合数据中心与高校签署合作协议',
        summary: '甘肃文旅融合科学数据中心与兰州大学、西北师范大学等高校签署战略合作协议，共同推进文旅数据研究和人才培养。',
        date: '2026-02-15',
        category: 'platform',
        image: 'https://picsum.photos/400/300?random=12'
    }
])

const currentFilter = ref({ category: 'all', period: 'all', keyword: '' })
const currentPage = ref(1)
const itemsPerPage = 6

const filteredNews = computed(() => {
    let result = [...allNews.value]
    
    if (currentFilter.value.category !== 'all') {
        result = result.filter(news => news.category === currentFilter.value.category)
    }
    
    if (currentFilter.value.period !== 'all') {
        const now = new Date()
        const newsDate = (dateStr) => new Date(dateStr)
        
        result = result.filter(news => {
            const diffDays = Math.floor((now - newsDate(news.date)) / (1000 * 60 * 60 * 24))
            
            switch (currentFilter.value.period) {
                case 'week':
                    return diffDays <= 7
                case 'month':
                    return diffDays <= 30
                case 'quarter':
                    return diffDays <= 90
                default:
                    return true
            }
        })
    }
    
    if (currentFilter.value.keyword) {
        const keyword = currentFilter.value.keyword.toLowerCase()
        result = result.filter(news => 
            news.title.toLowerCase().includes(keyword) ||
            news.summary.toLowerCase().includes(keyword)
        )
    }
    
    return result
})

const totalPages = computed(() => Math.ceil(filteredNews.value.length / itemsPerPage))

const displayedNews = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredNews.value.slice(start, end)
})

const handleFilterChange = (filter) => {
    currentFilter.value = { ...currentFilter.value, ...filter }
    currentPage.value = 1
}

const handlePageChange = (page) => {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
    margin-top: 30px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .standard-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .standard-grid {
        grid-template-columns: 1fr;
    }
    
    .main-content {
        padding: 20px 0;
    }
}
</style>
