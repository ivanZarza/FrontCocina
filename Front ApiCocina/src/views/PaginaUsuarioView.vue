<script setup>
import { ref } from 'vue';
import { useDatosUsuario } from '@/stores/usuarioLogeado';

const datosUsuario = useDatosUsuario();
datosUsuario.obtenerDatosUsuario(); // Llama directamente al método

// Crea una referencia reactiva para el usuario que se utilizará en el template
const user = ref(datosUsuario.usuario);

</script>

<template>
  <nav>

    <router-link to="/me">Mi perfil</router-link>
    <router-link :to="{ name: 'recetasUsuario' }">Ingredientes</router-link>
    <router-link :to="{ name: 'panelUsuario' }">Recetas</router-link>
    <router-link to="/logout">Salir</router-link>
  </nav>

  <RouterView />

  <div class="bienvenida">
    <h1>Hola {{ user.nombre }} {{ user.id }}</h1>
    <h3>Aqui podras recuperar tus recetas guardadas, tambien podras crear,modificar o eliminar tus propios ingredientes
    </h3>
  </div>

</template>