<template>
    <div id="app">
        <HeaderComponent />
        <main class="main-content">
            <router-view />
        </main>
        <FooterComponent />
    </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Microsoft YaHei', Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
}

a:hover {
    color: #005da6;
}

ul {
    list-style: none;
}

#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
}
</style>
