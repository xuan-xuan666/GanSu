<template>
    <div class="org-content">
        <div class="org-chart">
            <div class="org-level">
                <div class="org-item">中国科学院科学数据中心</div>
            </div>
            <div class="org-level">
                <div class="org-item">数据管理部</div>
                <div class="org-item">技术研发部</div>
                <div class="org-item">服务推广部</div>
                <div class="org-item">国际合作部</div>
            </div>
            <div class="org-level">
                <div class="org-item">数据采集与处理</div>
                <div class="org-item">数据存储与管理</div>
                <div class="org-item">数据分析与挖掘</div>
                <div class="org-item">数据共享与服务</div>
            </div>
        </div>
        <div class="org-image">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=中国科学院科学数据中心组织架构图%2C%20专业设计%2C%20蓝色调%2C%20清晰的层次结构%2C%20现代化风格%2C%20高清细节&image_size=landscape_16_9" alt="组织架构图">
        </div>
        <div class="org-photos">
            <div class="photo-item" v-for="(photo, index) in orgPhotos" :key="index">
                <img :src="photo.image" :alt="photo.title">
                <div class="photo-caption">{{ photo.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const orgPhotos = [
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=中国科学院计算机网络信息中心大楼%2C%20现代化建筑%2C%20蓝色调%2C%20专业风格%2C%20高清细节&image_size=landscape_16_9',
        title: '中国科学院计算机网络信息中心'
    },
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=科研团队工作场景%2C%20数据中心%2C%20专业设备%2C%20蓝色调%2C%20高清细节&image_size=landscape_16_9',
        title: '科研团队工作场景'
    },
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数据中心机房%2C%20服务器阵列%2C%20蓝色调%2C%20专业风格%2C%20高清细节&image_size=landscape_16_9',
        title: '数据中心机房'
    }
]
</script>

<style scoped>
.org-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.org-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
}

.org-level {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.org-item {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    font-weight: 500;
    min-width: 150px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.org-item:hover {
    transform: translateY(-5px);
}

.org-image {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.org-image img {
    width: 100%;
    height: auto;
    display: block;
}

.org-photos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    margin-top: 30px;
}

.photo-item {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.photo-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.photo-caption {
    padding: 15px;
    text-align: center;
    font-weight: 500;
    color: #1a237e;
}

@media (max-width: 768px) {
    .org-level {
        flex-direction: column;
        align-items: center;
    }
    
    .org-item {
        width: 100%;
        max-width: 250px;
    }
}
</style>