<template>
    <div class="eco-monitoring-page">
        <div class="main-content">
            <div class="sidebar">
                <div class="filter-group">
                    <h3 class="filter-title">实时监测</h3>
                    <ul class="filter-list">
                        <li :class="{ active: selectedCategory === 'air' }" @click="selectedCategory = 'air'">
                            空气质量指数
                        </li>
                        <li :class="{ active: selectedCategory === 'water' }" @click="selectedCategory = 'water'">
                            水质监测
                        </li>
                        <li :class="{ active: selectedCategory === 'noise' }" @click="selectedCategory = 'noise'">
                            噪声监测
                        </li>
                    </ul>
                </div>

                <div class="filter-group">
                    <h3 class="filter-title">长期观测</h3>
                    <ul class="filter-list">
                        <li :class="{ active: selectedCategory === 'vegetation' }" @click="selectedCategory = 'vegetation'">
                            植被覆盖变化
                        </li>
                        <li :class="{ active: selectedCategory === 'glacier' }" @click="selectedCategory = 'glacier'">
                            冰川退缩监测
                        </li>
                        <li :class="{ active: selectedCategory === 'desert' }" @click="selectedCategory = 'desert'">
                            沙漠化防治效果
                        </li>
                    </ul>
                </div>

                <div class="filter-group">
                    <h3 class="filter-title">灾害预警</h3>
                    <ul class="filter-list">
                        <li :class="{ active: selectedCategory === 'geological' }" @click="selectedCategory = 'geological'">
                            地质灾害风险
                        </li>
                        <li :class="{ active: selectedCategory === 'weather' }" @click="selectedCategory = 'weather'">
                            气象灾害预警
                        </li>
                    </ul>
                </div>
            </div>

            <div class="content-area">
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
                        <div class="comparison-stats">
                            <div class="stat-item">
                                <span class="stat-label">植被覆盖率变化</span>
                                <span class="stat-value positive">+12.5%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">冰川面积变化</span>
                                <span class="stat-value negative">-3.2%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">沙漠化治理面积</span>
                                <span class="stat-value positive">+850 km²</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="report-section">
                    <h3 class="section-title">自动生成生态环境监测报告</h3>
                    <div class="report-config">
                        <div class="config-row">
                            <label class="config-label">报告类型：</label>
                            <select v-model="reportType" class="config-select">
                                <option value="daily">日报</option>
                                <option value="weekly">周报</option>
                                <option value="monthly">月报</option>
                                <option value="yearly">年报</option>
                            </select>
                        </div>
                        <div class="config-row">
                            <label class="config-label">监测区域：</label>
                            <select v-model="reportRegion" class="config-select">
                                <option value="all">全部区域</option>
                                <option value="gannan">甘南草原</option>
                                <option value="qilian">祁连山</option>
                                <option value="yueya">月牙泉</option>
                            </select>
                        </div>
                        <div class="config-row">
                            <label class="config-label">数据维度：</label>
                            <div class="checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" v-model="reportOptions.air" checked> 空气质量
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" v-model="reportOptions.water"> 水质
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" v-model="reportOptions.noise"> 噪声
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" v-model="reportOptions.vegetation"> 植被
                                </label>
                            </div>
                        </div>
                        <div class="config-row">
                            <label class="config-label">导出格式：</label>
                            <div class="format-buttons">
                                <button :class="{ active: reportFormat === 'pdf' }" @click="reportFormat = 'pdf'">
                                    PDF
                                </button>
                                <button :class="{ active: reportFormat === 'excel' }" @click="reportFormat = 'excel'">
                                    Excel
                                </button>
                                <button :class="{ active: reportFormat === 'csv' }" @click="reportFormat = 'csv'">
                                    CSV
                                </button>
                            </div>
                        </div>
                        <div class="config-actions">
                            <button class="generate-btn" @click="generateReport">
                                生成并下载报告
                            </button>
                        </div>
                    </div>
                    <div class="report-history" v-if="reportHistory.length > 0">
                        <h4 class="history-title">最近生成的报告</h4>
                        <div class="history-list">
                            <div class="history-item" v-for="report in reportHistory" :key="report.id">
                                <div class="history-info">
                                    <div class="history-name">{{ report.name }}</div>
                                    <div class="history-time">{{ report.time }}</div>
                                </div>
                                <button class="download-btn" @click="downloadReport(report)">
                                    下载
                                </button>
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

const selectedCategory = ref('air')

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

const reportType = ref('monthly')
const reportRegion = ref('all')
const reportFormat = ref('pdf')
const reportOptions = ref({
    air: true,
    water: false,
    noise: false,
    vegetation: true
})

const reportHistory = ref([
    { id: 1, name: '甘南草原_月报_2025-02.pdf', time: '2025-03-01 10:30' },
    { id: 2, name: '祁连山_周报_2025-W08.pdf', time: '2025-02-25 14:20' },
    { id: 3, name: '月牙泉_日报_20250220.pdf', time: '2025-02-20 09:15' }
])

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

const generateReport = () => {
    const reportName = `${reportRegion.value}_report_${reportType.value}_${new Date().toISOString().slice(0, 10)}`
    reportHistory.value.unshift({
        id: Date.now(),
        name: `${reportName}.${reportFormat.value}`,
        time: new Date().toLocaleString('zh-CN')
    })
    alert(`报告已生成并下载：${reportName}.${reportFormat.value}`)
}

const downloadReport = (report) => {
    alert(`正在下载：${report.name}`)
}
</script>

<style scoped>
.eco-monitoring-page {
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

.dashboard-section {
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
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.status-badge.good {
    background: #4caf50;
}

.status-badge.warning {
    background: #ff9800;
}

.status-badge.danger {
    background: #f44336;
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
    margin-bottom: 8px;
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
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
}

.metric-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s;
}

.timeline-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.timeline-container {
    padding: 10px 0;
}

.timeline-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
}

.time-btn {
    padding: 10px 20px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s;
}

.time-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,93,166,0.3);
}

.time-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.year-display {
    font-size: 24px;
    font-weight: 600;
    color: #1a237e;
    min-width: 120px;
    text-align: center;
}

.timeline-slider {
    margin-bottom: 30px;
}

.slider {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #e0e0e0;
    outline: none;
    -webkit-appearance: none;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
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
    margin-bottom: 20px;
    height: 300px;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999;
}

.image-placeholder p {
    font-size: 16px;
    font-weight: 500;
}

.comparison-divider {
    width: 4px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    border-radius: 2px;
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
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.slider-handle::before {
    content: '◀ ▶';
    font-size: 12px;
    color: #005da6;
}

.comparison-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 8px;
}

.stat-label {
    font-size: 13px;
    color: #666;
}

.stat-value {
    font-size: 18px;
    font-weight: 600;
}

.stat-value.positive {
    color: #4caf50;
}

.stat-value.negative {
    color: #f44336;
}

.report-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.report-config {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
}

.config-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 15px;
}

.config-label {
    width: 100px;
    font-size: 14px;
    color: #333;
    font-weight: 500;
}

.config-select {
    flex: 1;
    max-width: 300px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    background: #fff;
    cursor: pointer;
}

.config-select:focus {
    outline: none;
    border-color: #005da6;
}

.checkbox-group {
    display: flex;
    gap: 20px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

.format-buttons {
    display: flex;
    gap: 10px;
}

.format-buttons button {
    padding: 10px 20px;
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
}

.format-buttons button:hover {
    border-color: #005da6;
    color: #005da6;
}

.format-buttons button.active {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    border-color: #005da6;
}

.config-actions {
    text-align: center;
    margin-top: 30px;
}

.generate-btn {
    padding: 15px 40px;
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.generate-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,93,166,0.3);
}

.report-history {
    margin-top: 30px;
}

.history-title {
    font-size: 16px;
    color: #1a237e;
    margin-bottom: 15px;
    font-weight: 600;
}

.history-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.history-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 8px;
    transition: all 0.3s;
}

.history-item:hover {
    background: #e3f2fd;
}

.history-info {
    flex: 1;
}

.history-name {
    font-size: 14px;
    color: #333;
    font-weight: 500;
    margin-bottom: 5px;
}

.history-time {
    font-size: 12px;
    color: #999;
}

.download-btn {
    padding: 8px 16px;
    background: linear-gradient(135deg, #4caf50 0%, #8bc34a 100%);
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    transition: all 0.3s;
}

.download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76,175,80,0.3);
}
</style>
