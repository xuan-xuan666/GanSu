<template>
    <section class="carousel">
        <div class="carousel-container">
            <div class="carousel-slides" :style="{ transform: `translateX(${ -currentSlide * 100 }%)` }">
                <div class="slide" v-for="(slide, index) in slides" :key="index">
                    <img :src="slide.image" :alt="slide.title">
                    <div class="slide-caption" v-if="slide.title">
                        <h2>{{ slide.title }}</h2>
                        <p>{{ slide.description }}</p>
                    </div>
                </div>
            </div>
            <div class="carousel-controls">
                <button @click="prevSlide" class="control-btn prev">❮</button>
                <button @click="nextSlide" class="control-btn next">❯</button>
            </div>
            <div class="carousel-dots">
                <span 
                    v-for="(slide, index) in slides" 
                    :key="index" 
                    class="dot" 
                    :class="{ active: currentSlide === index }"
                    @click="currentSlide = index">
                </span>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentSlide = ref(0)
const slides = [
    {
        title: '甘肃文旅资源大数据平台',
        description: '整合全省文旅资源，提供全面的数据支持和服务',
        image: 'https://picsum.photos/1200/500?random=1'
    },
    {
        title: '生态旅游数据分析中心',
        description: '实时监测生态旅游数据，助力可持续发展',
        image: 'https://picsum.photos/1200/500?random=2'
    },
    {
        title: '智慧文旅融合创新平台',
        description: '推动文旅融合创新发展，打造智慧旅游新体验',
        image: 'https://picsum.photos/1200/500?random=3'
    },
    {
        title: '文化遗产数字化保护工程',
        description: '运用大数据技术保护和传承文化遗产',
        image: 'https://picsum.photos/1200/500?random=4'
    }
]

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const startCarousel = () => {
    setInterval(() => {
        nextSlide()
    }, 5000)
}

onMounted(() => {
    startCarousel()
})
</script>

<style scoped>
.carousel {
    height: 500px;
    background: #000;
    overflow: hidden;
    position: relative;
}

.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.carousel-slides {
    display: flex;
    height: 100%;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    height: 100%;
    position: relative;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-caption {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.7);
    color: #fff;
    padding: 30px;
    border-radius: 8px;
    max-width: 800px;
    text-align: center;
}

.slide-caption h2 {
    font-size: 36px;
    margin-bottom: 15px;
    color: #4fc3f7;
}

.slide-caption p {
    font-size: 16px;
    color: #ddd;
}

.carousel-controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.control-btn {
    background: rgba(0,0,0,0.5);
    color: #fff;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
}

.control-btn:hover {
    background: rgba(0,123,184,0.8);
}

.carousel-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
    transition: background 0.3s;
}

.dot.active {
    background: #4fc3f7;
    transform: scale(1.2);
}
</style>
