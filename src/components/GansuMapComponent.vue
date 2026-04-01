<template>
    <div class="gansu-map-container">
        <div class="map-header">
            <h3>甘肃各市实时数据监控</h3>
            <span class="update-time">更新时间：{{ currentTime }}</span>
        </div>

        <!-- ECharts地图容器 -->
        <div ref="mapChartRef" class="map-chart"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import gansuGeoJSON from '../data/gansu.geojson.js'

// 响应式数据
const mapChartRef = ref(null)
const currentTime = ref('')
const hoveredCity = ref(null)
let chartInstance = null
let updateTimer = null
let timeTimer = null

// 各市实时数据
const cityData = ref({
    '兰州市': {
        visitors: 4520,
        weather: '晴',
        weatherType: 'sunny',
        temperature: '18℃',
        humidity: '45%',
        warning: null
    },
    '嘉峪关市': {
        visitors: 2340,
        weather: '多云',
        weatherType: 'cloudy',
        temperature: '15℃',
        humidity: '38%',
        warning: '沙尘预警'
    },
    '金昌市': {
        visitors: 890,
        weather: '晴',
        weatherType: 'sunny',
        temperature: '16℃',
        humidity: '40%',
        warning: null
    },
    '白银市': {
        visitors: 1250,
        weather: '阴',
        weatherType: 'cloudy',
        temperature: '14℃',
        humidity: '52%',
        warning: null
    },
    '天水市': {
        visitors: 3680,
        weather: '小雨',
        weatherType: 'rainy',
        temperature: '12℃',
        humidity: '68%',
        warning: '道路湿滑'
    },
    '武威市': {
        visitors: 1580,
        weather: '晴',
        weatherType: 'sunny',
        temperature: '17℃',
        humidity: '42%',
        warning: null
    },
    '张掖市': {
        visitors: 2150,
        weather: '多云',
        weatherType: 'cloudy',
        temperature: '13℃',
        humidity: '46%',
        warning: null
    },
    '平凉市': {
        visitors: 1920,
        weather: '晴',
        weatherType: 'sunny',
        temperature: '16℃',
        humidity: '44%',
        warning: null
    },
    '酒泉市': {
        visitors: 2870,
        weather: '大风',
        weatherType: 'windy',
        temperature: '10℃',
        humidity: '35%',
        warning: '风力6级'
    },
    '庆阳市': {
        visitors: 1450,
        weather: '晴',
        weatherType: 'sunny',
        temperature: '17℃',
        humidity: '41%',
        warning: null
    },
    '定西市': {
        visitors: 1180,
        weather: '多云',
        weatherType: 'cloudy',
        temperature: '14℃',
        humidity: '50%',
        warning: null
    },
    '陇南市': {
        visitors: 2650,
        weather: '小雨',
        weatherType: 'rainy',
        temperature: '15℃',
        humidity: '65%',
        warning: null
    },
    '临夏回族自治州': {
        visitors: 980,
        weather: '晴',
        weatherType: 'sunny',
        temperature: '13℃',
        humidity: '48%',
        warning: null
    },
    '甘南藏族自治州': {
        visitors: 1450,
        weather: '多云',
        weatherType: 'cloudy',
        temperature: '8℃',
        humidity: '55%',
        warning: '高海拔注意保暖'
    }
})

// 获取地图颜色（根据游客数量）
const getMapColor = (value) => {
    if (value > 5000) return '#dc2626'
    if (value > 3000) return '#f97316'
    if (value > 1000) return '#eab308'
    return '#22c55e'
}

// 初始化地图
const initMap = async () => {
    await nextTick()

    chartInstance = echarts.init(mapChartRef.value)

    // 注册甘肃地图
    echarts.registerMap('gansu', gansuGeoJSON)

    const option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#1a237e',
            borderWidth: 1,
            padding: [15, 20],
            textStyle: {
                color: '#333',
                fontSize: 13
            },
            formatter: (params) => {
                if (!params.name) return ''
                const data = cityData.value[params.name]
                if (!data) return params.name

                return `
                    <div style="font-weight: 600; color: #1a237e; margin-bottom: 10px; font-size: 15px;">
                        ${params.name}
                        <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%; margin-left: 8px; animation: pulse 1.5s infinite;"></span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <div style="display: flex; justify-content: space-between; min-width: 200px;">
                            <span style="color: #666;">实时游客</span>
                            <span style="color: #dc2626; font-weight: 600; font-size: 16px;">${data.visitors.toLocaleString()} 人</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #666;">天气状况</span>
                            <span style="color: #1a237e; font-weight: 600;">${getWeatherIcon(data.weatherType)} ${data.weather}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #666;">温度</span>
                            <span style="color: #f97316; font-weight: 600;">${data.temperature}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #666;">湿度</span>
                            <span style="color: #1a237e; font-weight: 600;">${data.humidity}</span>
                        </div>
                        ${data.warning ? `
                        <div style="margin-top: 8px; padding: 8px; background: #fee; border-left: 3px solid #dc2626; border-radius: 3px;">
                            <span style="color: #dc2626; font-size: 12px;">⚠️ ${data.warning}</span>
                        </div>` : ''}
                    </div>
                `
            }
        },
        visualMap: {
            min: 0,
            max: 6000,
            left: '20',
            bottom: '20',
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#22c55e', '#eab308', '#f97316', '#dc2626']
            },
            textStyle: {
                color: '#666',
                fontSize: 12
            }
        },
        series: [
            {
                name: '游客数量',
                type: 'map',
                map: 'gansu',
                roam: true,
                scaleLimit: {
                    min: 0.8,
                    max: 3
                },
                emphasis: {
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: 'bold'
                    },
                    itemStyle: {
                        areaColor: '#ff6b6b',
                        borderColor: '#fff',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                select: {
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    itemStyle: {
                        areaColor: '#ff6b6b'
                    }
                },
                label: {
                    show: true,
                    color: '#333',
                    fontSize: 11,
                    fontWeight: 'normal'
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    areaColor: (params) => {
                        const value = cityData.value[params.name]?.visitors || 0
                        return getMapColor(value)
                    }
                },
                data: Object.keys(cityData.value).map(cityName => ({
                    name: cityName,
                    value: cityData.value[cityName].visitors
                }))
            }
        ]
    }

    chartInstance.setOption(option)

    // 监听地图交互事件
    chartInstance.on('mouseover', (params) => {
        if (params.name) {
            hoveredCity.value = params.name
        }
    })

    chartInstance.on('mouseout', () => {
        hoveredCity.value = null
    })

    chartInstance.on('click', (params) => {
        if (params.name) {
            console.log('点击了城市:', params.name)
            // 可以添加跳转或显示详情的逻辑
        }
    })
}

// 获取天气图标emoji
const getWeatherIcon = (type) => {
    const iconMap = {
        sunny: '☀️',
        cloudy: '☁️',
        rainy: '🌧️',
        windy: '💨'
    }
    return iconMap[type] || '☀️'
}

// 更新地图数据
const updateMapData = () => {
    if (!chartInstance) return

    const newData = Object.keys(cityData.value).map(cityName => ({
        name: cityName,
        value: cityData.value[cityName].visitors
    }))

    chartInstance.setOption({
        series: [{
            data: newData,
            itemStyle: {
                areaColor: (params) => {
                    const value = cityData.value[params.name]?.visitors || 0
                    return getMapColor(value)
                }
            }
        }]
    })
}

// 更新时间
const updateTime = () => {
    currentTime.value = new Date().toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

// 模拟实时数据更新
const updateCityData = () => {
    Object.keys(cityData.value).forEach(cityName => {
        const data = cityData.value[cityName]

        // 游客数量波动
        const visitorChange = Math.floor(Math.random() * 200) - 100
        data.visitors = Math.max(0, Math.min(10000, data.visitors + visitorChange))

        // 温度波动
        const tempChange = Math.floor(Math.random() * 3) - 1
        const currentTemp = parseInt(data.temperature)
        data.temperature = `${currentTemp + tempChange}℃`

        // 湿度波动
        const humidityChange = Math.floor(Math.random() * 6) - 3
        const currentHumidity = parseInt(data.humidity)
        data.humidity = `${Math.max(20, Math.min(90, currentHumidity + humidityChange))}%`

        // 随机天气变化（小概率）
        if (Math.random() < 0.05) {
            const weatherTypes = ['sunny', 'cloudy', 'rainy', 'windy']
            const weatherMap = {
                sunny: '晴',
                cloudy: '多云',
                rainy: '小雨',
                windy: '大风'
            }
            data.weatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)]
            data.weather = weatherMap[data.weatherType]
        }
    })

    // 更新地图显示
    updateMapData()
}

// 窗口大小变化时重新渲染
const handleResize = () => {
    if (chartInstance) {
        chartInstance.resize()
    }
}

onMounted(async () => {
    // 初始化时间
    updateTime()
    timeTimer = setInterval(updateTime, 1000)

    // 初始化地图
    await initMap()

    // 启动数据更新
    updateTimer = setInterval(updateCityData, 5000) // 每5秒更新一次数据

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    if (timeTimer) clearInterval(timeTimer)
    if (updateTimer) clearInterval(updateTimer)
    if (chartInstance) {
        chartInstance.dispose()
        chartInstance = null
    }
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.gansu-map-container {
    background: #fff;
    border-radius: 0;
    padding: 25px 30px;
    box-shadow: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 350px);
}

.map-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e0e0e0;
}

.map-header h3 {
    font-size: 18px;
    color: #1a237e;
    font-weight: 600;
    margin: 0;
}

.update-time {
    font-size: 12px;
    color: #999;
}

.map-chart {
    width: 100%;
    min-height: 600px;
    background: linear-gradient(135deg, #f5f7fa 0%, #fff 100%);
    border-radius: 10px;
    position: relative;
    flex: 1;
}

@media (max-width: 768px) {
    .map-header h3 {
        font-size: 16px;
    }

    .gansu-map-container {
        padding: 20px 15px;
        min-height: calc(100vh - 280px);
    }

    .map-chart {
        min-height: 400px;
    }
}
</style>
