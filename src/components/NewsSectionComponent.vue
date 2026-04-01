<template>
    <section class="content-section">
        <div class="container">
            <div class="section-title">
                <h2>综合新闻</h2>
                <a href="/news" class="more-link">更多 &gt;</a>
            </div>
            <div class="news-list">
                <div class="news-item" v-for="(news, index) in newsList" :key="index">
                    <span class="news-date">{{ news.date }}</span>
                    <a :href="news.href" class="news-title">{{ news.title }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const newsList = [
    { date: '2026-03-01', title: '甘肃文旅融合科学数据中心正式上线运行', href: 'javascript:;' },
    { date: '2026-02-28', title: '全省文旅大数据平台建设推进会议召开', href: 'javascript:;' },
    { date: '2026-02-25', title: '文旅融合科技创新项目获得省级表彰', href: 'javascript:;' },
    { date: '2026-02-20', title: '数据中心发布2026年第一季度旅游趋势报告', href: 'javascript:;' }
]
</script>

<style scoped>
.content-section {
    padding: 60px 60px;
    background: #fff;
}

.section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e0e0e0;
}

.section-title h2 {
    font-size: 24px;
    color: #1a237e;
    font-weight: 600;
}

.more-link {
    color: #005da6;
    font-weight: 500;
}

.news-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.news-item {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s;
}

.news-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.news-date {
    display: block;
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
}

.news-title {
    display: block;
    color: #333;
    font-size: 15px;
    line-height: 1.4;
}

.news-title:hover {
    color: #005da6;
}

@media (max-width: 768px) {
    .news-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
