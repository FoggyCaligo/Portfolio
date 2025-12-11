import { createRouter, createWebHistory } from 'vue-router'
import ProjectsPage from '../pages/ProjectsPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import SkillsPage from '../pages/SkillsPage.vue'

const routes = [
  { path: '/', component: ProjectsPage },
  { path: '/about', component: AboutPage },
  { path: '/skills', component: SkillsPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
