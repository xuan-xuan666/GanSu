<template>
    <div class="base-card" :class="cardClass" @click="handleClick">
        <!-- 卡片图片（可选） -->
        <div v-if="image" class="card-image">
            <img :src="image" :alt="title" />
            <span v-if="badge" class="card-badge">{{ badge }}</span>
        </div>

        <!-- 卡片内容 -->
        <div class="card-content">
            <h3 v-if="title" class="card-title">{{ title }}</h3>
            <p v-if="description" class="card-description">{{ truncateText(description, descriptionLength) }}</p>
            
            <!-- 元数据区域 -->
            <div v-if="hasMeta" class="card-meta">
                <slot name="meta">
                    <span v-if="date"><i class="fas fa-calendar"></i> {{ date }}</span>
                    <span v-if="downloads !== undefined"><i class="fas fa-download"></i> {{ formatNumber(downloads) }}</span>
                </slot>
            </div>

            <!-- 操作按钮区域 -->
            <div v-if="$slots.actions" class="card-actions">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cardClass: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    descriptionLength: {
        type: Number,
        default: 80
    },
    badge: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: ''
    },
    downloads: {
        type: Number,
        default: undefined
    },
    hasMeta: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['click'])

const truncateText = (text, maxLength) => {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
}

const formatNumber = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
}

const handleClick = () => {
    emit('click')
}
</script>

<style scoped>
.base-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.base-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
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
    transition: transform 0.3s;
}

.base-card:hover .card-image img {
    transform: scale(1.1);
}

.card-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    padding: 4px 12px;
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
    font-size: 13px;
    color: #999;
    padding-top: 15px;
    border-top: 1px solid #f0f0f0;
}

.card-meta i {
    margin-right: 4px;
}

.card-actions {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

/* 响应式 */
@media (max-width: 768px) {
    .card-image {
        height: 180px;
    }
}
</style>
