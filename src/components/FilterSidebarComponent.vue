<template>
    <div class="filter-sidebar">
        <div class="filter-group" v-for="(group, groupIndex) in filterGroups" :key="groupIndex">
            <h3 class="filter-title">{{ group.title }}</h3>
            <ul class="filter-list">
                <li v-for="(item, itemIndex) in group.items" 
                    :key="itemIndex" 
                    :class="{ active: modelValue === item.value }" 
                    @click="$emit('update:modelValue', item.value)">
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    filterGroups: {
        type: Array,
        required: true,
        default: () => []
    }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.filter-sidebar {
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
</style>
