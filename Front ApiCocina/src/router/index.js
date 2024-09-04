import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/ingredientes',
      name: 'ingredientes',
      component: () => import('../views/TodosIngredientesView.vue')
    },
    {
      path: '/ingredientes/tipo',
      name: 'tipos',
      component: () => import('../views/PorTipoView.vue')
    },
    {
      path: '/ingredientes/panel',
      name: 'panel',
      component: () => import('../views/PanelIngredientesView.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegistroUsuarioView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginUsuarioView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutUsuarioView.vue')
    },
    {
      path: '/recetas',
      name: 'recetas',
      component: () => import('../views/RecetasUsuarioView.vue')
    },
    {
      path: '/listadelacompra',
      name: 'compra',
      component: () => import('../views/ListaCompraView.vue')
    },
    {
      path: '/me',
      name: 'usuario',
      component: () => import('../views/PaginaUsuarioView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'recetas',
          name: 'recetasUsuario',
          component: () => import('../views/RecetasLogeadoView.vue')
        },
        {
          path: 'panel',
          name: 'panelUsuario',
          component: () => import('../views/PanelLogeadoView.vue')
        },
      ]
    }
  ]
})


// Guardia de navegación global
router.beforeEach((to, from, next) => {
  const isAuthenticated = true // Reemplaza esto con tu lógica de autenticación
  if (!isAuthenticated && to.meta.requiresAuth) {
    next({ name: 'login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
})


export default router
