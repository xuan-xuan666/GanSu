<template>
    <div class="tech-content">
        <div class="tech-image">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=科学数据中心技术架构图%2C%20分层架构%2C%20蓝色调%2C%20专业风格%2C%20高清细节&image_size=landscape_16_9" alt="技术架构图">
        </div>
        <div class="tech-layers">
            <div class="tech-layer">
                <h4>应用层</h4>
                <p>数据门户、API服务、分析工具、可视化平台</p>
            </div>
            <div class="tech-layer">
                <h4>服务层</h4>
                <p>数据管理服务、认证授权服务、元数据服务、搜索服务</p>
            </div>
            <div class="tech-layer">
                <h4>存储层</h4>
                <p>分布式存储、对象存储、数据库、缓存</p>
            </div>
            <div class="tech-layer">
                <h4>基础设施层</h4>
                <p>计算资源、网络资源、安全设施、监控系统</p>
            </div>
        </div>
        <div class="tech-photos">
            <div class="photo-item" v-for="(photo, index) in techPhotos" :key="index">
                <img :src="photo.image" :alt="photo.title">
                <div class="photo-caption">{{ photo.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const techPhotos = [
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=云计算技术架构%2C%20数据中心%2C%20蓝色调%2C%20专业风格%2C%20高清细节&image_size=landscape_16_9',
        title: '云计算技术架构'
    },
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=大数据存储系统%2C%20服务器集群%2C%20蓝色调%2C%20专业风格%2C%20高清细节&image_size=landscape_16_9',
        title: '大数据存储系统'
    },
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=网络安全架构%2C%20数据保护%2C%20蓝色调%2C%20专业风格%2C%20高清细节&image_size=landscape_16_9',
        title: '网络安全架构'
    }
]
</script>

<style scoped>
.tech-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}

.tech-image {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.tech-image img {
    width: 100%;
    height: auto;
    display: block;
}

.tech-layers {
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.tech-layer {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-layer:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.tech-layer h4 {
    color: #1a237e;
    margin-bottom: 10px;
    font-size: 18px;
    text-align: center;
}

.tech-layer p {
    color: #666;
    margin: 0;
    text-align: center;
    line-height: 1.5;
}

.tech-photos {
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
    .tech-layers {
        grid-template-columns: 1fr;
    }
}
</style>