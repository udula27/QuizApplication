import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/instructions',
            name: 'prequiz',
            component: () => import('../views/QuizInstructionsView.vue')
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: () => import('../views/QuizView.vue')
        },
        {
            path: '/results',
            name: 'results',
            component: () => import('../views/QuizResultView.vue')
        },
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: () => import('../views/LeaderboardView.vue')
        },
        // custom 404 page
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFoundView.vue')
        }
    ]
})

export default router
