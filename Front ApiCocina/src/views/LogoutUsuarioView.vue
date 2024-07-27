<script setup>
import { servicioLogout } from '../servicios/servicioLogout';
import { useRouter } from 'vue-router';

const router = useRouter();

const cerrarSesion = async () => {
  await servicioLogout.logoutUsuario();
  router.push('/login'); 
};
</script>

<template>
  <div>
    <h1>Componente para cerrar sesión</h1>
    <button @click="cerrarSesion">Cerrar Sesión</button>
  </div>
</template>