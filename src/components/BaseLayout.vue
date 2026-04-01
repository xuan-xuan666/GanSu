<template>
    <div class="base-page" :class="pageClass">
        <!-- 页面标题区域（可选） -->
        <section v-if="showHeader" class="page-header">
            <div class="container">
                <h1>{{ title }}</h1>
                <p v-if="subtitle" class="page-description">{{ subtitle }}</p>
            </div>
        </section>

        <!-- 筛选区域（可选） -->
        <section v-if="showFilter" class="filter-section">
            <div class="container">
                <slot name="filter">
                    <!-- 默认筛选内容 -->
                </slot>
            </div>
        </section>

        <!-- 主内容区域 -->
        <main class="main-content">
            <div class="container">
                <slot name="content">
                    <!-- 默认内容 -->
                </slot>
            </div>
        </main>
    </div>
</template>

<script setup>
defineProps({
    pageClass: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    showHeader: {
        type: Boolean,
        default: false
    },
    showFilter: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.base-page {
    min-height: 100vh;
    background: #f5f5f5;
}

/* 页面标题区域 */
.page-header {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    padding: 60px 0;
    text-align: center;
}

.page-header h1 {
    font-size: 36px;
    margin: 0 0 15px 0;
    font-weight: 600;
}

.page-description {
    font-size: 16px;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
    line-height: 1.6;
}

/* 筛选区域 */
.filter-section {
    background: #fff;
    padding: 20px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* 主内容区域 */
.main-content {
    padding: 40px 0;
    min-height: 600px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
</style>
