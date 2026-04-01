<template>
    <div class="standard-detail-page news-detail-page">
        <main class="news-detail-content">
            <div class="container">
                <!-- 返回按钮 -->
                <div class="back-link">
                    <router-link to="/news" class="back-btn">
                        <span>&lt; 返回新闻列表</span>
                    </router-link>
                </div>
                
                <!-- 新闻文章 -->
                <article class="news-article" v-if="newsDetail">
                    <div class="article-header">
                        <h1 class="article-title">{{ newsDetail.title }}</h1>
                        <div class="article-meta">
                            <span class="article-category">{{ getCategoryLabel(newsDetail.category) }}</span>
                            <span class="article-date">{{ newsDetail.date }}</span>
                            <span class="article-views">浏览：{{ newsDetail.views || 0 }}</span>
                        </div>
                    </div>
                    
                    <!-- 文章图片 -->
                    <div class="article-image" v-if="newsDetail.image">
                        <img :src="newsDetail.image" :alt="newsDetail.title">
                    </div>
                    
                    <!-- 文章内容 -->
                    <div class="article-body">
                        <p class="article-summary">{{ newsDetail.summary }}</p>
                        <div class="article-content" v-html="newsDetail.content"></div>
                    </div>
                    
                    <!-- 文章底部 -->
                    <div class="article-footer">
                        <div class="article-tags">
                            <span class="tag">甘肃文旅</span>
                            <span class="tag">数据中心</span>
                            <span class="tag">文旅融合</span>
                        </div>
                        <div class="article-share">
                            <button class="share-btn">分享</button>
                            <button class="share-btn">收藏</button>
                        </div>
                    </div>
                </article>
                
                <!-- 相关新闻 -->
                <div class="related-news" v-if="relatedNews.length > 0">
                    <h3>相关新闻</h3>
                    <div class="related-list">
                        <div 
                            class="related-item" 
                            v-for="news in relatedNews" 
                            :key="news.id"
                            @click="goToDetail(news.id)"
                        >
                            <div class="related-image" v-if="news.image">
                                <img :src="news.image" :alt="news.title">
                            </div>
                            <div class="related-info">
                                <h4>{{ news.title }}</h4>
                                <span class="related-date">{{ news.date }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const allNews = ref([
    {
        id: 1,
        title: '甘肃文旅融合科学数据中心正式上线运行',
        summary: '甘肃文旅融合科学数据中心经过一年的建设和试运行，现已正式上线。该平台整合了全省文旅资源数据，为政府决策、科学研究和公众服务提供有力支撑。',
        content: `<p>甘肃文旅融合科学数据中心经过一年的建设和试运行，现已正式上线。该平台整合了全省文旅资源数据，为政府决策、科学研究和公众服务提供有力支撑。</p>
        <p>中心依托先进的大数据技术，构建了覆盖全省的文旅数据采集、存储、分析和应用体系。平台整合了旅游资源、游客行为、环境监测、文化遗产等多维度数据，实现了数据的实时监测和动态更新。</p>
        <p>在数据服务方面，中心提供了数据查询、统计分析、可视化展示等功能，用户可以通过平台获取各类文旅数据和分析报告。同时，中心还建立了完善的数据安全保障机制，确保数据的安全性和可靠性。</p>
        <p>未来，中心将继续完善数据资源体系，拓展数据应用场景，为甘肃文旅产业的高质量发展提供更加有力的数据支撑。</p>`,
        date: '2026-03-15',
        category: 'platform',
        image: 'https://picsum.photos/800/400?random=1',
        views: 1234
    },
    {
        id: 2,
        title: '全省文旅大数据平台建设推进会议召开',
        summary: '甘肃省文化和旅游厅召开全省文旅大数据平台建设推进会议，总结前期工作成果，部署下一阶段重点任务，推动文旅数字化转型。',
        content: `<p>甘肃省文化和旅游厅召开全省文旅大数据平台建设推进会议，总结前期工作成果，部署下一阶段重点任务，推动文旅数字化转型。</p>
        <p>会议指出，近年来甘肃省文旅大数据平台建设取得了显著成效，数据资源不断丰富，应用场景持续拓展，服务能力显著提升。但同时也要清醒地认识到，平台建设还存在数据共享不充分、应用深度不够等问题。</p>
        <p>会议强调，下一阶段要重点做好以下工作：一是完善数据标准体系，推动数据规范采集和共享；二是深化数据应用，开发更多实用的数据产品和服务；三是加强安全保障，建立健全数据安全管理制度；四是培养专业人才，提升数据分析和应用能力。</p>
        <p>各市州文旅部门负责人、相关企业代表参加了会议。大家纷纷表示，将认真贯彻落实会议精神，加快推进本地文旅大数据平台建设，为全省文旅产业发展贡献力量。</p>`,
        date: '2026-03-12',
        category: 'platform',
        image: 'https://picsum.photos/800/400?random=2',
        views: 987
    },
    {
        id: 3,
        title: '文旅融合科技创新项目获得省级表彰',
        summary: '甘肃省文旅融合科学数据中心申报的"基于大数据的文旅融合创新平台"项目荣获甘肃省科技进步奖，标志着中心在科技创新方面取得重要突破。',
        content: `<p>甘肃省文旅融合科学数据中心申报的"基于大数据的文旅融合创新平台"项目荣获甘肃省科技进步奖，标志着中心在科技创新方面取得重要突破。</p>
        <p>该项目针对文旅产业数据分散、应用不足的问题，创新性地提出了多源数据融合分析框架，开发了具有自主知识产权的文旅大数据平台。平台已在多个市州和景区推广应用，取得了显著的经济效益和社会效益。</p>
        <p>下一步，中心将继续加大科技创新力度，深化与高校、科研院所的合作，推动更多科技成果在文旅领域转化应用。</p>`,
        date: '2026-03-10',
        category: 'activity',
        image: 'https://picsum.photos/800/400?random=3',
        views: 756
    }
])

const newsDetail = computed(() => {
    const id = parseInt(route.params.id)
    return allNews.value.find(news => news.id === id) || null
})

const relatedNews = computed(() => {
    if (!newsDetail.value) return []
    return allNews.value
        .filter(news => news.id !== newsDetail.value.id && news.category === newsDetail.value.category)
        .slice(0, 3)
})

const getCategoryLabel = (category) => {
    const categoryMap = {
        platform: '平台建设',
        activity: '行业动态',
        industry: '产业资讯',
        policy: '政策法规'
    }
    return categoryMap[category] || '其他'
}

const goToDetail = (id) => {
    router.push(`/newsDetail/${id}`)
}

onMounted(() => {
    window.scrollTo(0, 0)
})
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

/* 主内容区域 */
.news-detail-content {
    padding: 40px 0;
}

/* 返回按钮 */
.back-link {
    margin-bottom: 30px;
}

.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: #fff;
    color: #1a237e;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.back-btn:hover {
    background: #1a237e;
    color: #fff;
}

/* 文章样式 */
.news-article {
    background: #fff;
    border-radius: 8px;
    padding: 40px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    margin-bottom: 30px;
}

.article-header {
    margin-bottom: 30px;
}

.article-title {
    font-size: 32px;
    color: #1a237e;
    margin: 0 0 20px 0;
    font-weight: 600;
    line-height: 1.4;
}

.article-meta {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.article-category,
.article-date,
.article-views {
    font-size: 14px;
    color: #999;
}

.article-category {
    padding: 4px 12px;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    border-radius: 12px;
}

/* 文章图片 */
.article-image {
    margin-bottom: 30px;
    border-radius: 8px;
    overflow: hidden;
}

.article-image img {
    width: 100%;
    height: auto;
    display: block;
}

/* 文章正文 */
.article-body {
    margin-bottom: 30px;
}

.article-summary {
    font-size: 16px;
    color: #666;
    line-height: 1.8;
    margin-bottom: 30px;
    padding: 20px;
    background: #f9f9f9;
    border-left: 4px solid #1a237e;
    border-radius: 4px;
}

.article-content {
    font-size: 16px;
    color: #333;
    line-height: 1.8;
}

.article-content p {
    margin-bottom: 20px;
}

/* 文章底部 */
.article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    border-top: 1px solid #f0f0f0;
}

.article-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.tag {
    padding: 6px 12px;
    background: #f5f5f5;
    color: #666;
    border-radius: 16px;
    font-size: 13px;
}

.article-share {
    display: flex;
    gap: 10px;
}

.share-btn {
    padding: 8px 16px;
    background: #f5f5f5;
    color: #333;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
}

.share-btn:hover {
    background: #1a237e;
    color: #fff;
}

/* 相关新闻 */
.related-news {
    background: #fff;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.related-news h3 {
    font-size: 20px;
    color: #1a237e;
    margin: 0 0 20px 0;
    font-weight: 600;
}

.related-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.related-item {
    display: flex;
    gap: 20px;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.related-item:hover {
    background: #f9f9f9;
}

.related-image {
    width: 200px;
    height: 120px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
}

.related-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.related-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.related-info h4 {
    font-size: 16px;
    color: #333;
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.4;
}

.related-date {
    font-size: 13px;
    color: #999;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .news-article {
        padding: 25px;
    }
    
    .article-title {
        font-size: 24px;
    }
    
    .article-meta {
        flex-direction: column;
        gap: 10px;
    }
    
    .related-item {
        flex-direction: column;
    }
    
    .related-image {
        width: 100%;
        height: 180px;
    }
}

@media (max-width: 640px) {
    .news-detail-content {
        padding: 20px 0;
    }
    
    .article-footer {
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
    }
}
</style>
