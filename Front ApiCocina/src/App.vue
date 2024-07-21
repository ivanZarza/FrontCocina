<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="app-container">
      <nav>
        <RouterLink to="/">INICIO</RouterLink>
        <RouterLink :to="{ name: 'ingredientes' }">INGREDIENTES</RouterLink>
        <RouterLink :to="{ name: 'tipos' }">CLASES DE INGREDIENTES</RouterLink>
        <RouterLink :to="{ name: 'panel'}">CREAR, MODIFICAR O BORRAR</RouterLink>
        <RouterLink :to="{ name: 'registro'}">REGISTRO</RouterLink>
        <RouterLink :to="{ name: 'login'}">LOGIN</RouterLink>
        <RouterLink :to="{ name: 'logout'}">LOGOUT</RouterLink>
        <RouterLink :to="{ name: 'recetas'}">RECETAS</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.app-container {
  display: flex; /* Habilita Flexbox */
  flex-direction: column; /* Organiza los elementos en una columna */
  align-items: center; /* Centra los elementos horizontalmente */
  width: 100%; /* Asegura que el contenedor ocupe el ancho completo de la pantalla */
}

header {
  width: 100%; /* Asegura que el header ocupe el ancho completo de la pantalla */
  height: 15vh; /* Establece el alto del header al 15% del alto de la ventana */
  background-color: blue; /* Fondo azul para el header */
  color: white; /* Letras en blanco */
  display: flex; /* Utiliza flexbox para alinear los elementos internos */
  justify-content: center; /* Centra los elementos horizontalmente */
  align-items: center; /* Centra los elementos verticalmente */
}

nav {
  display: flex; /* Alinea los elementos de la navegación en línea */
  gap: 20px; /* Añade un espacio entre los enlaces */
}

nav a {
  color: white; /* Asegura que los enlaces sean blancos */
  text-decoration: none; /* Elimina el subrayado de los enlaces */
}
</style>
