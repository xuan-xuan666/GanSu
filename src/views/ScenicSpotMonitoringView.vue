<template>
    <div class="scenic-monitoring-page">
        <div class="main-content">
            <div class="sidebar">
                <div class="filter-group">
                    <h3 class="filter-title">热门景区</h3>
                    <ul class="filter-list">
                        <li :class="{ active: selectedSpot === 'all' }" @click="selectedSpot = 'all'">
                            全部景区
                        </li>
                        <li :class="{ active: selectedSpot === 'mogao' }" @click="selectedSpot = 'mogao'">
                            莫高窟
                        </li>
                        <li :class="{ active: selectedSpot === 'mingsha' }" @click="selectedSpot = 'mingsha'">
                            鸣沙山月牙泉
                        </li>
                        <li :class="{ active: selectedSpot === 'jiayuguan' }" @click="selectedSpot = 'jiayuguan'">
                            嘉峪关
                        </li>
                        <li :class="{ active: selectedSpot === 'zhangye' }" @click="selectedSpot = 'zhangye'">
                            张掖丹霞
                        </li>
                        <li :class="{ active: selectedSpot === 'maiji' }" @click="selectedSpot = 'maiji'">
                            麦积山石窟
                        </li>
                    </ul>
                </div>

                <div class="filter-group">
                    <h3 class="filter-title">监测类型</h3>
                    <ul class="filter-list">
                        <li :class="{ active: selectedType === 'weather' }" @click="selectedType = 'weather'">
                            天气监测
                        </li>
                        <li :class="{ active: selectedType === 'crowd' }" @click="selectedType = 'crowd'">
                            人流量监测
                        </li>
                        <li :class="{ active: selectedType === 'both' }" @click="selectedType = 'both'">
                            全部数据
                        </li>
                    </ul>
                </div>
            </div>

            <div class="content-area">
                <div class="overview-section">
                    <h3 class="section-title">甘肃重点景区实时监测概览</h3>
                    <div class="overview-cards">
                        <div class="overview-card">
                            <div class="overview-icon">🌤️</div>
                            <div class="overview-info">
                                <div class="overview-label">今日监测景区数</div>
                                <div class="overview-value">5</div>
                            </div>
                        </div>
                        <div class="overview-card">
                            <div class="overview-icon">👥</div>
                            <div class="overview-info">
                                <div class="overview-label">今日总游客量</div>
                                <div class="overview-value">{{ totalVisitors.toLocaleString() }}</div>
                            </div>
                        </div>
                        <div class="overview-card">
                            <div class="overview-icon">📊</div>
                            <div class="overview-info">
                                <div class="overview-label">平均入园率</div>
                                <div class="overview-value">{{ avgOccupancyRate }}%</div>
                            </div>
                        </div>
                        <div class="overview-card">
                            <div class="overview-icon">⚠️</div>
                            <div class="overview-info">
                                <div class="overview-label">客流预警景区</div>
                                <div class="overview-value warning">{{ warningCount }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dashboard-section">
                    <h3 class="section-title">景区实时监测仪表盘</h3>
                    <div class="dashboard-grid">
                        <div class="dashboard-card" v-for="spot in filteredSpots" :key="spot.id">
                            <div class="card-header">
                                <h4>{{ spot.name }}</h4>
                                <span class="status-badge" :class="spot.crowdStatus">{{ spot.crowdStatusText }}</span>
                            </div>
                            <div class="card-body">
                                <div class="weather-section" v-if="selectedType === 'weather' || selectedType === 'both'">
                                    <h5 class="subsection-title">🌤️ 今日天气</h5>
                                    <div class="weather-grid">
                                        <div class="weather-item">
                                            <span class="weather-icon">{{ spot.weather.icon }}</span>
                                            <span class="weather-temp">{{ spot.weather.temperature }}°C</span>
                                            <span class="weather-desc">{{ spot.weather.description }}</span>
                                        </div>
                                        <div class="weather-details">
                                            <div class="weather-detail">
                                                <span class="detail-label">湿度</span>
                                                <span class="detail-value">{{ spot.weather.humidity }}%</span>
                                            </div>
                                            <div class="weather-detail">
                                                <span class="detail-label">空气质量</span>
                                                <span class="detail-value" :class="getAirQualityClass(spot.weather.aqi)">
                                                    {{ spot.weather.aqi }} {{ spot.weather.aqiText }}
                                                </span>
                                            </div>
                                            <div class="weather-detail">
                                                <span class="detail-label">风力</span>
                                                <span class="detail-value">{{ spot.weather.wind }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="crowd-section" v-if="selectedType === 'crowd' || selectedType === 'both'">
                                    <h5 class="subsection-title">👥 人流量监测</h5>
                                    <div class="crowd-metrics">
                                        <div class="metric-item">
                                            <div class="metric-label">今日入园人数</div>
                                            <div class="metric-value">{{ spot.crowd.todayVisitors.toLocaleString() }} 人次</div>
                                            <div class="metric-bar">
                                                <div class="metric-fill" :style="{ width: spot.crowd.occupancyRate + '%', background: getCrowdColor(spot.crowd.occupancyRate) }"></div>
                                            </div>
                                            <div class="metric-footer">
                                                <span>最大承载量：{{ spot.crowd.maxCapacity.toLocaleString() }} 人次</span>
                                                <span class="rate-text">入园率：{{ spot.crowd.occupancyRate }}%</span>
                                            </div>
                                        </div>
                                        <div class="crowd-trend">
                                            <div class="trend-label">近 7 日游客量趋势</div>
                                            <div class="trend-chart">
                                                <div class="chart-bars">
                                                    <div class="chart-bar" v-for="(value, index) in spot.crowd.weeklyTrend" :key="index"
                                                         :style="{ height: (value / Math.max(...spot.crowd.weeklyTrend) * 100) + '%' }"
                                                         :title="value + '人次'">
                                                    </div>
                                                </div>
                                                <div class="chart-labels">
                                                    <span v-for="day in ['一', '二', '三', '四', '五', '六', '日']" :key="day" class="label">{{ day }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-footer">
                                    <div class="update-time">数据更新时间：{{ spot.updateTime }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="alert-section">
                    <h3 class="section-title">景区预警信息</h3>
                    <div class="alert-list">
                        <div class="alert-item" v-for="alert in alerts" :key="alert.id" :class="alert.level">
                            <div class="alert-icon">{{ alert.icon }}</div>
                            <div class="alert-content">
                                <div class="alert-title">{{ alert.title }}</div>
                                <div class="alert-message">{{ alert.message }}</div>
                                <div class="alert-time">{{ alert.time }}</div>
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

const selectedSpot = ref('all')
const selectedType = ref('both')

const scenicSpots = ref([
    {
        id: 'mogao',
        name: '莫高窟',
        status: 'normal',
        crowdStatus: 'busy',
        crowdStatusText: '较忙',
        updateTime: '2025-04-01 14:30',
        weather: {
            icon: '⛅',
            temperature: 12,
            description: '多云转晴',
            humidity: 35,
            aqi: 65,
            aqiText: '良',
            wind: '西北风 3 级'
        },
        crowd: {
            todayVisitors: 8520,
            maxCapacity: 12000,
            occupancyRate: 71,
            weeklyTrend: [5200, 6800, 7500, 6200, 8520, 9100, 8800]
        }
    },
    {
        id: 'mingsha',
        name: '鸣沙山月牙泉',
        status: 'normal',
        crowdStatus: 'crowded',
        crowdStatusText: '拥挤',
        updateTime: '2025-04-01 14:30',
        weather: {
            icon: '☀️',
            temperature: 15,
            description: '晴朗',
            humidity: 28,
            aqi: 58,
            aqiText: '良',
            wind: '西北风 2 级'
        },
        crowd: {
            todayVisitors: 15800,
            maxCapacity: 18000,
            occupancyRate: 88,
            weeklyTrend: [12000, 13500, 14200, 11800, 15800, 16500, 16200]
        }
    },
    {
        id: 'jiayuguan',
        name: '嘉峪关',
        status: 'normal',
        crowdStatus: 'normal',
        crowdStatusText: '舒适',
        updateTime: '2025-04-01 14:30',
        weather: {
            icon: '⛅',
            temperature: 10,
            description: '多云',
            humidity: 42,
            aqi: 72,
            aqiText: '良',
            wind: '西北风 4 级'
        },
        crowd: {
            todayVisitors: 4200,
            maxCapacity: 8000,
            occupancyRate: 52,
            weeklyTrend: [3500, 4100, 4800, 3900, 4200, 5200, 4900]
        }
    },
    {
        id: 'zhangye',
        name: '张掖丹霞',
        status: 'normal',
        crowdStatus: 'normal',
        crowdStatusText: '舒适',
        updateTime: '2025-04-01 14:30',
        weather: {
            icon: '🌤️',
            temperature: 8,
            description: '晴间多云',
            humidity: 38,
            aqi: 55,
            aqiText: '良',
            wind: '西风 3 级'
        },
        crowd: {
            todayVisitors: 6300,
            maxCapacity: 10000,
            occupancyRate: 63,
            weeklyTrend: [5100, 5800, 6500, 5500, 6300, 7200, 6800]
        }
    },
    {
        id: 'mai',
        name: '麦积山石窟',
        status: 'normal',
        crowdStatus: 'normal',
        crowdStatusText: '舒适',
        updateTime: '2025-04-01 14:30',
        weather: {
            icon: '🌧️',
            temperature: 14,
            description: '小雨',
            humidity: 68,
            aqi: 45,
            aqiText: '优',
            wind: '东南风 2 级'
        },
        crowd: {
            todayVisitors: 3200,
            maxCapacity: 6000,
            occupancyRate: 53,
            weeklyTrend: [2800, 3100, 3500, 2900, 3200, 3800, 3600]
        }
    }
])

const alerts = ref([
    {
        id: 1,
        icon: '⚠️',
        level: 'warning',
        title: '鸣沙山月牙泉景区客流黄色预警',
        message: '当前入园率已达 88%，建议游客错峰出行或选择其他景区',
        time: '2025-04-01 14:15'
    },
    {
        id: 2,
        icon: '🌬️',
        level: 'info',
        title: '嘉峪关景区大风提示',
        message: '当前西北风 4 级，请注意防风保暖',
        time: '2025-04-01 13:50'
    },
    {
        id: 3,
        icon: '🌧️',
        level: 'info',
        title: '麦积山石窟降雨提示',
        message: '当前有小雨，路面湿滑，请注意安全',
        time: '2025-04-01 14:00'
    }
])

const filteredSpots = computed(() => {
    if (selectedSpot.value === 'all') {
        return scenicSpots.value
    }
    return scenicSpots.value.filter(spot => spot.id === selectedSpot.value)
})

const totalVisitors = computed(() => {
    return scenicSpots.value.reduce((sum, spot) => sum + spot.crowd.todayVisitors, 0)
})

const avgOccupancyRate = computed(() => {
    const total = scenicSpots.value.reduce((sum, spot) => sum + spot.crowd.occupancyRate, 0)
    return Math.round(total / scenicSpots.value.length)
})

const warningCount = computed(() => {
    return scenicSpots.value.filter(spot => spot.crowdStatus === 'crowded' || spot.crowdStatus === 'busy').length
})

const getCrowdColor = (rate) => {
    if (rate >= 80) return '#f44336'
    if (rate >= 60) return '#ff9800'
    return '#4caf50'
}

const getAirQualityClass = (aqi) => {
    if (aqi <= 50) return 'excellent'
    if (aqi <= 100) return 'good'
    return 'poor'
}
</script>

<style scoped>
.scenic-monitoring-page {
    min-height: 100vh;
    background: #f5f7fa;
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

.filter-group:last-child {
    margin-bottom: 0;
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

.overview-section {
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

.overview-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.overview-card {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 100%);
    border-radius: 12px;
    border-left: 4px solid #005da6;
}

.overview-icon {
    font-size: 36px;
}

.overview-info {
    flex: 1;
}

.overview-label {
    font-size: 13px;
    color: #666;
    margin-bottom: 5px;
}

.overview-value {
    font-size: 24px;
    font-weight: 600;
    color: #1a237e;
}

.overview-value.warning {
    color: #ff9800;
}

.dashboard-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(255,255,255,0.2);
}

.status-badge.normal {
    background: #4caf50;
}

.status-badge.busy {
    background: #ff9800;
}

.status-badge.crowded {
    background: #f44336;
}

.card-body {
    padding: 20px;
}

.subsection-title {
    font-size: 14px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 15px;
}

.weather-section, .crowd-section {
    margin-bottom: 20px;
    padding: 15px;
    background: #fff;
    border-radius: 8px;
}

.weather-section:last-child, .crowd-section:last-child {
    margin-bottom: 0;
}

.weather-grid {
    display: flex;
    gap: 20px;
    align-items: center;
}

.weather-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 100px;
}

.weather-icon {
    font-size: 32px;
}

.weather-temp {
    font-size: 24px;
    font-weight: 600;
    color: #1a237e;
}

.weather-desc {
    font-size: 13px;
    color: #666;
}

.weather-details {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.weather-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    background: #f5f7fa;
    border-radius: 6px;
}

.detail-label {
    font-size: 11px;
    color: #666;
    margin-bottom: 4px;
}

.detail-value {
    font-size: 13px;
    font-weight: 600;
    color: #1a237e;
}

.detail-value.excellent {
    color: #4caf50;
}

.detail-value.good {
    color: #2196f3;
}

.detail-value.poor {
    color: #ff9800;
}

.crowd-metrics {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.metric-item {
    padding: 15px;
    background: #f5f7fa;
    border-radius: 8px;
}

.metric-label {
    font-size: 13px;
    color: #666;
    margin-bottom: 8px;
}

.metric-value {
    font-size: 20px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 10px;
}

.metric-bar {
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
}

.metric-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s ease;
}

.metric-footer {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
}

.rate-text {
    font-weight: 600;
    color: #1a237e;
}

.crowd-trend {
    padding: 15px;
    background: #f5f7fa;
    border-radius: 8px;
}

.trend-label {
    font-size: 13px;
    color: #666;
    margin-bottom: 10px;
}

.trend-chart {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.chart-bars {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 80px;
    padding: 0 10px;
    background: #fff;
    border-radius: 6px;
}

.chart-bar {
    width: 12px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    border-radius: 3px 3px 0 0;
    transition: height 0.3s ease;
}

.chart-labels {
    display: flex;
    justify-content: space-around;
    font-size: 11px;
    color: #999;
}

.label {
    flex: 1;
    text-align: center;
}

.card-footer {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #e0e0e0;
}

.update-time {
    font-size: 12px;
    color: #999;
    text-align: right;
}

.alert-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.alert-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.alert-item {
    display: flex;
    gap: 15px;
    padding: 15px;
    background: #f5f7fa;
    border-radius: 8px;
    border-left: 4px solid #2196f3;
}

.alert-item.warning {
    border-left-color: #ff9800;
    background: #fff3e0;
}

.alert-item.info {
    border-left-color: #2196f3;
}

.alert-icon {
    font-size: 24px;
}

.alert-content {
    flex: 1;
}

.alert-title {
    font-size: 14px;
    font-weight: 600;
    color: #1a237e;
    margin-bottom: 5px;
}

.alert-message {
    font-size: 13px;
    color: #666;
    margin-bottom: 5px;
}

.alert-time {
    font-size: 12px;
    color: #999;
}

@media (max-width: 768px) {
    .main-content {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
    }

    .dashboard-grid {
        grid-template-columns: 1fr;
    }

    .overview-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
