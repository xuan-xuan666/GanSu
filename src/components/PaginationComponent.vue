<template>
    <div class="pagination" v-if="totalPages > 1">
        <button 
            class="pagination-btn" 
            :disabled="currentPage <= 1"
            @click="changePage(currentPage - 1)"
        >
            &lt; 上一页
        </button>
        
        <button 
            class="pagination-btn" 
            :class="{ active: page === currentPage }"
            v-for="page in getPageNumbers()" 
            :key="page"
            @click="changePage(page)"
        >
            {{ page }}
        </button>
        
        <button 
            class="pagination-btn" 
            :disabled="currentPage >= totalPages"
            @click="changePage(currentPage + 1)"
        >
            下一页 &gt;
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['page-change'])

const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, props.currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(props.totalPages, startPage + maxVisiblePages - 1)
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }
    
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }
    
    return pages
}

const changePage = (page) => {
    if (page >= 1 && page <= props.totalPages) {
        emit('page-change', page)
    }
}
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 30px;
    padding: 20px 0;
}

.pagination-btn {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background: #fff;
    color: #333;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s;
    min-width: 40px;
    text-align: center;
}

.pagination-btn:not(:disabled):hover {
    background: #1a237e;
    color: #fff;
    border-color: #1a237e;
}

.pagination-btn.active {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    border-color: #1a237e;
}

.pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f5f5f5;
    color: #999;
}
</style>
