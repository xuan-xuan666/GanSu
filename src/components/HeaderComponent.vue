<template>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <div class="logo-icon"></div>
                    <h1>甘肃文旅融合科学数据中心</h1>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li v-for="item in navItems" :key="item.path">
                            <router-link :to="item.to" :class="{ active: currentItem === item.path }">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const currentItem = ref('home')

const navItems = [
    { name: '首页', path: 'home', to: '/' },
    { name: '综合新闻', path: 'news', to: '/news' },
    { name: '数据资源', path: 'data-resources', to: '/data-resources' },
    { name: '专题数据', path: 'topic', to: '/topic-data' },
    { name: '模型资源', path: 'model', to: '/model' },
    { name: '景区监测', path: 'scenic-monitoring', to: '/scenic-monitoring' },
    { name: '科普专栏', path: 'popularization', to: '/popularization' },
    { name: '平台介绍', path: 'platform-intro', to: '/platform-intro' }
]

// 根据当前路由更新激活的导航项
const updateCurrentItem = () => {
    const currentPath = route.path
    const item = navItems.find(item => item.to === currentPath)
    if (item) {
        currentItem.value = item.path
    } else {
        currentItem.value = 'home'
    }
}

// 监听路由变化
watch(() => route.path, updateCurrentItem)

// 初始化时更新一次
updateCurrentItem()
</script>

<style scoped>
.header {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    padding: 15px 0;
}

.header .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    color: #fff;
}

.logo-icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    background: linear-gradient(135deg, #4fc3f7 0%, #00bcd4 100%);
    border-radius: 8px;
}

.logo h1 {
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;
}

.main-nav ul {
    display: flex;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
}

.main-nav li {
    position: relative;
}

.main-nav li a {
    display: block;
    padding: 10px 20px;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.3s ease;
    border-radius: 4px;
}

.main-nav li a:hover {
    background: rgba(255,255,255,0.1);
    color: #4fc3f7;
}

.main-nav li a.active {
    background: linear-gradient(135deg, #4fc3f7 0%, #00bcd4 100%);
    color: #fff;
    box-shadow: 0 2px 8px rgba(79, 195, 247, 0.3);
}

@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 15px;
    }
    
    .logo {
        justify-content: center;
    }
    
    .main-nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .main-nav li a {
        padding: 8px 12px;
        font-size: 14px;
    }
}
</style>
