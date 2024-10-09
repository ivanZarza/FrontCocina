
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
      component: () => import('../views/PaginaUsuarioView.vue'),
      redirect: { name: 'datosUsuario' },
      children: [
        {
          path: 'datos',
          name: 'datosUsuario',
          component: () => import('../views/usuarioLogeado/DatosLogeadoView.vue'),
        },
        {
          path: 'recetas',
          name: 'recetasUsuario',
          component: () => import('../views/usuarioLogeado/RecetasLogeadoView.vue'),
        },
        {
          path: 'panel',
          name: 'panelUsuario',
          component: () => import('../views/usuarioLogeado/PanelLogeadoView.vue'),
        },
        {
          path: 'listacompra',
          name: 'compraUsuario',
          component: () => import('../views/usuarioLogeado/CompraLogeadoView.vue'),
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

export default router
