<script setup>

import { ref } from 'vue'
import servicioRegistro from '../servicios/servicioRegistro'

const service = new servicioRegistro()

const nombre = ref('')
const apellidos = ref('')
const contraseña = ref('')

</script>

<template>
  <div class="about">
    <div class="wrapper">
      <div>
        <h1>Registro de Usuario</h1>
        <p>En esta sección podrás registrarte para poder acceder a todas las funcionalidades de la aplicación.</p>
        <form @submit.prevent="service.registrarUsuario( nombre.value, apellidos.value, contraseña.value) ">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="nombre" required>
          <label for="apellidos">Apellidos</label>
          <input type="text" id="apellidos" v-model="apellidos" required>
          <label for="contraseña">Contraseña</label>
          <input type="password" id="contraseña" v-model="contraseña" required>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
}

button {
  padding: 0.5rem;
  background-color: var(--color-primary);
  color: var(--color-text);
  border: 0;
  cursor: pointer;
}

button:hover {
  background-color: var(--color-primary-dark);
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


</style>