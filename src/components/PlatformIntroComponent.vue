<template>
    <section class="platform-intro">
        <div class="container">
            <div class="section-title">
                <h2>平台介绍</h2>
            </div>
            <div class="intro-content">
                <div class="intro-text">
                    <p>{{ platformIntro }}</p>
                </div>
                <div class="intro-stats">
                    <div class="stat-item" v-for="(stat, index) in platformStats" :key="index">
                        <div class="stat-number">{{ stat.number }}</div>
                        <div class="stat-label">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const platformIntro = '甘肃文旅融合科学数据中心是甘肃省重点建设的科学数据平台，致力于整合全省文旅资源，提供全面的数据服务和分析支持。中心依托先进的大数据技术，为政府决策、科学研究和公众服务提供有力支撑。'
const platformStats = [
    { number: '1000+', label: '数据资源' },
    { number: '50+', label: '专题项目' },
    { number: '100万+', label: '访问量' },
    { number: '20+', label: '合作单位' }
]
</script>

<style scoped>
.platform-intro {
    padding: 60px 0;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
}

.intro-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
}

.intro-text {
    flex: 1;
}

.intro-text p {
    font-size: 15px;
    line-height: 1.8;
    color: #e3f2fd;
}

.intro-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.stat-item {
    text-align: center;
    padding: 20px;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
}

.stat-number {
    font-size: 36px;
    font-weight: 600;
    color: #4fc3f7;
    margin-bottom: 10px;
}

.stat-label {
    font-size: 14px;
    color: #e3f2fd;
}

@media (max-width: 768px) {
    .intro-content {
        flex-direction: column;
    }
}
</style>
