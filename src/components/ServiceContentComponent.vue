<template>
    <div class="service-content">
        <div class="service-grid">
            <div class="service-item">
                <div class="service-icon">
                    <span class="icon-data">📊</span>
                </div>
                <h4>数据资源</h4>
                <p>整合全院各领域的科学数据资源，提供标准化的数据管理和共享服务</p>
                <div class="service-image">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=科学数据资源管理%2C%20数据可视化%2C%20蓝色调%2C%20专业风格%2C%20高清细节&image_size=square" alt="数据资源">
                </div>
            </div>
            <div class="service-item">
                <div class="service-icon">
                    <span class="icon-tool">🛠️</span>
                </div>
                <h4>工具服务</h4>
                <p>提供数据处理、分析、可视化等工具，支持科研人员开展数据分析工作</p>
                <div class="service-image">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数据分析工具%2C%20可视化界面%2C%20专业风格%2C%20蓝色调%2C%20高清细节&image_size=square" alt="工具服务">
                </div>
            </div>
            <div class="service-item">
                <div class="service-icon">
                    <span class="icon-api">🔌</span>
                </div>
                <h4>API服务</h4>
                <p>提供标准化的API接口，支持第三方应用和系统集成</p>
                <div class="service-image">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=API接口服务%2C%20技术架构%2C%20专业风格%2C%20蓝色调%2C%20高清细节&image_size=square" alt="API服务">
                </div>
            </div>
            <div class="service-item">
                <div class="service-icon">
                    <span class="icon-training">🎓</span>
                </div>
                <h4>培训与咨询</h4>
                <p>开展数据管理培训和咨询服务，提高科研人员的数据管理能力</p>
                <div class="service-image">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数据管理培训%2C%20研讨会%2C%20专业风格%2C%20蓝色调%2C%20高清细节&image_size=square" alt="培训与咨询">
                </div>
            </div>
        </div>
        <div class="service-photos">
            <div class="photo-item" v-for="(photo, index) in servicePhotos" :key="index">
                <img :src="photo.image" :alt="photo.title">
                <div class="photo-caption">{{ photo.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const servicePhotos = [
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=科学数据服务平台%2C%20数据可视化界面%2C%20专业风格%2C%20蓝色调%2C%20高清细节&image_size=landscape_16_9',
        title: '科学数据服务平台'
    },
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数据管理系统%2C%20专业界面%2C%20蓝色调%2C%20高清细节&image_size=landscape_16_9',
        title: '数据管理系统'
    },
    {
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=科研人员培训%2C%20数据科学研讨会%2C%20专业风格%2C%20蓝色调%2C%20高清细节&image_size=landscape_16_9',
        title: '科研人员培训'
    }
]
</script>

<style scoped>
.service-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.service-photos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
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

.service-item {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.service-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #4fc3f7 0%, #00bcd4 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.service-icon span {
    font-size: 32px;
}

.service-item h4 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #1a237e;
}

.service-item p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    flex: 1;
}

.service-image {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-top: auto;
}

.service-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.service-item:hover .service-image img {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .service-grid {
        grid-template-columns: 1fr;
    }
}
</style>