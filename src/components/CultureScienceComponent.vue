<template>
    <div class="culture-science">
        <div class="section-overview">
            <h4>文旅与科学融合</h4>
            <p>中国科学院科学数据中心积极推动文旅与科学的融合发展，通过科学数据的整合与分析，为文化旅游产业提供科学支撑，同时通过旅游活动传播科学知识，促进公众科学素养的提升。</p>
        </div>
        <div class="photo-gallery">
            <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index">
                <div class="gallery-image">
                    <img :src="item.image" :alt="item.title">
                </div>
                <div class="gallery-caption">
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const galleryItems = [
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=文化旅游与科学融合%2C%20博物馆内的科学展览%2C%20专业摄影%2C%20高清细节&image_size=landscape_16_9',
        title: '科学博物馆展览',
        description: '通过互动展览展示科学知识，提升公众科学素养'
    },
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=文化遗产与科学保护%2C%20考古现场%2C%20专业摄影%2C%20高清细节&image_size=landscape_16_9',
        title: '文化遗产科学保护',
        description: '利用科学技术手段保护和研究文化遗产'
    },
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=生态旅游与科学研究%2C%20自然保护区%2C%20专业摄影%2C%20高清细节&image_size=landscape_16_9',
        title: '生态旅游与科学研究',
        description: '在旅游活动中开展科学研究，促进生态保护'
    }
]
</script>

<style scoped>
.culture-science {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.section-overview {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.section-overview h4 {
    font-size: 24px;
    color: #1a237e;
    margin-bottom: 20px;
}

.section-overview p {
    color: #666;
    line-height: 1.6;
    font-size: 16px;
}

.photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.gallery-item {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.gallery-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.gallery-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image img {
    transform: scale(1.05);
}

.gallery-caption {
    padding: 20px;
}

.gallery-caption h5 {
    font-size: 18px;
    color: #1a237e;
    margin-bottom: 10px;
}

.gallery-caption p {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}

@media (max-width: 768px) {
    .photo-gallery {
        grid-template-columns: 1fr;
    }
    
    .gallery-image {
        height: 250px;
    }
}
</style>