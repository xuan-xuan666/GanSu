<template>
    <section class="data-overview">
        <div class="container">
            <div class="overview-title">
                <h2>核心数据总览</h2>
            </div>
            <div class="overview-grid">
                <div class="overview-item" v-for="(item, index) in overviewData" :key="index">
                    <div class="overview-label">{{ item.label }}</div>
                    <div class="overview-number">{{ item.number }}</div>
                    
                </div>
            </div>
            <div class="overview-details">
                <div class="map-panel">
                    <GansuMapComponent />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import GansuMapComponent from './GansuMapComponent.vue'

const overviewData = [
    { number: '128', label: '已收录旅游资源：' },
    { number: '45', label: '实时监测景区：' },
    { number: '86', label: '非遗数字化项目：' },
    { number: '3500+', label: '文创产品库：' }
]
</script>

<style scoped>
.data-overview {
    padding: 40px 0;
    background: linear-gradient(135deg, #fff 0%, #f5f7fa 100%);
}

.overview-title {
    text-align: center;
    margin-bottom: 30px;
}

.overview-title h2 {
    font-size: 28px;
    color: #1a237e;
    font-weight: 600;
}

.overview-grid {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.overview-item {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    padding: 25px 40px;
    border-radius: 10px;
    text-align: center;
    min-width: 200px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.overview-item:hover {
    transform: translateY(-5px);
}

.overview-number {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #4fc3f7;
}

.overview-label {
    font-size: 14px;
    color: #e3f2fd;
}

.overview-details {
    width: 100%;
}

.map-panel {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    overflow: hidden;
}

@media (max-width: 992px) {
    .overview-grid {
        flex-direction: column;
        align-items: center;
    }

    .overview-item {
        width: 100%;
        max-width: 300px;
    }
}

@media (max-width: 768px) {
    .overview-title h2 {
        font-size: 24px;
    }

    .overview-item {
        padding: 20px;
        min-width: 100%;
    }

    .overview-number {
        font-size: 28px;
    }
}
</style>
