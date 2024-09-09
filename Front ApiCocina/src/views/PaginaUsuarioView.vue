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
    <router-link :to="{ name: 'recetasUsuario' }">RECETAS</router-link>
    <router-link :to="{ name: 'panelUsuario' }">INGREDIENTES</router-link>
    <router-link to="/logout">CERRAR SESION</router-link>
  </nav>

  <RouterView />

  <div class="bienvenida">
    <h1>Hola {{ user.nombre }} {{ user.id }}</h1>
    <h3>Aqui podras recuperar tus recetas guardadas, tambien podras crear,modificar o eliminar tus propios ingredientes
    </h3>
  </div>

</template>

<style scoped>

nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f5f5f5; /* Cambia el color de fondo de la barra de navegación */
}

nav a {
  text-decoration: none;
  color: #333; /* Cambia el color del texto de los enlaces */
  font-weight: bold;
}

nav a.router-link-active {
  color: #4CAF50; /* Cambia el color del enlace activo */
  border-bottom: 2px solid #4CAF50; /* Añade un subrayado al enlace activo */
}

.bienvenida h1 {
  color: #333; /* Cambia el color del texto de bienvenida */
  text-align: center;
}

.bienvenida h3 {
  color: #666; /* Cambia el color del subtítulo */
  text-align: center;
  max-width: 600px;
  margin: auto;
}
</style>