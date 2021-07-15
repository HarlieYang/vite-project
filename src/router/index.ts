import { createRouter, createWebHashHistory } from "vue-router";
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [{
      path: '/',
      name: 'index',
      component: () => import('../view/index.vue')
    }]
})
export default router;