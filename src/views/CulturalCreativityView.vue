<template>
    <div class="creativity-page">
        <div class="main-content">
            <FilterSidebarComponent 
                v-model="selectedCategory" 
                :filter-groups="filterGroups" 
            />

            <div class="content-area">
                <div class="overview-section" v-if="selectedCategory === 'arvr'">
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

                <div class="overview-section" v-if="selectedCategory === 'digital'">
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
                                <div class="card-actions">
                                    <button class="action-btn primary">👁️ 查看 3D</button>
                                    <button class="action-btn">📋 详情</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overview-section" v-if="selectedCategory === 'replica'">
                    <h3 class="section-title">文物复仿制品</h3>
                    <div class="resources-grid">
                        <div class="resource-card" v-for="resource in replicaResources" :key="resource.id">
                            <div class="card-image">
                                <div class="image-placeholder" :style="{ backgroundImage: resource.image ? 'url(' + resource.image + ')' : '' }">
                                    <span class="image-icon">{{ resource.imageIcon }}</span>
                                </div>
                                <span class="resource-type">{{ resource.craftsmanship }}</span>
                            </div>
                            <div class="card-content">
                                <h4>{{ resource.name }}</h4>
                                <div class="resource-meta">
                                    <span class="meta-item">朝代：{{ resource.dynasty }}</span>
                                    <span class="meta-item">材质：{{ resource.material }}</span>
                                </div>
                                <p class="resource-desc">{{ resource.description }}</p>
                                <div class="data-tags">
                                    <span class="tag">尺寸：{{ resource.size }}</span>
                                    <span class="tag">重量：{{ resource.weight }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">📖 了解</button>
                                    <button class="action-btn">🛒 订购</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overview-section" v-if="selectedCategory === 'lifestyle'">
                    <h3 class="section-title">生活美学用品</h3>
                    <div class="resources-grid">
                        <div class="resource-card" v-for="resource in lifestyleResources" :key="resource.id">
                            <div class="card-image">
                                <div class="image-placeholder" :style="{ backgroundImage: resource.image ? 'url(' + resource.image + ')' : '' }">
                                    <span class="image-icon">{{ resource.imageIcon }}</span>
                                </div>
                                <span class="resource-type">{{ resource.style }}</span>
                            </div>
                            <div class="card-content">
                                <h4>{{ resource.name }}</h4>
                                <div class="resource-meta">
                                    <span class="meta-item">系列：{{ resource.series }}</span>
                                    <span class="meta-item">价格：¥{{ resource.price }}</span>
                                </div>
                                <p class="resource-desc">{{ resource.description }}</p>
                                <div class="data-tags">
                                    <span class="tag">材质：{{ resource.material }}</span>
                                    <span class="tag">规格：{{ resource.specification }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">🛍️ 购买</button>
                                    <button class="action-btn">📖 详情</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overview-section" v-if="selectedCategory === 'patterns'">
                    <h3 class="section-title">纹样矢量图</h3>
                    <div class="resources-grid">
                        <div class="resource-card" v-for="resource in patternResources" :key="resource.id">
                            <div class="card-image">
                                <div class="image-placeholder" :style="{ backgroundImage: resource.image ? 'url(' + resource.image + ')' : '' }">
                                    <span class="image-icon">{{ resource.imageIcon }}</span>
                                </div>
                                <span class="resource-type">{{ resource.format }}</span>
                            </div>
                            <div class="card-content">
                                <h4>{{ resource.name }}</h4>
                                <div class="resource-meta">
                                    <span class="meta-item">来源：{{ resource.source }}</span>
                                    <span class="meta-item">年代：{{ resource.dynasty }}</span>
                                </div>
                                <p class="resource-desc">{{ resource.description }}</p>
                                <div class="data-tags">
                                    <span class="tag">分辨率：{{ resource.resolution }}</span>
                                    <span class="tag">格式：{{ resource.fileFormat }}</span>
                                </div>
                                <div class="card-actions">
                                    <button class="action-btn primary">👁️ 预览</button>
                                    <button class="action-btn">📥 下载</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overview-section" v-if="selectedCategory === 'fonts'">
                    <h3 class="section-title">字体库</h3>
                    <div class="font-showcase">
                        <div class="font-card" v-for="font in fontResources" :key="font.id">
                            <div class="font-preview">
                                <div class="preview-text" :style="{ fontFamily: font.fontFamily }">
                                    {{ font.sampleText }}
                                </div>
                            </div>
                            <div class="font-info">
                                <h4>{{ font.name }}</h4>
                                <p class="font-desc">{{ font.description }}</p>
                                <div class="font-meta">
                                    <span class="meta-tag">格式：{{ font.format }}</span>
                                    <span class="meta-tag">字重：{{ font.weight }}</span>
                                    <span class="meta-tag">授权：{{ font.license }}</span>
                                </div>
                                <div class="font-actions">
                                    <button class="action-btn primary">Aa 预览</button>
                                    <button class="action-btn">📥 下载</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="statistics-section" v-if="selectedCategory !== 'fonts'">
                    <h3 class="section-title">数据统计</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-header">
                                <h4>资源分类统计</h4>
                            </div>
                            <div class="stat-content">
                                <div class="stat-bar" v-for="stat in categoryStats" :key="stat.label">
                                    <span class="stat-label">{{ stat.label }}</span>
                                    <div class="stat-bar-bg">
                                        <div class="stat-bar-fill" :style="{ width: stat.percent + '%' }"></div>
                                    </div>
                                    <span class="stat-value">{{ stat.count }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-header">
                                <h4>热门资源</h4>
                            </div>
                            <div class="stat-content">
                                <div class="hot-list">
                                    <div class="hot-item" v-for="(item, index) in hotResources" :key="item.id">
                                        <span class="rank" :class="'rank-' + (index + 1)">{{ index + 1 }}</span>
                                        <span class="item-name">{{ item.name }}</span>
                                        <span class="item-views">{{ item.views }}次查看</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-header">
                                <h4>下载趋势</h4>
                            </div>
                            <div class="stat-content">
                                <div class="trend-chart">
                                    <div class="chart-bars">
                                        <div class="bar-item" v-for="item in downloadTrend" :key="item.month">
                                            <div class="bar" :style="{ height: item.percent + '%' }"></div>
                                            <span class="bar-label">{{ item.month }}</span>
                                        </div>
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
import { ref, computed } from 'vue'
import FilterSidebarComponent from '../components/FilterSidebarComponent.vue'

const selectedCategory = ref('arvr')

const filterGroups = [
    {
        title: '数字文创',
        items: [
            { label: 'AR/VR 体验资源', value: 'arvr' },
            { label: '数字藏品', value: 'digital' }
        ]
    },
    {
        title: '实物文创',
        items: [
            { label: '文物复仿制品', value: 'replica' },
            { label: '生活美学用品', value: 'lifestyle' }
        ]
    },
    {
        title: '设计资源库',
        items: [
            { label: '纹样矢量图（敦煌藻井/彩陶纹）', value: 'patterns' },
            { label: '字体库（简牍字体/写经体）', value: 'fonts' }
        ]
    }
]

const arvrResources = [
    {
        id: 1,
        name: '莫高窟 VR 全景漫游',
        type: 'VR 体验',
        level: '4K 超清',
        format: 'WebVR',
        description: '沉浸式体验莫高窟经典洞窟，支持 360 度全景浏览',
        duration: '30 分钟',
        size: '2.5GB',
        imageIcon: '🕶️'
    },
    {
        id: 2,
        name: '敦煌飞天 AR 互动',
        type: 'AR 体验',
        level: '高清',
        format: 'Mobile AR',
        description: '通过手机摄像头与飞天壁画进行 AR 互动',
        duration: '15 分钟',
        size: '800MB',
        imageIcon: '📱'
    },
    {
        id: 3,
        name: '嘉峪关历史重现 VR',
        type: 'VR 体验',
        level: '4K 超清',
        format: 'WebVR',
        description: '穿越时空，见证嘉峪关的建造历程',
        duration: '25 分钟',
        size: '3.2GB',
        imageIcon: '🏯'
    }
]

const digitalResources = [
    {
        id: 1,
        name: '九色鹿数字藏品',
        category: '动画 IP',
        rarity: '限定款',
        edition: '9999',
        description: '基于敦煌壁画九色鹿故事创作的数字藏品',
        blockchain: '蚂蚁链',
        serialNumber: 'NO.0001-9999',
        imageIcon: '🦌'
    },
    {
        id: 2,
        name: '飞天伎乐 NFT',
        category: '壁画艺术',
        rarity: '稀有款',
        edition: '5000',
        description: '敦煌飞天伎乐形象的 3D 数字藏品',
        blockchain: '至信链',
        serialNumber: 'NO.0001-5000',
        imageIcon: '🎵'
    },
    {
        id: 3,
        name: '彩陶纹样数字系列',
        category: '纹样艺术',
        rarity: '普通款',
        edition: '20000',
        description: '甘肃彩陶经典纹样的数字化呈现',
        blockchain: '百度超级链',
        serialNumber: 'NO.0001-20000',
        imageIcon: '🏺'
    }
]

const replicaResources = [
    {
        id: 1,
        name: '马踏飞燕复制品',
        dynasty: '东汉',
        material: '青铜',
        craftsmanship: '1:1 复刻',
        description: '甘肃省博镇馆之宝的精准复制品',
        size: '45×30×35cm',
        weight: '8.5kg',
        imageIcon: '🐎'
    },
    {
        id: 2,
        name: '敦煌彩塑菩萨像',
        dynasty: '唐代',
        material: '树脂+矿物颜料',
        craftsmanship: '手工绘制',
        description: '莫高窟第 45 窟菩萨像的精细复制',
        size: '60×40×80cm',
        weight: '12kg',
        imageIcon: '🙏'
    },
    {
        id: 3,
        name: '简牍文字复刻套装',
        dynasty: '汉代',
        material: '竹简+墨',
        craftsmanship: '传统工艺',
        description: '居延汉简精选内容的复刻版本',
        size: '23×2×0.5cm×20',
        weight: '1.2kg',
        imageIcon: '📜'
    }
]

const lifestyleResources = [
    {
        id: 1,
        name: '敦煌藻井丝巾',
        series: '藻井系列',
        price: '299',
        style: '新中式',
        description: '提取敦煌藻井图案设计的真丝丝巾',
        material: '100% 桑蚕丝',
        specification: '90×90cm',
        imageIcon: '🧣'
    },
    {
        id: 2,
        name: '彩陶纹样咖啡杯',
        series: '彩陶系列',
        price: '128',
        style: '现代简约',
        description: '马家窑彩陶纹样创意马克杯',
        material: '高温陶瓷',
        specification: '350ml',
        imageIcon: '☕'
    },
    {
        id: 3,
        name: '飞天书签套装',
        series: '飞天系列',
        price: '68',
        style: '古典雅致',
        description: '敦煌飞天形象的金属书签',
        material: '黄铜+珐琅',
        specification: '15×5cm×4',
        imageIcon: '📖'
    }
]

const patternResources = [
    {
        id: 1,
        name: '敦煌藻井纹样合集',
        source: '莫高窟',
        dynasty: '隋唐',
        format: '矢量图',
        description: '精选 20 款敦煌藻井经典纹样',
        resolution: '可无限放大',
        fileFormat: 'AI/SVG/EPS',
        imageIcon: '🎨'
    },
    {
        id: 2,
        name: '彩陶漩涡纹矢量图',
        source: '马家窑遗址',
        dynasty: '新石器时代',
        format: '矢量图',
        description: '马家窑彩陶经典漩涡纹样',
        resolution: '300DPI',
        fileFormat: 'AI/SVG',
        imageIcon: '🌀'
    },
    {
        id: 3,
        name: '忍冬纹边饰矢量集',
        source: '敦煌壁画',
        dynasty: '北魏',
        format: '矢量图',
        description: '敦煌壁画中的忍冬纹边饰图案',
        resolution: '可无限放大',
        fileFormat: 'AI/SVG/EPS',
        imageIcon: '🌿'
    }
]

const fontResources = [
    {
        id: 1,
        name: '简牍体',
        description: '基于汉代简牍书法风格开发的字体',
        fontFamily: 'serif',
        format: 'TTF/OTF',
        weight: 'Regular/Bold',
        license: '商用免费',
        sampleText: '甘肃文旅 简牍体'
    },
    {
        id: 2,
        name: '写经体',
        description: '源自敦煌写经体的书法字体',
        fontFamily: 'serif',
        format: 'TTF/OTF/WOFF',
        weight: 'Regular',
        license: '个人免费',
        sampleText: '敦煌写经 字体'
    },
    {
        id: 3,
        name: '敦煌楷体',
        description: '融合敦煌书法风格的楷体字',
        fontFamily: 'serif',
        format: 'TTF/OTF',
        weight: 'Regular/Bold/Light',
        license: '商用授权',
        sampleText: '敦煌楷体 展示'
    }
]

const categoryStats = [
    { label: 'AR/VR 资源', count: 15, percent: 25 },
    { label: '数字藏品', count: 20, percent: 33 },
    { label: '复仿制品', count: 12, percent: 20 },
    { label: '生活用品', count: 13, percent: 22 }
]

const hotResources = [
    { id: 1, name: '莫高窟 VR 全景漫游', views: 15234 },
    { id: 2, name: '九色鹿数字藏品', views: 12456 },
    { id: 3, name: '敦煌藻井丝巾', views: 9876 },
    { id: 4, name: '马踏飞燕复制品', views: 8765 },
    { id: 5, name: '飞天伎乐 NFT', views: 7654 }
]

const downloadTrend = [
    { month: '7 月', percent: 60 },
    { month: '8 月', percent: 75 },
    { month: '9 月', percent: 85 },
    { month: '10 月', percent: 70 },
    { month: '11 月', percent: 90 },
    { month: '12 月', percent: 95 }
]
</script>

<style scoped>
.creativity-page {
    min-height: 100vh;
}

.main-content {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    gap: 20px;
}

.content-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.overview-section,
.statistics-section {
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

.resource-type {
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

.resource-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 12px;
}

.data-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
}

.tag {
    padding: 4px 12px;
    background: linear-gradient(135deg, #4fc3f7 0%, #81d4fa 100%);
    color: #fff;
    border-radius: 15px;
    font-size: 12px;
}

.card-actions {
    display: flex;
    gap: 10px;
}

.action-btn {
    flex: 1;
    padding: 8px 15px;
    border: none;
    border-radius: 8px;
    background: #f5f5f5;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.action-btn:hover {
    background: #e0e0e0;
}

.action-btn.primary {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
}

.action-btn.primary:hover {
    background: linear-gradient(135deg, #0079b8 0%, #005da6 100%);
}

.font-showcase {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.font-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 12px;
}

.font-preview {
    background: #fff;
    border-radius: 8px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.preview-text {
    font-size: 48px;
    color: #1a237e;
    text-align: center;
}

.font-info h4 {
    font-size: 18px;
    color: #1a237e;
    margin-bottom: 10px;
}

.font-desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.font-meta {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.meta-tag {
    padding: 4px 12px;
    background: #e3f2fd;
    border-radius: 15px;
    font-size: 12px;
    color: #005da6;
}

.font-actions {
    display: flex;
    gap: 10px;
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
    margin-bottom: 15px;
}

.stat-header h4 {
    font-size: 16px;
    color: #1a237e;
    font-weight: 600;
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

.hot-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.hot-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    background: #fff;
    border-radius: 8px;
}

.rank {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: #666;
}

.rank-1 {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
    color: #333;
}

.rank-2 {
    background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%);
    color: #333;
}

.rank-3 {
    background: linear-gradient(135deg, #cd7f32 0%, #e0a86a 100%);
    color: #333;
}

.item-name {
    flex: 1;
    font-size: 13px;
    color: #333;
}

.item-views {
    font-size: 12px;
    color: #999;
}

.trend-chart {
    padding: 20px 0;
}

.chart-bars {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 150px;
    gap: 10px;
}

.bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.bar {
    width: 100%;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    border-radius: 4px 4px 0 0;
    transition: height 0.5s;
}

.bar-label {
    font-size: 12px;
    color: #666;
}
</style>
