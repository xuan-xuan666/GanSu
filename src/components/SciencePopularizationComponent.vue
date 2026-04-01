<template>
    <section class="science-popularization">
        <div class="container">
            <div class="section-title">
                <h2>科普专栏</h2>
                <a href="/popularization" class="more-link">更多 &gt;</a>
            </div>
            <div class="popularization-grid">
                <div class="pop-item" v-for="(item, index) in SPItems" :key="index">
                    <img :src="item.image" :alt="item.title">
                    <div class="pop-content">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const SPItems = [
    { title: '什么是科学数据中心', description: '了解科学数据中心的基本概念和功能', image: 'https://picsum.photos/280/200?random=8' },
    { title: '文旅融合的意义', description: '文旅融合对经济社会发展的重要作用', image: 'https://picsum.photos/280/200?random=9' },
    { title: '大数据在文旅中的应用', description: '大数据技术如何赋能文旅产业发展', image: 'https://picsum.photos/280/200?random=10' },
    { title: '智慧旅游指南', description: '如何利用数据中心获取旅游信息', image: 'https://picsum.photos/280/200?random=11' }
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
.science-popularization {
    padding: 60px 60px;
    background: #fff;
}

.popularization-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.pop-item {
    background: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s;
}

.pop-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.pop-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.pop-content {
    padding: 15px;
}

.pop-content h4 {
    font-size: 15px;
    color: #1a237e;
    margin-bottom: 8px;
}

.pop-content p {
    font-size: 13px;
    color: #666;
}

@media (max-width: 768px) {
    .popularization-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
