<script setup>
import { servicioLogout } from '../servicios/servicioLogout'
import { useRouter } from 'vue-router'
import { useDatosUsuario } from '@/stores/usuarioLogeado'

const datosUsuario = useDatosUsuario()

const router = useRouter()

const cerrarSesion = async () => {
  await servicioLogout.logoutUsuario()
  router.push('/login')
  datosUsuario.limpiarUsuario()
  console.log('Sesión cerrada')
}
</script>

<template>
  <div>
    <h1>Componente para cerrar sesión</h1>
    <button @click="cerrarSesion">Cerrar Sesión</button>
  </div>
</template>