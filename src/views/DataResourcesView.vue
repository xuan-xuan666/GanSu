<template>
    <div class="data-resources-page">
        <div class="main-content">
            <!-- 左侧可折叠分类菜单 -->
            <div class="sidebar">
                <div class="accordion-menu">
                    <!-- 旅游资源 -->
                    <div class="accordion-item">
                        <div class="accordion-header" @click="toggleCategory('tourism')">
                            <span class="category-name">旅游资源</span>
                            <span class="accordion-arrow" :class="{ active: expandedCategories.includes('tourism') }">▼</span>
                        </div>
                        <div class="accordion-content" v-show="expandedCategories.includes('tourism')">
                            <ul class="sub-category-list">
                                <li 
                                    v-for="sub in tourismSubCategories" 
                                    :key="sub.id"
                                    :class="{ active: selectedSubCategory === sub.id }"
                                    @click="selectSubCategory(sub.id)"
                                >
                                    {{ sub.name }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 生态监测 -->
                    <div class="accordion-item">
                        <div class="accordion-header" @click="toggleCategory('eco')">
                            <span class="category-name">生态监测</span>
                            <span class="accordion-arrow" :class="{ active: expandedCategories.includes('eco') }">▼</span>
                        </div>
                        <div class="accordion-content" v-show="expandedCategories.includes('eco')">
                            <ul class="sub-category-list">
                                <li 
                                    v-for="sub in ecoSubCategories" 
                                    :key="sub.id"
                                    :class="{ active: selectedSubCategory === sub.id }"
                                    @click="selectSubCategory(sub.id)"
                                >
                                    {{ sub.name }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 非遗资源 -->
                    <div class="accordion-item">
                        <div class="accordion-header" @click="toggleCategory('ich')">
                            <span class="category-name">非遗资源</span>
                            <span class="accordion-arrow" :class="{ active: expandedCategories.includes('ich') }">▼</span>
                        </div>
                        <div class="accordion-content" v-show="expandedCategories.includes('ich')">
                            <ul class="sub-category-list">
                                <li 
                                    v-for="sub in ichSubCategories" 
                                    :key="sub.id"
                                    :class="{ active: selectedSubCategory === sub.id }"
                                    @click="selectSubCategory(sub.id)"
                                >
                                    {{ sub.name }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 文创数据 -->
                    <div class="accordion-item">
                        <div class="accordion-header" @click="toggleCategory('creativity')">
                            <span class="category-name">文创数据</span>
                            <span class="accordion-arrow" :class="{ active: expandedCategories.includes('creativity') }">▼</span>
                        </div>
                        <div class="accordion-content" v-show="expandedCategories.includes('creativity')">
                            <ul class="sub-category-list">
                                <li 
                                    v-for="sub in creativitySubCategories" 
                                    :key="sub.id"
                                    :class="{ active: selectedSubCategory === sub.id }"
                                    @click="selectSubCategory(sub.id)"
                                >
                                    {{ sub.name }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 特色数据 -->
                    <div class="accordion-item">
                        <div class="accordion-header" @click="toggleCategory('special')">
                            <span class="category-name">特色数据</span>
                            <span class="accordion-arrow" :class="{ active: expandedCategories.includes('special') }">▼</span>
                        </div>
                        <div class="accordion-content" v-show="expandedCategories.includes('special')">
                            <ul class="sub-category-list">
                                <li 
                                    v-for="sub in specialSubCategories" 
                                    :key="sub.id"
                                    :class="{ active: selectedSubCategory === sub.id }"
                                    @click="selectSubCategory(sub.id)"
                                >
                                    {{ sub.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧内容区域 -->
            <div class="content-area">
                <!-- 旅游资源内容 -->
                <div v-if="selectedSubCategory.startsWith('tourism')" class="content-section">
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
                            <div class="resource-card" v-for="resource in filteredTourismResources" :key="resource.id">
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
                </div>

                <!-- 生态监测内容 -->
                <div v-if="selectedSubCategory.startsWith('eco')" class="content-section">
                    <div class="dashboard-section">
                        <h3 class="section-title">重点景区生态环境监测仪表盘</h3>
                        <div class="dashboard-grid">
                            <div class="dashboard-card" v-for="spot in monitoringSpots" :key="spot.name">
                                <div class="card-header">
                                    <h4>{{ spot.name }}</h4>
                                    <span class="status-badge" :class="spot.status">{{ spot.statusText }}</span>
                                </div>
                                <div class="card-body">
                                    <div class="metric" v-for="metric in spot.metrics" :key="metric.label">
                                        <div class="metric-label">{{ metric.label }}</div>
                                        <div class="metric-value">
                                            <span class="value">{{ metric.value }}</span>
                                            <span class="unit">{{ metric.unit }}</span>
                                        </div>
                                        <div class="metric-bar">
                                            <div class="metric-fill" :style="{ width: metric.percent + '%', background: metric.color }"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-section">
                        <h3 class="section-title">生态环境时空对比工具</h3>
                        <div class="timeline-container">
                            <div class="timeline-controls">
                                <button class="time-btn" @click="previousYear" :disabled="currentYearIndex === 0">
                                    ◀ 上一年
                                </button>
                                <div class="year-display">{{ currentYear }} 年</div>
                                <button class="time-btn" @click="nextYear" :disabled="currentYearIndex === years.length - 1">
                                    下一年 ▶
                                </button>
                            </div>
                            <div class="timeline-slider">
                                <input type="range" :min="0" :max="years.length - 1" v-model="currentYearIndex" class="slider">
                                <div class="year-labels">
                                    <span v-for="year in years" :key="year" class="year-label">{{ year }}</span>
                                </div>
                            </div>
                            <div class="comparison-view">
                                <div class="comparison-image left">
                                    <div class="image-placeholder">
                                        <p>{{ currentYear }}年 影像</p>
                                    </div>
                                </div>
                                <div class="comparison-divider">
                                    <div class="slider-handle"></div>
                                </div>
                                <div class="comparison-image right">
                                    <div class="image-placeholder">
                                        <p>2020 年 影像</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 非遗资源内容 -->
                <div v-if="selectedSubCategory.startsWith('ich')" class="content-section">
                    <div class="inheritance-section">
                        <h3 class="section-title">传承人关系图谱</h3>
                        <div class="inheritance-graph">
                            <div class="graph-container">
                                <div class="root-node">
                                    <div class="node-content">
                                        <span class="node-name">创始人/源头</span>
                                        <span class="node-time">清代</span>
                                    </div>
                                </div>
                                <div class="generation-line vertical"></div>
                                <div class="second-generation">
                                    <div class="node-branch">
                                        <div class="node-content">
                                            <span class="node-name">第一代传人</span>
                                            <span class="node-time">1890-1950</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="generation-line vertical"></div>
                                <div class="third-generation">
                                    <div class="node-branch">
                                        <div class="node-content">
                                            <span class="node-name">第二代传人</span>
                                            <span class="node-time">1920-1980</span>
                                        </div>
                                        <div class="node-tags">
                                            <span class="tag">省级传承人</span>
                                        </div>
                                    </div>
                                    <div class="node-branch">
                                        <div class="node-content">
                                            <span class="node-name">第二代传人 B</span>
                                            <span class="node-time">1925-1985</span>
                                        </div>
                                        <div class="node-tags">
                                            <span class="tag">国家级传承人</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="generation-line vertical"></div>
                                <div class="fourth-generation">
                                    <div class="node-branch">
                                        <div class="node-content">
                                            <span class="node-name">第三代传人</span>
                                            <span class="node-time">1955-</span>
                                        </div>
                                        <div class="node-tags">
                                            <span class="tag active">现任传承人</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="multimedia-section">
                        <h3 class="section-title">多媒体展示区</h3>
                        <div class="multimedia-container">
                            <div class="video-player">
                                <div class="video-placeholder">
                                    <div class="play-button">▶</div>
                                    <p>工艺步骤分解视频</p>
                                </div>
                            </div>
                            <div class="step-list">
                                <h4>工艺步骤</h4>
                                <div class="step-items">
                                    <div class="step-item active">
                                        <span class="step-number">1</span>
                                        <span class="step-name">原材料准备</span>
                                    </div>
                                    <div class="step-item">
                                        <span class="step-number">2</span>
                                        <span class="step-name">初步加工</span>
                                    </div>
                                    <div class="step-item">
                                        <span class="step-number">3</span>
                                        <span class="step-name">精细雕刻</span>
                                    </div>
                                    <div class="step-item">
                                        <span class="step-number">4</span>
                                        <span class="step-name">上色处理</span>
                                    </div>
                                    <div class="step-item">
                                        <span class="step-number">5</span>
                                        <span class="step-name">成品修饰</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 文创数据内容 -->
                <div v-if="selectedSubCategory.startsWith('creativity')" class="content-section">
                    <div class="overview-section">
                        <h3 class="section-title">AR/VR 体验资源</h3>
                        <div class="resources-grid">
                            <div class="resource-card" v-for="resource in arvrResources" :key="resource.id">
                                <div class="card-image">
                                    <div class="image-placeholder" :style="{ backgroundImage: resource.image ? 'url(' + resource.image + ')' : '' }">
                                        <span class="image-icon">{{ resource.imageIcon }}</span>
                                    </div>
                                    <span class="resource-type">{{ resource.type }}</span>
                                </div>
                                <div class="card-content">
                                    <h4>{{ resource.name }}</h4>
                                    <div class="resource-meta">
                                        <span class="meta-item">{{ resource.level }}</span>
                                        <span class="meta-item">{{ resource.format }}</span>
                                    </div>
                                    <p class="resource-desc">{{ resource.description }}</p>
                                    <div class="data-tags">
                                        <span class="tag">体验时长：{{ resource.duration }}</span>
                                        <span class="tag">文件大小：{{ resource.size }}</span>
                                    </div>
                                    <div class="card-actions">
                                        <button class="action-btn primary">🎮 体验</button>
                                        <button class="action-btn">📥 下载</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overview-section">
                        <h3 class="section-title">数字藏品</h3>
                        <div class="resources-grid">
                            <div class="resource-card" v-for="resource in digitalResources" :key="resource.id">
                                <div class="card-image">
                                    <div class="image-placeholder" :style="{ backgroundImage: resource.image ? 'url(' + resource.image + ')' : '' }">
                                        <span class="image-icon">{{ resource.imageIcon }}</span>
                                    </div>
                                    <span class="resource-type">{{ resource.rarity }}</span>
                                </div>
                                <div class="card-content">
                                    <h4>{{ resource.name }}</h4>
                                    <div class="resource-meta">
                                        <span class="meta-item">{{ resource.category }}</span>
                                        <span class="meta-item">发行量：{{ resource.edition }}</span>
                                    </div>
                                    <p class="resource-desc">{{ resource.description }}</p>
                                    <div class="data-tags">
                                        <span class="tag">区块链：{{ resource.blockchain }}</span>
                                        <span class="tag">编号：{{ resource.serialNumber }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 特色数据内容 -->
                <div v-if="selectedSubCategory.startsWith('special')" class="content-section">
                    <div class="data-grid-section">
                        <h3 class="section-title">专题数据资源</h3>
                        <div class="standard-grid data-grid">
                            <div
                                v-for="item in specialDataItems"
                                :key="item.id"
                                class="data-card"
                            >
                                <div class="card-image">
                                    <img :src="item.image" :alt="item.title" />
                                    <span class="card-category">{{ getCategoryName(item.category) }}</span>
                                </div>
                                <div class="card-content">
                                    <h3 class="card-title">{{ item.title }}</h3>
                                    <p class="card-description">{{ truncateText(item.description, 80) }}</p>
                                    <div class="card-meta">
                                        <span>{{ item.date }}</span>
                                        <span>{{ item.downloads }}</span>
                                    </div>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 分类数据
const expandedCategories = ref(['tourism']) // 默认展开第一个
const selectedSubCategory = ref('tourism-scenic')

// 根据路由参数设置选中的子类别
const setSubCategoryFromRoute = () => {
    const subCategory = route.query.sub
    if (subCategory) {
        selectedSubCategory.value = subCategory
        
        // 根据子类别自动展开对应的父类别
        const allSubCategories = [
            ...tourismSubCategories,
            ...ecoSubCategories,
            ...ichSubCategories,
            ...creativitySubCategories,
            ...specialSubCategories
        ]
        
        const found = allSubCategories.find(sub => sub.id === subCategory)
        if (found) {
            const parentMap = {
                'tourism': tourismSubCategories,
                'eco': ecoSubCategories,
                'ich': ichSubCategories,
                'creativity': creativitySubCategories,
                'special': specialSubCategories
            }
            
            for (const [parent, subs] of Object.entries(parentMap)) {
                if (subs.find(s => s.id === subCategory)) {
                    if (!expandedCategories.value.includes(parent)) {
                        expandedCategories.value.push(parent)
                    }
                    break
                }
            }
        }
    }
}

onMounted(() => {
    setSubCategoryFromRoute()
})

watch(() => route.query.sub, () => {
    setSubCategoryFromRoute()
})

// 子分类定义
const tourismSubCategories = [
    { id: 'tourism-scenic', name: '旅游景区' },
    { id: 'tourism-red', name: '红色旅游' },
    { id: 'tourism-cultural', name: '文化旅游' }
]

const ecoSubCategories = [
    { id: 'eco-air', name: '空气质量' },
    { id: 'eco-water', name: '水质监测' },
    { id: 'eco-vegetation', name: '植被覆盖' },
    { id: 'eco-disaster', name: '灾害预警' }
]

const ichSubCategories = [
    { id: 'ich-un', name: '联合国非遗' },
    { id: 'ich-national', name: '国家级非遗' },
    { id: 'ich-provincial', name: '省级非遗' }
]

const creativitySubCategories = [
    { id: 'creativity-arvr', name: 'AR/VR 体验' },
    { id: 'creativity-digital', name: '数字藏品' },
    { id: 'creativity-replica', name: '文物复仿' },
    { id: 'creativity-lifestyle', name: '生活美学' }
]

const specialSubCategories = [
    { id: 'special-dunhuang', name: '敦煌舞谱' },
    { id: 'special-model', name: '模型资源' }
]

// 切换分类展开/折叠
const toggleCategory = (category) => {
    const index = expandedCategories.value.indexOf(category)
    if (index > -1) {
        expandedCategories.value.splice(index, 1)
    } else {
        expandedCategories.value.push(category)
    }
}

// 选择子分类
const selectSubCategory = (subCategoryId) => {
    selectedSubCategory.value = subCategoryId
}

// 旅游资源数据
const selectedType = ref('')
const selectedRegion = ref('')
const selectedTheme = ref('')
const selectedMapRegion = ref('')

const tourismResources = [
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
        type: '5A 级景区',
        region: '河西走廊片区',
        theme: '民族风情',
        level: '5A 级景区',
        coords: '40.005°N, 94.635°E',
        description: '国家级风景名胜区，以鸣沙山、月牙泉著称的沙漠奇观',
        dataTypes: ['地形变迁时序数据 (2010-2025)'],
        imageIcon: '沙'
    },
    {
        id: 3,
        name: '嘉峪关',
        type: '5A 级景区',
        region: '河西走廊片区',
        theme: '长城遗址',
        level: '5A 级景区',
        coords: '39.735°N, 98.255°E',
        description: '明代万里长城西端起点，天下第一雄关，古代丝绸之路交通要塞',
        dataTypes: ['结构健康监测数据 (温度/沉降/裂缝)'],
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
        type: '5A 级景区',
        region: '陇中片区',
        theme: '民族风情',
        level: '5A 级景区',
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

const filteredTourismResources = computed(() => {
    return tourismResources.filter(resource => {
        if (selectedType.value && resource.type !== selectedType.value) return false
        if (selectedRegion.value && resource.region !== selectedRegion.value) return false
        if (selectedTheme.value && resource.theme !== selectedTheme.value) return false
        return true
    })
})

const handleMapClick = (e) => {
    const region = e.target.dataset?.region || e.target.closest('.region')?.dataset?.region
    if (region) {
        selectedMapRegion.value = region
    }
}

// 生态监测数据
const monitoringSpots = ref([
    {
        name: '甘南草原',
        status: 'good',
        statusText: '正常',
        metrics: [
            { label: '空气质量', value: '35', unit: 'AQI', percent: 35, color: '#4caf50' },
            { label: '水质等级', value: 'Ⅱ类', unit: '', percent: 80, color: '#2196f3' },
            { label: '噪声水平', value: '42', unit: 'dB', percent: 42, color: '#8bc34a' },
            { label: '植被覆盖', value: '78', unit: '%', percent: 78, color: '#4caf50' }
        ]
    },
    {
        name: '祁连山',
        status: 'warning',
        statusText: '关注',
        metrics: [
            { label: '空气质量', value: '65', unit: 'AQI', percent: 65, color: '#ff9800' },
            { label: '水质等级', value: 'Ⅲ类', unit: '', percent: 60, color: '#ff9800' },
            { label: '噪声水平', value: '38', unit: 'dB', percent: 38, color: '#8bc34a' },
            { label: '冰川面积', value: '-2.1', unit: '%', percent: 20, color: '#f44336' }
        ]
    },
    {
        name: '月牙泉',
        status: 'good',
        statusText: '正常',
        metrics: [
            { label: '空气质量', value: '45', unit: 'AQI', percent: 45, color: '#4caf50' },
            { label: '水质等级', value: 'Ⅱ类', unit: '', percent: 85, color: '#2196f3' },
            { label: '噪声水平', value: '48', unit: 'dB', percent: 48, color: '#8bc34a' },
            { label: '水位深度', value: '8.5', unit: 'm', percent: 70, color: '#2196f3' }
        ]
    }
])

const years = [2020, 2021, 2022, 2023, 2024, 2025]
const currentYearIndex = ref(0)

const currentYear = computed(() => years[currentYearIndex.value])

const previousYear = () => {
    if (currentYearIndex.value > 0) {
        currentYearIndex.value--
    }
}

const nextYear = () => {
    if (currentYearIndex.value < years.length - 1) {
        currentYearIndex.value++
    }
}

// 文创数据
const arvrResources = [
    {
        id: 1,
        name: '敦煌飞天 VR 体验',
        type: 'VR 体验',
        level: '精品',
        format: 'VR 视频',
        description: '沉浸式体验敦煌飞天壁画，感受千年艺术魅力',
        duration: '15 分钟',
        size: '2.5GB',
        imageIcon: 'VR'
    },
    {
        id: 2,
        name: '莫高窟 AR 导览',
        type: 'AR 应用',
        level: '精品',
        format: 'AR 应用',
        description: '通过 AR 技术重现莫高窟历史场景',
        duration: '30 分钟',
        size: '1.8GB',
        imageIcon: 'AR'
    }
]

const digitalResources = [
    {
        id: 1,
        name: '九色鹿数字藏品',
        category: '动画经典',
        rarity: '稀有',
        edition: '10000',
        description: '基于敦煌壁画《鹿王本生》创作的数字藏品',
        blockchain: '蚂蚁链',
        serialNumber: 'No.0001-10000',
        imageIcon: '鹿'
    },
    {
        id: 2,
        name: '反弹琵琶数字藏品',
        category: '敦煌舞谱',
        rarity: '限定',
        edition: '5000',
        description: '敦煌壁画经典舞姿的数字化再现',
        blockchain: '至信链',
        serialNumber: 'No.0001-5000',
        imageIcon: '琵'
    }
]

// 特色数据
const specialDataItems = ref([
    {
        id: 1,
        title: '敦煌舞谱数字化资源库',
        description: '整合敦煌壁画中各类乐舞图像资料，采用动作捕捉技术记录敦煌舞典型舞姿，建立敦煌舞谱数据库。',
        category: 'culture',
        date: '2026-03-15',
        downloads: 3580,
        image: 'https://picsum.photos/400/300?random=20'
    },
    {
        id: 2,
        title: '甘肃文化模型资源库',
        description: '包含各类文化元素的 3D 模型资源，适用于文创设计、展示传播等场景。',
        category: 'culture',
        date: '2026-03-12',
        downloads: 4250,
        image: 'https://picsum.photos/400/300?random=21'
    }
])

const getCategoryName = (category) => {
    const categoryMap = {
        culture: '文化遗产',
        tourism: '旅游资源',
        ecology: '生态环境',
        economy: '旅游经济'
    }
    return categoryMap[category] || '其他'
}

const truncateText = (text, length) => {
    if (text.length <= length) return text
    return text.substring(0, length) + '...'
}
</script>

<style scoped>
.data-resources-page {
    min-height: 100vh;
    background: #f5f7fa;
}

.main-content {
    display: flex;
    max-width: 1600px;
    margin: 0 auto;
    padding: 40px 20px;
    gap: 20px;
}

/* 左侧边栏样式 */
.sidebar {
    width: 280px;
    flex-shrink: 0;
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    height: fit-content;
}

.accordion-menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.accordion-item {
    border-radius: 8px;
    overflow: hidden;
    background: #f8f9fa;
}

.accordion-header {
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    transition: all 0.3s;
    gap: 10px;
}

.accordion-header:hover {
    background: #e3f2fd;
}

.category-name {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    color: #1a237e;
}

.accordion-arrow {
    font-size: 12px;
    transition: transform 0.3s;
    color: #666;
}

.accordion-arrow.active {
    transform: rotate(180deg);
}

.accordion-content {
    background: #fff;
    border-top: 1px solid #e0e0e0;
}

.sub-category-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sub-category-list li {
    padding: 12px 15px 12px 45px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    color: #333;
}

.sub-category-list li:hover {
    background: #e3f2fd;
    color: #005da6;
}

.sub-category-list li.active {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    font-weight: 500;
}

/* 右侧内容区域 */
.content-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.content-section {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.section-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
}

/* 地图样式 */
.map-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
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
    font-size: 48px;
    margin-bottom: 10px;
}

.map-regions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 50px;
}

.region {
    padding: 10px 20px;
    background: rgba(255,255,255,0.8);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
}

.region:hover {
    background: #fff;
    transform: scale(1.05);
}

.map-info {
    margin-top: 15px;
    text-align: center;
}

.region-badge {
    display: inline-block;
    padding: 8px 20px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    border-radius: 20px;
    font-weight: 500;
}

/* 资源列表样式 */
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
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card-image {
    position: relative;
    height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-placeholder {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-icon {
    font-size: 48px;
    color: #fff;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.resource-level {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 12px;
    background: rgba(0,0,0,0.7);
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
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 10px;
}

.resource-meta {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    color: #666;
}

.resource-coords {
    font-size: 13px;
    color: #999;
    margin-bottom: 10px;
}

.resource-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
}

.data-types {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.data-tag {
    padding: 4px 10px;
    background: #e3f2fd;
    color: #005da6;
    border-radius: 4px;
    font-size: 12px;
}

/* 仪表盘样式 */
.dashboard-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
}

.dashboard-card {
    background: #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
}

.card-header h4 {
    font-size: 16px;
    font-weight: 600;
}

.status-badge {
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.status-badge.good {
    background: #4caf50;
}

.status-badge.warning {
    background: #ff9800;
}

.card-body {
    padding: 20px;
}

.metric {
    margin-bottom: 15px;
}

.metric-label {
    font-size: 13px;
    color: #666;
    margin-bottom: 5px;
}

.metric-value {
    display: flex;
    align-items: baseline;
    gap: 5px;
    margin-bottom: 5px;
}

.value {
    font-size: 24px;
    font-weight: 600;
    color: #1a237e;
}

.unit {
    font-size: 12px;
    color: #999;
}

.metric-bar {
    height: 6px;
    background: #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
}

.metric-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s;
}

/* 时间轴样式 */
.timeline-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.timeline-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.timeline-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.time-btn {
    padding: 8px 16px;
    background: #005da6;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
}

.time-btn:hover:not(:disabled) {
    background: #0079b8;
}

.time-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.year-display {
    font-size: 18px;
    font-weight: 600;
    color: #1a237e;
    min-width: 120px;
    text-align: center;
}

.timeline-slider {
    position: relative;
    padding: 20px 0;
}

.slider {
    width: 100%;
    height: 6px;
    background: #e0e0e0;
    border-radius: 3px;
    outline: none;
    -webkit-appearance: none;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #005da6;
    border-radius: 50%;
    cursor: pointer;
}

.year-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.year-label {
    font-size: 12px;
    color: #999;
}

.comparison-view {
    display: flex;
    gap: 10px;
    height: 300px;
    position: relative;
}

.comparison-image {
    flex: 1;
    background: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
}

.image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
    color: #666;
}

.comparison-divider {
    width: 4px;
    background: #005da6;
    position: relative;
}

.slider-handle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: #fff;
    border: 3px solid #005da6;
    border-radius: 50%;
    cursor: col-resize;
}

/* 传承图谱样式 */
.inheritance-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.inheritance-graph {
    overflow-x: auto;
    padding: 20px;
}

.graph-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    min-width: 600px;
}

.root-node, .second-generation, .third-generation, .fourth-generation {
    display: flex;
    justify-content: center;
    gap: 40px;
    position: relative;
}

.node-branch {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.node-content {
    padding: 15px 25px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    border-radius: 8px;
    text-align: center;
    min-width: 120px;
}

.node-name {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
}

.node-time {
    display: block;
    font-size: 12px;
    opacity: 0.9;
}

.node-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 8px;
    justify-content: center;
}

.tag {
    padding: 3px 10px;
    background: #f5f5f5;
    color: #666;
    border-radius: 12px;
    font-size: 11px;
}

.tag.active {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
}

.generation-line {
    background: #005da6;
}

.generation-line.vertical {
    width: 2px;
    height: 30px;
    margin: 0 auto;
}

.generation-line.diagonal {
    width: 60px;
    height: 2px;
    position: absolute;
    top: -1px;
}

.generation-line.diagonal.left {
    left: -20px;
    transform: rotate(30deg);
}

.generation-line.diagonal.right {
    right: -20px;
    transform: rotate(-30deg);
}

/* 多媒体样式 */
.multimedia-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.multimedia-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
}

.video-player {
    background: #000;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}

.video-placeholder {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(135deg, #1a237e 0%, #005da6 100%);
}

.play-button {
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all 0.3s;
}

.play-button:hover {
    background: rgba(255,255,255,0.3);
    transform: scale(1.1);
}

.step-list {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
}

.step-list h4 {
    font-size: 16px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 15px;
}

.step-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.step-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
}

.step-item:hover {
    background: #e3f2fd;
}

.step-item.active {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
}

.step-number {
    width: 28px;
    height: 28px;
    background: #e0e0e0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    flex-shrink: 0;
}

.step-item.active .step-number {
    background: #fff;
    color: #005da6;
}

.step-name {
    font-size: 14px;
}

/* 数据网格样式 */
.data-grid-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.standard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
}

.data-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.data-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-category {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 12px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 16px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 10px;
}

.card-description {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
}

.card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #999;
}

/* 响应式设计 */
@media (max-width: 1200px) {
    .main-content {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
    }

    .multimedia-container {
        grid-template-columns: 1fr;
    }
}
</style>
