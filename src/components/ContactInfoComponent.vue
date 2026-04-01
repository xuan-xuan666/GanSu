<template>
    <div class="contact-content">
        <div class="contact-info">
            <div class="contact-item">
                <div class="contact-label">地址：</div>
                <div class="contact-value">北京市海淀区中关村南四街4号</div>
            </div>
            <div class="contact-item">
                <div class="contact-label">电话：</div>
                <div class="contact-value">010-12345678</div>
            </div>
            <div class="contact-item">
                <div class="contact-label">邮箱：</div>
                <div class="contact-value">info@casdc.cn</div>
            </div>
            <div class="contact-item">
                <div class="contact-label">网站：</div>
                <div class="contact-value"><a href="https://www.casdc.cn/home" target="_blank">https://www.casdc.cn/home</a></div>
            </div>
        </div>
        <div class="contact-image">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=中国科学院计算机网络信息中心大楼%2C%20现代化建筑%2C%20蓝色调%2C%20专业风格%2C%20高清细节&image_size=landscape_16_9" alt="中国科学院计算机网络信息中心">
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.contact-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}

.contact-info {
    width: 100%;
    max-width: 800px;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
}

.contact-item:last-child {
    margin-bottom: 0;
    border-bottom: none;
}

.contact-label {
    width: 100px;
    font-weight: 500;
    color: #333;
    font-size: 16px;
}

.contact-value {
    flex: 1;
    color: #666;
    font-size: 16px;
}

.contact-value a {
    color: #1a237e;
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-value a:hover {
    color: #0079b8;
    text-decoration: underline;
}

.contact-image {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.contact-image img {
    width: 100%;
    height: auto;
    display: block;
}

@media (max-width: 768px) {
    .contact-item {
        flex-direction: column;
        align-items: flex-start;
        padding: 15px 0;
    }
    
    .contact-label {
        margin-bottom: 5px;
    }
}
</style>