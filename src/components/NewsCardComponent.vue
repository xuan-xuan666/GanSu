<template>
    <div class="news-card" @click="goToDetail">
        <div class="news-image">
            <img :src="news.image" :alt="news.title">
            <div class="news-category">{{ getCategoryLabel(news.category) }}</div>
        </div>
        <div class="news-content">
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-summary">{{ news.summary }}</p>
            <div class="news-footer">
                <span class="news-date">{{ news.date }}</span>
                <span class="read-more">阅读更多 →</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    news: {
        type: Object,
        required: true
    }
})

const router = useRouter()

const getCategoryLabel = (category) => {
    const labels = {
        platform: '平台动态',
        activity: '活动资讯',
        industry: '行业资讯',
        policy: '政策法规'
    }
    return labels[category] || category
}

const goToDetail = () => {
    router.push(`/news/${props.news.id}`)
}
</script>

<style scoped>
.news-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.news-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.news-card:hover .news-image img {
    transform: scale(1.1);
}

.news-category {
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.news-content {
    padding: 20px;
}

.news-title {
    font-size: 16px;
    color: #1a237e;
    margin-bottom: 10px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-summary {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.news-date {
    font-size: 13px;
    color: #999;
}

.read-more {
    font-size: 13px;
    color: #4fc3f7;
    font-weight: 500;
    transition: color 0.3s;
}

.read-more:hover {
    color: #1a237e;
}
</style>
