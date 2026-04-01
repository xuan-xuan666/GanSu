<template>
    <div class="ich-page">
        <div class="main-content">
            <div class="sidebar">
                <div class="filter-group">
                    <h3 class="filter-title">联合国非遗（3 项）</h3>
                    <ul class="filter-list">
                        <li :class="{ active: selectedICH === 'huaer' }" @click="selectedICH = 'huaer'">
                            花儿
                        </li>
                        <li :class="{ active: selectedICH === 'gesar' }" @click="selectedICH = 'gesar'">
                            格萨（斯）尔
                        </li>
                        <li :class="{ active: selectedICH === 'shadow' }" @click="selectedICH = 'shadow'">
                            皮影戏
                        </li>
                    </ul>
                </div>

                <div class="filter-group">
                    <h3 class="filter-title">国家级非遗（83 项）</h3>
                    <ul class="filter-list">
                        <li :class="{ active: selectedICH === 'longju' }" @click="selectedICH = 'longju'">
                            陇剧
                        </li>
                        <li :class="{ active: selectedICH === 'xiangbao' }" @click="selectedICH = 'xiangbao'">
                            庆阳香包
                        </li>
                        <li :class="{ active: selectedICH === 'zhuandiao' }" @click="selectedICH = 'zhuandiao'">
                            临夏砖雕
                        </li>
                    </ul>
                </div>

                <div class="filter-group">
                    <h3 class="filter-title">数字化类型</h3>
                    <ul class="filter-list">
                        <li :class="{ active: selectedType === 'panorama' }" @click="selectedType = 'panorama'">
                            全景记录（360°视频）
                        </li>
                        <li :class="{ active: selectedType === 'mocap' }" @click="selectedType = 'mocap'">
                            工艺动作捕捉
                        </li>
                        <li :class="{ active: selectedType === 'oral' }" @click="selectedType = 'oral'">
                            传承人口述史
                        </li>
                    </ul>
                </div>
            </div>

            <div class="content-area">
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
                                <div class="generation-line diagonal left"></div>
                                <div class="generation-line diagonal right"></div>
                            </div>
                            <div class="third-generation">
                                <div class="node-branch">
                                    <div class="node-content">
                                        <span class="node-name">第二代传人 A</span>
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
                                        <span class="tag">国家级代表性传承人</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="graph-legend">
                            <h4>图例说明</h4>
                            <div class="legend-item">
                                <span class="legend-line solid"></span>
                                <span>师承关系</span>
                            </div>
                            <div class="legend-item">
                                <span class="legend-line dashed"></span>
                                <span>流派分支</span>
                            </div>
                            <div class="legend-item">
                                <span class="legend-tag active"></span>
                                <span>现任传承人</span>
                            </div>
                            <div class="legend-item">
                                <span class="legend-tag"></span>
                                <span>历代传承人</span>
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
                                <p class="video-desc">点击播放非遗技艺演示</p>
                            </div>
                            <div class="video-controls">
                                <button class="control-btn">⏮️</button>
                                <button class="control-btn play">▶</button>
                                <button class="control-btn">⏭️</button>
                                <div class="progress-bar">
                                    <div class="progress-fill"></div>
                                </div>
                                <span class="time-display">00:00 / 15:30</span>
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

                <div class="academic-section">
                    <h3 class="section-title">学术研究</h3>
                    <div class="academic-content">
                        <div class="academic-tabs">
                            <button :class="{ active: academicTab === 'papers' }" @click="academicTab = 'papers'" class="tab-btn">
                                学术论文
                            </button>
                            <button :class="{ active: academicTab === 'books' }" @click="academicTab = 'books'" class="tab-btn">
                                专著著作
                            </button>
                            <button :class="{ active: academicTab === 'theses' }" @click="academicTab = 'theses'" class="tab-btn">
                                学位论文
                            </button>
                        </div>
                        <div class="academic-list">
                            <div v-if="academicTab === 'papers'" class="list-content">
                                <div class="academic-item" v-for="paper in papers" :key="paper.id">
                                    <div class="item-title">{{ paper.title }}</div>
                                    <div class="item-meta">
                                        <span class="author">{{ paper.author }}</span>
                                        <span class="journal">{{ paper.journal }}</span>
                                        <span class="year">{{ paper.year }}</span>
                                    </div>
                                    <div class="item-actions">
                                        <button class="action-btn">📄 PDF</button>
                                        <button class="action-btn">🔗 DOI</button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="academicTab === 'books'" class="list-content">
                                <div class="academic-item" v-for="book in books" :key="book.id">
                                    <div class="item-title">{{ book.title }}</div>
                                    <div class="item-meta">
                                        <span class="author">{{ book.author }}</span>
                                        <span class="publisher">{{ book.publisher }}</span>
                                        <span class="year">{{ book.year }}</span>
                                    </div>
                                    <div class="item-actions">
                                        <button class="action-btn">📖 详情</button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="academicTab === 'theses'" class="list-content">
                                <div class="academic-item" v-for="thesis in theses" :key="thesis.id">
                                    <div class="item-title">{{ thesis.title }}</div>
                                    <div class="item-meta">
                                        <span class="author">{{ thesis.author }}</span>
                                        <span class="university">{{ thesis.university }}</span>
                                        <span class="year">{{ thesis.year }}</span>
                                    </div>
                                    <div class="item-actions">
                                        <button class="action-btn">📄 PDF</button>
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
import { ref } from 'vue'

const selectedICH = ref('huaer')
const selectedType = ref('panorama')
const academicTab = ref('papers')

const papers = ref([
    {
        id: 1,
        title: '甘肃非物质文化遗产数字化保护与传承研究',
        author: '张三，李四',
        journal: '文化遗产研究',
        year: '2024'
    },
    {
        id: 2,
        title: '陇剧艺术特征与传承发展路径探析',
        author: '王五',
        journal: '中国戏曲研究',
        year: '2023'
    },
    {
        id: 3,
        title: '庆阳香包制作工艺的非遗价值研究',
        author: '赵六，钱七',
        journal: '民间工艺',
        year: '2023'
    },
    {
        id: 4,
        title: '非物质文化遗产的数字化记录方法',
        author: '孙八',
        journal: '数字人文',
        year: '2022'
    }
])

const books = ref([
    {
        id: 1,
        title: '甘肃非物质文化遗产概览',
        author: '甘肃省文化厅',
        publisher: '甘肃人民出版社',
        year: '2023'
    },
    {
        id: 2,
        title: '陇剧艺术研究',
        author: '李明',
        publisher: '中国戏剧出版社',
        year: '2022'
    },
    {
        id: 3,
        title: '西北民间工艺集成',
        author: '王华 主编',
        publisher: '民族出版社',
        year: '2021'
    }
])

const theses = ref([
    {
        id: 1,
        title: '甘肃非遗数字化保护体系构建研究',
        author: '张小华',
        university: '兰州大学',
        year: '2024'
    },
    {
        id: 2,
        title: '临夏砖雕工艺传承人口述史研究',
        author: '刘伟',
        university: '西北师范大学',
        year: '2023'
    },
    {
        id: 3,
        title: '皮影戏表演艺术的数字化记录与传播',
        author: '陈静',
        university: '甘肃农业大学',
        year: '2023'
    }
])
</script>

<style scoped>
.ich-page {
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

.inheritance-section,
.multimedia-section,
.academic-section {
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

.inheritance-graph {
    padding: 20px 0;
}

.graph-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.root-node,
.second-generation,
.third-generation,
.fourth-generation {
    display: flex;
    justify-content: center;
    gap: 40px;
}

.node-branch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.node-content {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    text-align: center;
    min-width: 120px;
}

.node-name {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
}

.node-time {
    display: block;
    font-size: 12px;
    opacity: 0.9;
}

.node-tags {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
}

.tag {
    padding: 3px 8px;
    background: #f5f5f5;
    border-radius: 12px;
    font-size: 11px;
    color: #666;
}

.tag.active {
    background: linear-gradient(135deg, #4caf50 0%, #8bc34a 100%);
    color: #fff;
}

.generation-line {
    width: 2px;
    height: 30px;
    background: #005da6;
}

.generation-line.diagonal {
    height: 40px;
    position: relative;
}

.generation-line.diagonal.left {
    transform: rotate(30deg);
    transform-origin: top center;
}

.generation-line.diagonal.right {
    transform: rotate(-30deg);
    transform-origin: top center;
}

.graph-legend {
    margin-top: 30px;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px;
}

.graph-legend h4 {
    font-size: 14px;
    color: #1a237e;
    margin-bottom: 10px;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    font-size: 13px;
    color: #666;
}

.legend-line {
    width: 30px;
    height: 2px;
    background: #005da6;
}

.legend-line.dashed {
    border-top: 2px dashed #005da6;
    background: transparent;
}

.legend-tag {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: #f5f5f5;
}

.legend-tag.active {
    background: linear-gradient(135deg, #4caf50 0%, #8bc34a 100%);
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
}

.video-placeholder {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
}

.play-button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(0,93,166,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #fff;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all 0.3s;
}

.play-button:hover {
    background: rgba(0,93,166,1);
    transform: scale(1.1);
}

.video-placeholder p {
    font-size: 16px;
    margin-bottom: 5px;
}

.video-desc {
    font-size: 14px;
    color: #999;
}

.video-controls {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: #222;
}

.control-btn {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    padding: 5px 10px;
    transition: all 0.3s;
}

.control-btn:hover {
    color: #4fc3f7;
}

.control-btn.play {
    font-size: 24px;
}

.progress-bar {
    flex: 1;
    height: 4px;
    background: #444;
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
}

.progress-fill {
    width: 35%;
    height: 100%;
    background: linear-gradient(90deg, #005da6 0%, #0079b8 100%);
}

.time-display {
    font-size: 12px;
    color: #999;
    min-width: 100px;
    text-align: right;
}

.step-list {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
}

.step-list h4 {
    font-size: 16px;
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
    gap: 12px;
    padding: 12px;
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
    border-radius: 50%;
    background: #e0e0e0;
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
    font-weight: 500;
}

.academic-content {
    padding: 10px 0;
}

.academic-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
}

.tab-btn {
    padding: 10px 20px;
    background: transparent;
    border: none;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s;
}

.tab-btn:hover {
    background: #f5f5f5;
    color: #005da6;
}

.tab-btn.active {
    background: linear-gradient(135deg, #005da6 0%, #0079b8 100%);
    color: #fff;
}

.academic-item {
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px;
    margin-bottom: 15px;
    transition: all 0.3s;
}

.academic-item:hover {
    background: #e3f2fd;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.item-title {
    font-size: 15px;
    color: #1a237e;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1.5;
}

.item-meta {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 10px;
}

.item-meta span {
    font-size: 13px;
    color: #666;
}

.author {
    color: #005da6;
    font-weight: 500;
}

.item-actions {
    display: flex;
    gap: 10px;
}

.action-btn {
    padding: 6px 12px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s;
}

.action-btn:hover {
    background: #005da6;
    color: #fff;
    border-color: #005da6;
}
</style>
