import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'

const routes = [
  { path: '/', name: 'Home', component: Homepage },
  { path: '/about', name: 'About', component: Homepage }, // ✅ Reuse homepage for About

  // ✅ These were outside — now inside the array
  { path: '/signup', name: 'SignUp', component: SignUpPage },
  { path: '/login', name: 'Login', component: Login },
   { path: '/about', name: 'About', component: About },
     { path: '/projects', name: 'Projects', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
