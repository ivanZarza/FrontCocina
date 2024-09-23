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
/*       redirect: { name: 'datosUsuario' }, */
      component: () => import('../views/PaginaUsuarioView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: ':usuarioId/datos',
          name: 'datosUsuario',
          component: () => import('../views/usuarioLogeado/DatosLogeadoView.vue'),
          props: (route) => ({...route.params, usuarioId: parseInt(route.params.usuarioId)})
        },
        {
          path: ':usuarioId/recetas',
          name: 'recetasUsuario',
          component: () => import('../views/usuarioLogeado/RecetasLogeadoView.vue'),
          props: (route) => ({...route.params, usuarioId: parseInt(route.params.usuarioId)})
        },
        {
          path: ':usuarioId/panel',
          name: 'panelUsuario',
          component: () => import('../views/usuarioLogeado/PanelLogeadoView.vue'),
          props: (route) => ({...route.params, usuarioId: parseInt(route.params.usuarioId)})
        },
        {
          path: ':usuarioId/listacompra',
          name: 'compraUsuario',
          component: () => import('../views/usuarioLogeado/CompraLogeadoView.vue'),
          props: (route) => ({...route.params, usuarioId: parseInt(route.params.usuarioId)})
        },
        {
          path: 'logout',
          name: 'logout',
          component: () => import('../views/usuarioLogeado/LogoutUsuarioView.vue')
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
