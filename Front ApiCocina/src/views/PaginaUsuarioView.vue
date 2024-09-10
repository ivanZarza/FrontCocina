<script setup>


</script>

<template>
  <div class="container">
    <div class="nav">
      <h2>Esta es tu barra de navegacion personal</h2>
      <nav>
        <router-link :to="{ name: 'datosUsuario' }">MIS DATOS</router-link>
        <router-link :to="{ name: 'panelUsuario' }">INGREDIENTES</router-link>
        <router-link :to="{ name: 'recetasUsuario' }">CREAR RECETAS</router-link>
        <router-link :to="{ name: 'compraUsuario' }">LISTA DE LA COMPRA</router-link>        
        <router-link :to="{ name: 'logout' }">CERRAR SESION</router-link>
      </nav>
    </div>
    <div class="funcional">
      <RouterView />
    </div>
  </div>


</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.nav {
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  background-color: #e62dff;
  margin: 10px;

  /* Cambia el color de fondo de la barra de navegación */
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin-top: 20px;
  background-color: #e62dff;
  /* Cambia el color de fondo de la barra de navegación */
}

nav a {
  text-decoration: none;
  color: #fff6f6;
  /* Cambia el color del texto de los enlaces */
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #26ff2d;
  /* Cambia el color del enlace activo */
  border-bottom: 2px solid #00ff08;
  /* Añade un subrayado al enlace activo */
}

.funcional {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  background-color: #f2f2f2;
}


</style>