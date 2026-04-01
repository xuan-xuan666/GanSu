<template>
    <section id="data-source" class="data-resources">
        <div class="container">
            <div class="section-title">
                <h2>数据资源</h2>
                <a href="/data-resources" class="more-link">更多 &gt;</a>
            </div>
            <div class="resources-grid">
                <div 
                    class="resource-card" 
                    v-for="(resource, index) in dataResources" 
                    :key="index"
                    :class="{ 'clickable': resource.href && resource.href !== 'javascript:;' }"
                    @click="handleCardClick(resource)"
                >
                    <h3>{{ resource.title }}</h3>
                    <p>{{ resource.description }}</p>
                    <a v-if="resource.href && resource.href !== 'javascript:;'" class="resource-link">进入 &gt;</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleCardClick = (resource) => {
    if (resource.href && resource.href !== 'javascript:;') {
        if (resource.subCategory) {
            router.push({
                path: resource.href,
                query: { sub: resource.subCategory }
            })
        } else {
            router.push(resource.href)
        }
    }
}

const dataResources = [
    { title: '旅游资源', description: '甘肃地图 + 地标图标', href: '/data-resources', subCategory: 'tourism-scenic' },
    { title: '生态监测', description: '动态气象云图图标', href: '/data-resources', subCategory: 'eco-air' },
    { title: '非遗资源', description: '剪纸/皮影动态图标', href: '/data-resources', subCategory: 'ich-un' },
    { title: '专题数据', description: '多图层叠加图标', href: '/topic-data' },
    { title: '文创数据', description: '三维文物旋转图标', href: '/data-resources', subCategory: 'creativity-arvr' },
    { title: '特色数据', description: '飞天舞蹈剪影图标', href: '/data-resources', subCategory: 'special-dunhuang' },
]
</script>

<style scoped>
.data-resources {
    padding: 60px 60px;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
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

.resources-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.resource-card {
    background: #fff;
    padding: 20px 10px;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.resource-card.clickable {
    cursor: pointer;
}

.resource-card.clickable:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
}

.resource-card h3 {
    font-size: 18px;
    color: #1a237e;
    margin-bottom: 10px;
}

.resource-card p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.resource-link {
    color: #005da6;
    font-weight: 500;
}

@media (max-width: 768px) {
    .resources-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
