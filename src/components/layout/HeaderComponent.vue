<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <nav>
      <RouterLink to="/">INICIO</RouterLink>
      <!-- <RouterLink :to="{ name: 'ingredientes' }">INGREDIENTES</RouterLink> -->
      <!-- <RouterLink :to="{ name: 'tipos' }">CLASES DE INGREDIENTES</RouterLink> -->
      <!-- <RouterLink :to="{ name: 'panel' }">CREAR, MODIFICAR O BORRAR</RouterLink> -->
      <RouterLink :to="{ name: 'registro' }">REGISTRO</RouterLink>
      <RouterLink :to="{ name: 'login' }">LOGIN</RouterLink>
      <RouterLink :to="{ name: 'usuario' }">USUARIO</RouterLink>
      <RouterLink :to="{ name: 'recetas' }">RECETAS</RouterLink>
      <RouterLink :to="{ name: 'compra' }">LISTA DE LA COMPRA</RouterLink>
    </nav>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  height: 13vh;
  background-color: #2c3e50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
    position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  gap: 30px;
  font-size: 1.3rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #2c3e50;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>
