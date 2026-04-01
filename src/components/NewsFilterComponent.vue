<template>
    <div class="news-filter">
        <div class="filter-group">
            <label>新闻分类：</label>
            <select v-model="selectedCategory" @change="emitFilter">
                <option value="all">全部分类</option>
                <option value="platform">平台动态</option>
                <option value="activity">活动资讯</option>
                <option value="industry">行业资讯</option>
                <option value="policy">政策法规</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label>时间范围：</label>
            <select v-model="selectedPeriod" @change="emitFilter">
                <option value="all">全部时间</option>
                <option value="week">最近一周</option>
                <option value="month">最近一月</option>
                <option value="quarter">最近三月</option>
            </select>
        </div>
        
        <div class="filter-group filter-keyword">
            <input 
                type="text" 
                v-model="keyword" 
                placeholder="搜索新闻..." 
                @input="emitFilter"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCategory = ref('all')
const selectedPeriod = ref('all')
const keyword = ref('')

const emitFilter = () => {
    emit('filter-change', {
        category: selectedCategory.value,
        period: selectedPeriod.value,
        keyword: keyword.value
    })
}
</script>

<style scoped>
.news-filter {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.filter-group label {
    font-size: 14px;
    color: #666;
    font-weight: 500;
    white-space: nowrap;
}

.filter-group select,
.filter-group input {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    background: #fff;
    cursor: pointer;
    transition: border-color 0.3s;
}

.filter-group select:hover,
.filter-group input:hover {
    border-color: #4fc3f7;
}

.filter-group select:focus,
.filter-group input:focus {
    outline: none;
    border-color: #1a237e;
}

.filter-keyword {
    margin-left: auto;
}

.filter-keyword input {
    width: 200px;
}

@media (max-width: 768px) {
    .news-filter {
        flex-direction: column;
        gap: 15px;
    }
    
    .filter-keyword {
        margin-left: 0;
    }
    
    .filter-keyword input {
        width: 100%;
    }
}
</style>
