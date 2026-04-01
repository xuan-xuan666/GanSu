<template>
    <div class="tourism-page">
        <div class="main-content">
            <div class="sidebar">
                <div class="filter-group">
                    <h3 class="filter-title">按资源类型</h3>
                    <ul class="filter-list">
                        <li v-for="item in typeFilters" :key="item" :class="{ active: selectedType === item }" @click="selectedType = item">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div class="filter-group">
                    <h3 class="filter-title">按地理区域</h3>
                    <ul class="filter-list">
                        <li v-for="item in regionFilters" :key="item" :class="{ active: selectedRegion === item }" @click="selectedRegion = item">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div class="filter-group">
                    <h3 class="filter-title">按主题类型</h3>
                    <ul class="filter-list">
                        <li v-for="item in themeFilters" :key="item" :class="{ active: selectedTheme === item }" @click="selectedTheme = item">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="content-area">
                <div class="map-section">
                    <h3 class="section-title">甘肃地图 · 交互式</h3>
                    <div class="gansu-map" @click="handleMapClick">
                        <div class="map-placeholder">
                            <div class="map-icon">🗺️</div>
                            <p>甘肃地图</p>
                            <p class="map-hint">点击地图区域查看资源</p>
                        </div>
                        <div class="map-regions">
                            <div class="region" data-region="河西走廊">河西走廊</div>
                            <div class="region" data-region="陇中">陇中</div>
                            <div class="region" data-region="陇东南">陇东南</div>
                        </div>
                    </div>
                    <div class="map-info" v-if="selectedMapRegion">
                        <span class="region-badge">{{ selectedMapRegion }}</span>
                    </div>
                </div>

                <div class="resource-list">
                    <h3 class="section-title">资源列表</h3>
                    <div class="resources-grid">
                        <div class="resource-card" v-for="resource in filteredResources" :key="resource.id">
                            <div class="card-image">
                                <div class="image-placeholder" :style="{ backgroundImage: resource.image ? 'url(' + resource.image + ')' : '' }">
                                    <span class="image-icon">{{ resource.imageIcon || '📷' }}</span>
                                </div>
                                <span class="resource-level">{{ resource.level }}</span>
                            </div>
                            <div class="card-content">
                                <h4>{{ resource.name }}</h4>
                                <div class="resource-meta">
                                    <span class="meta-item">{{ resource.type }}</span>
                                    <span class="meta-item">{{ resource.region }}</span>
                                </div>
                                <div class="resource-coords">
                                    <span>📍 {{ resource.coords }}</span>
                                </div>
                                <p class="resource-desc">{{ resource.description }}</p>
                                <div class="data-types">
                                    <span v-for="dataType in resource.dataTypes" :key="dataType" class="data-tag">{{ dataType }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="statistics-section">
                    <h3 class="section-title">数据统计</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-header">
                                <h4>类型分布</h4>
                                <span class="stat-icon">📊</span>
                            </div>
                            <div class="stat-content">
                                <div class="stat-bar" v-for="stat in typeStats" :key="stat.type">
                                    <span class="stat-label">{{ stat.type }}</span>
                                    <div class="stat-bar-bg">
                                        <div class="stat-bar-fill" :style="{ width: stat.percent + '%' }"></div>
                                    </div>
                                    <span class="stat-value">{{ stat.count }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-header">
                                <h4>保护等级</h4>
                                <span class="stat-icon">🏅</span>
                            </div>
                            <div class="stat-content">
                                <div class="stat-pie">
                                    <div class="pie-segment" style="background: #4fc3f7; transform: rotate(0deg);"></div>
                                    <div class="pie-segment" style="background: #81d4fa; transform: rotate(120deg);"></div>
                                    <div class="pie-segment" style="background: #b3e5fc; transform: rotate(240deg);"></div>
                                    <div class="pie-center">
                                        <span class="pie-text">5</span>
                                    </div>
                                </div>
                                <div class="pie-legend">
                                    <div class="legend-item">
                                        <span class="legend-color" style="background: #4fc3f7;"></span>
                                        <span>世界遗产</span>
                                        <span class="legend-count">1</span>
                                    </div>
                                    <div class="legend-item">
                                        <span class="legend-color" style="background: #81d4fa;"></span>
                                        <span>5A级景区</span>
                                        <span class="legend-count">2</span>
                                    </div>
                                    <div class="legend-item">
                                        <span class="legend-color" style="background: #b3e5fc;"></span>
                                        <span>文物保护</span>
                                        <span class="legend-count">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-header">
                                <h4>年代分布</h4>
                                <span class="stat-icon">⏳</span>
                            </div>
                            <div class="stat-content">
                                <div class="stat-bar" v-for="stat in eraStats" :key="stat.era">
                                    <span class="stat-label">{{ stat.era }}</span>
                                    <div class="stat-bar-bg">
                                        <div class="stat-bar-fill" :style="{ width: stat.percent + '%' }"></div>
                                    </div>
                                    <span class="stat-value">{{ stat.count }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedType = ref('')
const selectedRegion = ref('')
const selectedTheme = ref('')
const selectedMapRegion = ref('')

const typeFilters = ['世界遗产', '5A级景区', '文物保护单位', '红色旅游资源']
const regionFilters = ['河西走廊片区', '陇中片区', '陇东南片区']
const themeFilters = ['石窟艺术', '长城遗址', '民族风情']

const resources = [
    {
        id: 1,
        name: '莫高窟',
        type: '世界遗产',
        region: '河西走廊片区',
        theme: '石窟艺术',
        level: '世界遗产',
        coords: '39.945°N, 94.875°E',
        description: '世界文化遗产，中国四大石窟之首，拥有千年历史的佛教艺术宝库',
        dataTypes: ['三维点云数据', '壁画多光谱数据'],
        imageIcon: '窟'
    },
    {
        id: 2,
        name: '鸣沙山',
        type: '5A级景区',
        region: '河西走廊片区',
        theme: '民族风情',
        level: '5A级景区',
        coords: '40.005°N, 94.635°E',
        description: '国家级风景名胜区，以鸣沙山、月牙泉著称的沙漠奇观',
        dataTypes: ['地形变迁时序数据(2010-2025)'],
        imageIcon: '沙'
    },
    {
        id: 3,
        name: '嘉峪关',
        type: '5A级景区',
        region: '河西走廊片区',
        theme: '长城遗址',
        level: '5A级景区',
        coords: '39.735°N, 98.255°E',
        description: '明代万里长城西端起点，天下第一雄关，古代丝绸之路交通要塞',
        dataTypes: ['结构健康监测数据(温度/沉降/裂缝)'],
        imageIcon: '关'
    },
    {
        id: 4,
        name: '麦积山石窟',
        type: '世界遗产',
        region: '陇东南片区',
        theme: '石窟艺术',
        level: '世界遗产',
        coords: '34.585°N, 105.755°E',
        description: '中国四大石窟之一，以泥塑艺术著称，被誉为东方雕塑陈列馆',
        dataTypes: ['三维点云数据', '壁画多光谱数据'],
        imageIcon: '麦'
    },
    {
        id: 5,
        name: '崆峒山',
        type: '5A级景区',
        region: '陇中片区',
        theme: '民族风情',
        level: '5A级景区',
        coords: '35.535°N, 106.725°E',
        description: '中华道教第一山，黄帝问道于广成子之地，自然与文化双遗产',
        dataTypes: ['生态监测数据', '气候数据'],
        imageIcon: '崆'
    },
    {
        id: 6,
        name: '山丹军马场',
        type: '文物保护单位',
        region: '河西走廊片区',
        theme: '民族风情',
        level: '文物保护单位',
        coords: '38.965°N, 101.325°E',
        description: '亚洲最大、世界第二大军马场，具有悠久的牧马历史',
        dataTypes: ['草原生态数据', '气候变迁数据'],
        imageIcon: '马'
    },
    {
        id: 7,
        name: '玉门关',
        type: '文物保护单位',
        region: '河西走廊片区',
        theme: '长城遗址',
        level: '文物保护单位',
        coords: '40.145°N, 94.275°E',
        description: '汉代玉门关遗址，丝绸之路重要关隘，大漠孤烟直的诗意之地',
        dataTypes: ['遗址监测数据', '环境监测数据'],
        imageIcon: '关'
    },
    {
        id: 8,
        name: '南梁革命纪念馆',
        type: '红色旅游资源',
        region: '陇东南片区',
        theme: '红色旅游资源',
        level: '红色旅游资源',
        coords: '35.705°N, 107.945°E',
        description: '陕甘边区苏维埃政府旧址，重要的革命传统教育基地',
        dataTypes: ['红色文化数据', '游客流量数据'],
        imageIcon: '红'
    }
]

const filteredResources = computed(() => {
    return resources.filter(resource => {
        if (selectedType.value && resource.type !== selectedType.value) return false
        if (selectedRegion.value && resource.region !== selectedRegion.value) return false
        if (selectedTheme.value && resource.theme !== selectedTheme.value) return false
        return true
    })
})

const typeStats = [
    { type: '世界遗产', count: 2, percent: 25 },
    { type: '5A级景区', count: 3, percent: 37.5 },
    { type: '文物保护', count: 2, percent: 25 },
    { type: '红色旅游', count: 1, percent: 12.5 }
]

const eraStats = [
    { era: '汉代', count: 2, percent: 25 },
    { era: '唐代', count: 1, percent: 12.5 },
    { era: '明代', count: 2, percent: 25 },
    { era: '现代', count: 3, percent: 37.5 }
]

const handleMapClick = (e) => {
    const region = e.target.dataset?.region || e.target.closest('.region')?.dataset?.region
    if (region) {
        selectedMapRegion.value = region
    }
}
</script>

<style scoped>
.tourism-page {
    min-height: 100vh;
}

.main-content {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    gap: 20px;
}

.sidebar {
    width: 280px;
    flex-shrink: 0;
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    height: fit-content;
}

.filter-group {
    margin-bottom: 25px;
}

.filter-title {
    font-size: 16px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
}

.filter-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.filter-list li {
    padding: 10px 15px;
    background: #f5f5f5;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
}

.filter-list li:hover {
    background: #e3f2fd;
}

.filter-list li.active {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    font-weight: 500;
}

.content-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.map-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.section-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
}

.gansu-map {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.map-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #1a237e;
}

.map-icon {
    font-size: 64px;
    margin-bottom: 15px;
}

.map-placeholder p {
    font-size: 18px;
    font-weight: 500;
}

.map-hint {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
}

.map-regions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.region {
    position: absolute;
    background: rgba(255,255,255,0.6);
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    pointer-events: auto;
    cursor: pointer;
    transition: all 0.3s;
}

.region:hover {
    background: rgba(0,93,166,0.8);
    color: #fff;
}

.map-info {
    margin-top: 15px;
    padding: 10px;
    background: #e3f2fd;
    border-radius: 6px;
    text-align: center;
}

.region-badge {
    display: inline-block;
    padding: 5px 15px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    border-radius: 20px;
    font-weight: 500;
}

.resource-list {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
}

.resource-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    transition: all 0.3s;
}

.resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.card-image {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.image-placeholder {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 48px;
}

.image-icon {
    font-size: 64px;
}

.resource-level {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 12px;
    background: rgba(0,93,166,0.9);
    color: #fff;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.card-content {
    padding: 20px;
}

.card-content h4 {
    font-size: 18px;
    color: #1a237e;
    margin-bottom: 10px;
    font-weight: 600;
}

.resource-meta {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
}

.meta-item {
    padding: 3px 10px;
    background: #e3f2fd;
    border-radius: 15px;
    font-size: 12px;
    color: #005da6;
}

.resource-coords {
    margin-bottom: 12px;
    font-size: 13px;
    color: #666;
}

.resource-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 12px;
}

.data-types {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.data-tag {
    padding: 4px 12px;
    background: linear-gradient(135deg, #4fc3f7 0%, #81d4fa 100%);
    color: #fff;
    border-radius: 15px;
    font-size: 12px;
}

.statistics-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.stat-card {
    background: #f9f9f9;
    border-radius: 12px;
    padding: 20px;
}

.stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.stat-header h4 {
    font-size: 16px;
    color: #1a237e;
    font-weight: 600;
}

.stat-icon {
    font-size: 24px;
}

.stat-content {
    padding: 10px 0;
}

.stat-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
}

.stat-label {
    width: 80px;
    font-size: 13px;
    color: #333;
}

.stat-bar-bg {
    flex: 1;
    height: 20px;
    background: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
}

.stat-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #005da6 0%, #0079b8 100%);
    border-radius: 10px;
    transition: width 0.5s;
}

.stat-value {
    width: 40px;
    text-align: right;
    font-size: 13px;
    color: #666;
}

.stat-pie {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: conic-gradient(
        #4fc3f7 0% 25%,
        #81d4fa 25% 62.5%,
        #b3e5fc 62.5% 100%
    );
    margin: 0 auto 20px;
    position: relative;
}

.pie-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pie-text {
    font-size: 20px;
    font-weight: 700;
    color: #1a237e;
}

.pie-legend {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
}

.legend-color {
    width: 16px;
    height: 16px;
    border-radius: 4px;
}

.legend-count {
    margin-left: auto;
    font-weight: 500;
}
</style>
