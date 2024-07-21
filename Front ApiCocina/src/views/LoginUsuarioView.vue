<script setup>
import { ref } from 'vue'
import { servicioLogin } from '../servicios/servicioLogin'


const nombre = ref('')
const apellidos = ref('')
const contraseña = ref('')
const datosUsuario = ref({})


const entrar = async () => {
  try {
    // Almacenar la respuesta de la promesa
    const respuesta = await servicioLogin.loginUsuario({
      'nombre': nombre.value,
      'apellidos': apellidos.value,
      'contraseña': contraseña.value,
    })
    console.log('Respuesta recibida', respuesta);
    if (!respuesta) {
      console.error('La respuesta es undefined');
    }
      console.log('Usuario logueado correctamente');
      datosUsuario.value = respuesta.user;
      console.log('Datos del usuario', datosUsuario.value);
      //redirigir a la página del usuario
      //router.push({ name: 'RecetasUsuarioView' })
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

  <div>
    <h2>Datos del usuario</h2>
    <p>Usuario logueado correctamente</p>
    <p>Usuario: {{datosUsuario.id}}</p>
    <p>Nombre: {{datosUsuario.nombre}}</p>
    <p>Apellidos: {{datosUsuario.apellidos}}</p>
    </div>



</template>