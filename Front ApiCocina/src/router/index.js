import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { estaAutenticado } from '../helpers/token.helpers'

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
      path: '/me',
      name: 'usuario',
      component: () => import('../views/PaginaUsuarioView.vue'),
/*       meta: {
        requiereAutenticacion: true
      } */
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiereAutenticacion)) {
    // Verifica si el usuario está autenticado
    if (!estaAutenticado()) {
      // Redirige al usuario al login si no está autenticado
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      // Permite la navegación si el usuario está autenticado
      next();
    }
  } else {
    // Permite la navegación si la ruta no requiere autenticación
    next();
  }
});

export default router
