new Vue({
    el: '#app',
    data: {
        currentItem: '首页',
        currentSlide: 0,
        navItems: [
            { name: '首页', path: 'home', href: 'javascript:;' },
            { name: '综合新闻', path: 'news', href: 'javascript:;' },
            { name: '数据资源', path: 'data', href: 'javascript:;' },
            { name: '专题数据', path: 'topic', href: 'javascript:;' },
            { name: '模型资源', path: 'model', href: 'javascript:;' },
            { name: '科普专栏', path: 'popularization', href: 'javascript:;' },
            { name: '平台介绍', path: 'intro', href: 'javascript:;' }
        ],
        slides: [
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
        ],
        newsList: [
            { date: '2026-03-01', title: '甘肃文旅融合科学数据中心正式上线运行', href: 'javascript:;' },
            { date: '2026-02-28', title: '全省文旅大数据平台建设推进会议召开', href: 'javascript:;' },
            { date: '2026-02-25', title: '文旅融合科技创新项目获得省级表彰', href: 'javascript:;' },
            { date: '2026-02-20', title: '数据中心发布2026年第一季度旅游趋势报告', href: 'javascript:;' }
        ],
        dataResources: [
            { title: '旅游资源数据', description: '包含全省各类旅游资源的详细信息和统计数据', icon: 'fas fa-map', href: 'javascript:;' },
            { title: '游客行为数据', description: '分析游客行为特征和旅游偏好数据', icon: 'fas fa-users', href: 'javascript:;' },
            { title: '环境监测数据', description: '实时环境监测和生态数据', icon: 'fas fa-tree', href: 'javascript:;' },
            { title: '文化遗产数据', description: '全省文化遗产数字化档案数据', icon: 'fas fa-landmark', href: 'javascript:;' }
        ],
        specialTopics: [
            { title: '黄河文化专题', description: '黄河流域文化遗产和旅游资源整合分析', image: 'https://picsum.photos/300/200?random=5' },
            { title: '丝绸之路专题', description: '古丝绸之路甘肃段文旅资源研究', image: 'https://picsum.photos/300/200?random=6' },
            { title: '生态旅游专题', description: '甘肃生态旅游资源开发与保护研究', image: 'https://picsum.photos/300/200?random=7' }
        ],
        modelResources: [
            { title: '旅游流量预测模型', description: '基于历史数据的旅游流量预测分析模型', href: 'javascript:;' },
            { title: '游客偏好分析模型', description: '游客旅游偏好和行为模式分析模型', href: 'javascript:;' },
            { title: '资源评价模型', description: '旅游资源价值评估和分类模型', href: 'javascript:;' }
        ],
       科普Items: [
            { title: '什么是科学数据中心', description: '了解科学数据中心的基本概念和功能', image: 'https://picsum.photos/280/200?random=8' },
            { title: '文旅融合的意义', description: '文旅融合对经济社会发展的重要作用', image: 'https://picsum.photos/280/200?random=9' },
            { title: '大数据在文旅中的应用', description: '大数据技术如何赋能文旅产业发展', image: 'https://picsum.photos/280/200?random=10' },
            { title: '智慧旅游指南', description: '如何利用数据中心获取旅游信息', image: 'https://picsum.photos/280/200?random=11' }
        ],
        platformIntro: '甘肃文旅融合科学数据中心是甘肃省重点建设的科学数据平台，致力于整合全省文旅资源，提供全面的数据服务和分析支持。中心依托先进的大数据技术，为政府决策、科学研究和公众服务提供有力支撑。',
        platformStats: [
            { number: '1000+', label: '数据资源' },
            { number: '50+', label: '专题项目' },
            { number: '100万+', label: '访问量' },
            { number: '20+', label: '合作单位' }
        ],
        overviewData: [
            { number: '128', label: '已收录旅游资源：处' },
            { number: '45', label: '实时监测景区：个' },
            { number: '86', label: '非遗数字化项目：项' },
            { number: '3500+', label: '文创产品库：件' }
        ],
        heatmapData: [
            { name: '敦煌莫高窟', value: 2340, opacity: 1 },
            { name: '嘉峪关', value: 1850, opacity: 0.9 },
            { name: '张掖丹霞', value: 1520, opacity: 0.8 },
            { name: '鸣沙山', value: 1280, opacity: 0.7 },
            { name: '月牙泉', value: 980, opacity: 0.6 },
            { name: '麦积山', value: 850, opacity: 0.5 },
            { name: '崆峒山', value: 720, opacity: 0.4 },
            { name: '炳灵寺', value: 540, opacity: 0.3 },
            { name: '拉卜楞寺', value: 480, opacity: 0.2 }
        ],
        weatherData: [
            { location: '兰州市', type: 'sunny', status: '晴', temp: '18℃', warning: null },
            { location: '敦煌市', type: 'cloudy', status: '多云', temp: '15℃', warning: '沙尘预警' },
            { location: '张掖市', type: 'rainy', status: '小雨', temp: '12℃', warning: '道路湿滑' },
            { location: '酒泉市', type: 'windy', status: '大风', temp: '10℃', warning: '风力6级' }
        ],
        latestUpdates: [
            { time: '10:23', content: '新增景区实时监测数据：嘉峪关景区' },
            { time: '09:45', content: '更新非遗数字化项目：敦煌壁画数字化' },
            { time: '08:30', content: '新增文创产品入库：丝绸之路系列' },
            { time: '07:15', content: '更新游客行为分析报告' }
        ],
        currentTime: ''
    },
    mounted() {
        this.startCarousel();
        this.startHeatmapAnimation();
        this.startWeatherUpdates();
        this.startLatestUpdates();
        this.updateCurrentTime();
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
        startCarousel() {
            setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        getHeatmapColor(value) {
            if (value >= 2000) return '#dc2626';
            if (value >= 1500) return '#f97316';
            if (value >= 1000) return '#eab308';
            if (value >= 500) return '#84cc16';
            return '#22c55e';
        },
        startHeatmapAnimation() {
            setInterval(() => {
                this.heatmapData = this.heatmapData.map(cell => {
                    const change = Math.floor(Math.random() * 200) - 100;
                    let newValue = cell.value + change;
                    if (newValue < 0) newValue = 0;
                    if (newValue > 3000) newValue = 3000;
                    return {
                        ...cell,
                        value: newValue,
                        opacity: newValue > 500 ? 1 : 0.3
                    };
                });
            }, 3000);
        },
        getWeatherClass(type) {
            return `weather-icon-${type}`;
        },
        startWeatherUpdates() {
            setInterval(() => {
                this.weatherData = this.weatherData.map(weather => {
                    const tempChange = Math.floor(Math.random() * 5) - 2;
                    return {
                        ...weather,
                        temp: `${parseInt(weather.temp) + tempChange}℃`
                    };
                });
            }, 60000);
        },
        startLatestUpdates() {
            setInterval(() => {
                const newUpdate = {
                    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
                    content: `新增数据更新：${['景区监测数据', '游客行为数据', '环境监测数据', '文化遗产数据'][Math.floor(Math.random() * 4)]}`
                };
                this.latestUpdates.unshift(newUpdate);
                if (this.latestUpdates.length > 4) {
                    this.latestUpdates.pop();
                }
            }, 30000);
        },
        updateCurrentTime() {
            this.currentTime = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            setInterval(() => {
                this.currentTime = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            }, 1000);
        }
    }
});
