<template>
    <div class="home-page">
        <CarouselComponent />
        <DataOverviewComponent />
        <NewsSectionComponent />
        <DataResourcesComponent />
        <SpecialTopicComponent />
        <ModelResourcesComponent />
        <SciencePopularizationComponent />
        <!-- <PlatformIntroComponent /> -->
    </div>
</template>

<script setup>
import CarouselComponent from '../components/CarouselComponent.vue'
import DataOverviewComponent from '../components/DataOverviewComponent.vue'
import NewsSectionComponent from '../components/NewsSectionComponent.vue'
import DataResourcesComponent from '../components/DataResourcesComponent.vue'
import SpecialTopicComponent from '../components/SpecialTopicComponent.vue'
import ModelResourcesComponent from '../components/ModelResourcesComponent.vue'
import SciencePopularizationComponent from '../components/SciencePopularizationComponent.vue'
//import PlatformIntroComponent from '../components/PlatformIntroComponent.vue'
</script>

<style scoped>
.home-page {
    min-height: 100vh;
}
</style>
