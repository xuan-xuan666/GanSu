<template>
    <div class="science-popularization-view">
        <div class="container">
            <div class="main-content">
                <div class="sidebar">
                    <div class="sidebar-section">
                        <h3>科普分类</h3>
                        <ul class="sidebar-list">
                            <li 
                                v-for="(item, index) in sidebarItems" 
                                :key="index"
                                :class="{ active: activeIndex === index }"
                                @click="activeIndex = index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    
                    <div class="sidebar-section">
                        <h3>推荐阅读</h3>
                        <ul class="recommend-list">
                            <li v-for="(item, index) in recommendItems" :key="index">
                                <a href="javascript:;">{{ item }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="content">
                    <div class="content-nav">
                        <ul>
                            <li v-for="(item, index) in contentNavItems" :key="index">
                                <a href="javascript:;">{{ item.title }}</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="image-section">
                        <div class="image-grid">
                            <div class="image-item" v-for="(image, index) in images" :key="index">
                                <img :src="image.src" :alt="image.alt">
                                <p>{{ image.title }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="intro-section">
                        <div class="intro-item" v-for="(item, index) in introItems" :key="index">
                            <div class="intro-icon">
                                <span>{{ item.icon }}</span>
                            </div>
                            <div class="intro-content">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="knowledge-section">
                        <h3>科普知识库</h3>
                        <div class="knowledge-grid">
                            <div class="knowledge-item" v-for="(item, index) in knowledgeItems" :key="index">
                                <div class="knowledge-icon">{{ item.icon }}</div>
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.description }}</p>
                                <a href="javascript:;" class="read-more">阅读更多 →</a>
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

const activeIndex = ref(0)

const sidebarItems = [
    '科学数据基础',
    '文旅融合知识',
    '大数据应用',
    '智慧旅游',
    '生态保护',
    '文化遗产保护'
]

const recommendItems = [
    '什么是科学数据中心？',
    '文旅融合的发展趋势',
    '大数据如何改变旅游',
    '智慧旅游建设指南'
]

const contentNavItems = [
    { title: '全部' },
    { title: '科学数据' },
    { title: '文旅融合' },
    { title: '技术应用' },
    { title: '生态保护' }
]

const images = [
    { src: 'https://picsum.photos/400/250?random=1', title: '科学数据中心' },
    { src: 'https://picsum.photos/400/250?random=2', title: '文旅融合发展' },
    { src: 'https://picsum.photos/400/250?random=3', title: '大数据应用' },
    { src: 'https://picsum.photos/400/250?random=4', title: '智慧旅游平台' },
    { src: 'https://picsum.photos/400/250?random=5', title: '生态保护监测' },
    { src: 'https://picsum.photos/400/250?random=6', title: '文化遗产数字化' }
]

const introItems = [
    {
        icon: '📊',
        title: '科学数据是什么',
        description: '科学数据是在科学研究活动中产生的，具有科学价值和应用价值的数据资源。它包括观测数据、实验数据、调查数据、模拟数据等多种类型。'
    },
    {
        icon: '🔗',
        title: '文旅融合的意义',
        description: '文旅融合是文化与旅游产业的深度结合，通过文化赋能旅游，旅游传播文化，实现产业协同发展和价值提升。'
    },
    {
        icon: '💡',
        title: '大数据的应用',
        description: '大数据技术在文旅领域有着广泛应用，包括游客行为分析、旅游资源优化、精准营销、智慧服务等多个方面。'
    }
]

const knowledgeItems = [
    {
        icon: '',
        title: '数据管理基础',
        description: '了解科学数据的采集、存储、管理和共享的基本方法和规范',
    },
    {
        icon: '🌐',
        title: '文旅数字化',
        description: '探索数字化转型如何推动文旅产业创新发展',
    },
    {
        icon: '',
        title: '科研方法论',
        description: '学习科学研究的基本方法和数据分析技术',
    },
    {
        icon: '🎯',
        title: '实践应用案例',
        description: '了解科学数据在文旅融合中的成功应用案例',
    }
]
</script>

<style scoped>
.science-popularization-view {
    min-height: 100vh;
    background: #f5f5f5;
}

.container {
    max-width: 1400px;
    width: 90%;
    margin: 0 auto;
    padding: 0 50px;
}

.page-title {
    text-align: center;
    padding: 60px 0 40px;
}

.page-title h2 {
    font-size: 36px;
    color: #1a237e;
    margin-bottom: 15px;
    font-weight: 700;
}

.page-title p {
    font-size: 18px;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
}

.main-content {
    display: flex;
    gap: 30px;
    padding: 40px 0 80px;
}

.sidebar {
    width: 280px;
    flex-shrink: 0;
}

.sidebar-section {
    background: #fff;
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.sidebar-section h3 {
    font-size: 18px;
    color: #1a237e;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e0e0e0;
}

.sidebar-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar-list li {
    padding: 12px 15px;
    margin-bottom: 8px;
    border-radius: 6px;
    cursor: pointer;
    color: #333;
    font-size: 15px;
    transition: all 0.3s ease;
}

.sidebar-list li:hover {
    background: #f5f5f5;
    color: #0079b8;
}

.sidebar-list li.active {
    background: linear-gradient(135deg, #4fc3f7 0%, #00bcd4 100%);
    color: #fff;
    font-weight: 500;
}

.recommend-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.recommend-list li {
    margin-bottom: 12px;
}

.recommend-list li a {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
    text-decoration: none;
    transition: color 0.3s;
}

.recommend-list li a:hover {
    color: #0079b8;
}

.content {
    flex: 1;
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.content-nav {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #e0e0e0;
}

.content-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.content-nav li a {
    display: inline-block;
    padding: 8px 20px;
    background: #f5f5f5;
    border-radius: 20px;
    color: #666;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s;
}

.content-nav li a:hover {
    background: linear-gradient(135deg, #4fc3f7 0%, #00bcd4 100%);
    color: #fff;
}

.image-section {
    margin-bottom: 40px;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.image-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.image-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.image-item img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}

.image-item p {
    padding: 12px;
    text-align: center;
    font-size: 14px;
    color: #333;
    margin: 0;
    background: #fafafa;
}

.intro-section {
    margin-bottom: 40px;
    padding: 30px;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-radius: 10px;
}

.intro-item {
    display: flex;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255,255,255,0.5);
}

.intro-item:last-child {
    border-bottom: none;
}

.intro-icon {
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.intro-content h4 {
    font-size: 20px;
    color: #1a237e;
    margin-bottom: 10px;
}

.intro-content p {
    font-size: 15px;
    color: #555;
    line-height: 1.8;
    margin: 0;
}

.knowledge-section {
    padding-top: 30px;
    border-top: 2px solid #e0e0e0;
}

.knowledge-section h3 {
    font-size: 24px;
    color: #1a237e;
    margin-bottom: 30px;
    text-align: center;
}

.knowledge-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.knowledge-item {
    background: #f9f9f9;
    padding: 25px;
    border-radius: 10px;
    transition: all 0.3s;
}

.knowledge-item:hover {
    background: #fff;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transform: translateY(-3px);
}

.knowledge-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.knowledge-item h4 {
    font-size: 18px;
    color: #1a237e;
    margin-bottom: 10px;
}

.knowledge-item p {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
}

.read-more {
    display: inline-block;
    color: #0079b8;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
}

.read-more:hover {
    color: #005da6;
}

@media (max-width: 1200px) {
    .sidebar {
        width: 240px;
    }
    
    .image-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 992px) {
    .main-content {
        flex-direction: column;
    }
    
    .sidebar {
        width: 100%;
    }
    
    .sidebar-section {
        display: inline-block;
        width: calc(50% - 10px);
        margin-right: 20px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 20px;
    }
    
    .page-title h2 {
        font-size: 28px;
    }
    
    .page-title p {
        font-size: 16px;
    }
    
    .image-grid {
        grid-template-columns: 1fr;
    }
    
    .knowledge-grid {
        grid-template-columns: 1fr;
    }
    
    .sidebar-section {
        width: 100%;
        margin-right: 0;
    }
}
</style>
