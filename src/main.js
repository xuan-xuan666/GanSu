import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.config.globalProperties.$smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 500
        let startTime = null

        const easeInOutQuad = (t) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        }

        const scroll = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const ease = easeInOutQuad(progress)

            window.scrollTo(0, startPosition + distance * ease)

            if (progress < 1) {
                requestAnimationFrame(scroll)
            }
        }

        requestAnimationFrame(scroll)
    }
}

app.mount('#app')
