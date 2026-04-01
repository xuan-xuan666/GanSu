<template>
    <section class="model-resources">
        <div class="container">
            <div class="section-title">
                <h2>模型资源</h2>
                <a href="/model" class="more-link">更多 &gt;</a>
            </div>
            <div class="models-list">
                <div class="model-item" v-for="(model, index) in modelResources" :key="index">
                    <div class="model-content">
                        <h4>{{ model.title }}</h4>
                        <p>{{ model.description }}</p>
                        <a :href="model.href" class="model-link">详情 &gt;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const modelResources = [
    { title: '旅游流量预测模型', description: '基于历史数据的旅游流量预测分析模型', href: 'javascript:;' },
    { title: '游客偏好分析模型', description: '游客旅游偏好和行为模式分析模型', href: 'javascript:;' },
    { title: '资源评价模型', description: '旅游资源价值评估和分类模型', href: 'javascript:;' }
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
.model-resources {
    padding: 60px 60px;
    background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
}

.models-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.model-item {
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    transition: all 0.3s;
}

.model-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.model-content h4 {
    font-size: 16px;
    color: #1a237e;
    margin-bottom: 10px;
}

.model-content p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.model-link {
    color: #005da6;
    font-weight: 500;
}

@media (max-width: 768px) {
    .models-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
