<template>
    <section class="special-topic">
        <div class="container">
            <div class="section-title">
                <h2>专题数据</h2>
                <a href="/topic-data" class="more-link">更多 &gt;</a>
            </div>
            <div class="topic-grid">
                <div class="topic-item" v-for="(topic, index) in specialTopics" :key="index">
                    <div class="topic-image" :style="{ backgroundImage: 'url(' + topic.image + ')' }"></div>
                    <div class="topic-info">
                        <h3>{{ topic.title }}</h3>
                        <p>{{ topic.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const specialTopics = [
    { title: '黄河文化专题', description: '黄河流域文化遗产和旅游资源整合分析', image: 'https://picsum.photos/300/200?random=5' },
    { title: '丝绸之路专题', description: '古丝绸之路甘肃段文旅资源研究', image: 'https://picsum.photos/300/200?random=6' },
    { title: '生态旅游专题', description: '甘肃生态旅游资源开发与保护研究', image: 'https://picsum.photos/300/200?random=7' }
]
</script>

<style scoped>
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
.special-topic {
    padding: 60px 60px;
    background: #fff;
}

.topic-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.topic-item {
    display: flex;
    gap: 15px;
    background: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s;
}

.topic-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.topic-image {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
}

.topic-info {
    flex: 1;
    padding: 15px 0;
}

.topic-info h3 {
    font-size: 16px;
    color: #1a237e;
    margin-bottom: 8px;
}

.topic-info p {
    font-size: 13px;
    color: #666;
}

@media (max-width: 768px) {
    .topic-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
