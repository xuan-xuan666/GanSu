<template>
    <div class="model-card" @click="showDetails">
        <div class="card-image">
            <img :src="model.thumbnail" :alt="model.title" />
            <span class="category-badge">{{ getCategoryName(model.category) }}</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">{{ model.title }}</h3>
            <p class="card-description">{{ truncateText(model.description, 80) }}</p>
            <div class="card-meta">
                <span class="author"><i class="fas fa-user"></i> {{ model.author }}</span>
                <span class="downloads"><i class="fas fa-download"></i> {{ model.downloads }}</span>
            </div>
            <div class="card-tags">
                <span class="tag" v-for="(tag, index) in model.tags.slice(0, 3)" :key="index">{{ tag }}</span>
            </div>
            <div class="card-actions">
                <button class="btn-primary" @click.stop="handleDownload">
                    <i class="fas fa-download"></i> 下载
                </button>
                <button class="btn-secondary" @click.stop="showDetails">
                    <i class="fas fa-info-circle"></i> 详情
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    model: {
        type: Object,
        required: true
    }
})

const router = useRouter()

const getCategoryName = (categoryId) => {
    const categories = {
        heritage: '文化遗产',
        tourism: '旅游资源',
        culture: '文化研究',
        economy: '旅游经济',
        protection: '文物保护',
        folklore: '民俗文化'
    }
    return categories[categoryId] || categoryId
}

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
}

const handleDownload = () => {
    alert(`正在下载 ${props.model.title}...`)
}

const showDetails = () => {
    emit('show-info', props.model)
}
</script>

<style scoped>
.model-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.model-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-image {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.model-card:hover .card-image img {
    transform: scale(1.1);
}

.category-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.card-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-title {
    font-size: 16px;
    color: #1a237e;
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.4;
}

.card-description {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin: 0 0 15px 0;
    flex: 1;
}

.card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
}

.card-meta i {
    margin-right: 4px;
}

.card-tags {
    display: flex;
    gap: 6px;
    margin-bottom: 15px;
}

.tag {
    background: #f0f0f0;
    color: #666;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 11px;
}

.card-actions {
    display: flex;
    gap: 10px;
}

.btn-primary, .btn-secondary {
    flex: 1;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.btn-primary {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #283593 0%, #1a237e 100%);
}

.btn-secondary {
    background: #f0f0f0;
    color: #666;
    border: 1px solid #ddd;
}

.btn-secondary:hover {
    background: #e0e0e0;
    color: #333;
}
</style>
