<script setup>

import { ref } from 'vue'
import servicioRegistro from '../servicios/servicioRegistro'

const service = new servicioRegistro()

const nombre = ref('')
const apellidos = ref('')
const contraseña = ref('')


const registrar = async () => {
  try {
    await service.registrar(nombre.value, apellidos.value, contraseña.value)
    alert('Usuario registrado correctamente')
  } catch (error) {
    alert('Error al registrar el usuario')
  }
}

</script>

<template>
  <div class="about">
    <div class="wrapper">
      <div>
        <h1>Registro</h1>
        <p>Regístrate para poder acceder a todas las funcionalidades de la aplicación.</p>

          <label><span>Nombre</span><input v-model="nombre" type="text" required></label>
          <label><span>Apellidos</span><input v-model="apellidos" type="text" required></label>
          <label><span>Contraseña</span><input v-model="contraseña" type="password" required></label>
          <button type="submit" @click.prevent="registrar" >Registrarse</button>

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

.wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--section-gap);
}

form {
  display: grid;
  gap: 1rem;
}

label {
  display: grid;
  gap: 0.5rem;
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