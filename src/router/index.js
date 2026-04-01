import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TourismView from '../views/TourismView.vue'
import EcoMonitoringView from '../views/EcoMonitoringView.vue'
import ICHView from '../views/ICHView.vue'
import CulturalCreativityView from '../views/CulturalCreativityView.vue'
import DunhuangDanceView from '../views/DunhuangDanceView.vue'
import PlatformIntroView from '../views/PlatformIntroView.vue'
import SciencePopularizationView from '../views/SciencePopularizationView.vue'
import NewsView from '../views/NewsView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'
import ModelResourcesView from '../views/ModelResourcesView.vue'
import TopicDataView from '../views/TopicDataView.vue'
import TopicDetailView from '../views/TopicDetailView.vue'
import DataResourcesView from '../views/DataResourcesView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/tourism',
        name: 'tourism',
        component: TourismView
    },
    {
        path: '/eco-monitoring',
        name: 'eco-monitoring',
        component: EcoMonitoringView
    },
    {
        path: '/ich',
        name: 'ich',
        component: ICHView
    },
    {
        path: '/cultural-creativity',
        name: 'cultural-creativity',
        component: CulturalCreativityView
    },
    {
        path: '/dunhuang-dance',
        name: 'dunhuang-dance',
        component: DunhuangDanceView
    },
    {
        path: '/platform-intro',
        name: 'platform-intro',
        component: PlatformIntroView
    },
    {
        path: '/popularization',
        name: 'popularization',
        component: SciencePopularizationView
    },
    {
        path: '/news',
        name: 'news',
        component: NewsView
    },
    {
        path: '/news/:id',
        name: 'news-detail',
        component: NewsDetailView
    },
    {
        path: '/model',
        name: 'model',
        component: ModelResourcesView
    },
    {
        path: '/topic-data',
        name: 'topic-data',
        component: TopicDataView
    },
    {
        path: '/topic-data/:id',
        name: 'topic-detail',
        component: TopicDetailView
    },
    {
        path: '/data-resources',
        name: 'data-resources',
        component: DataResourcesView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
