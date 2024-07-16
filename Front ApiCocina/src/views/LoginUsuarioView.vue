<script setup>
import { ref } from 'vue'
import { servicioLogin } from '../servicios/servicioLogin'

const nombre = ref('')
const apellidos = ref('')
const contraseña = ref('')



const entrar = async () => {
  try {
    await servicioLogin.loginUsuario({
      nombre: nombre.value,
      apellidos: apellidos.value,
      contraseña: contraseña.value,
    })
    alert('Usuario logueado correctamente')
  } catch (error) {
    console.error(error)
    alert('Error al loguear el usuario')
  }
}

</script>

<template>
  <div>
    <h1>Login</h1>
    <p>Introduce tus credenciales para acceder a la aplicación.</p>

    <label><span>Nombre</span><input type="text" v-model="nombre" required></label>
    <label><span>Apellidos</span><input type="text" v-model="apellidos" required></label>
    <label><span>Contraseña</span><input type="text" v-model="contraseña" required></label>
    <button type="submit" @click.prevent="entrar" >Entrar</button>
  </div>

</template>