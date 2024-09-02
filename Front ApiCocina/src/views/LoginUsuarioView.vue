<script setup>

import { ref } from 'vue' 
import { servicioLogin } from '../servicios/servicioLogin'
import { useDatosUsuario } from '@/stores/usuarioLogeado'
import { useRouter, useRoute } from 'vue-router'

const datosUsuario = useDatosUsuario()
const router = useRouter()
const route = useRoute()

const nombre = ref('')
const apellidos = ref('')
const contraseña = ref('')


const handleLoginSuccess = () => {
      const redirectRoute = route.query.redirect || '/me'
      router.push(redirectRoute)
    }

const entrar = async () => {
  try {
    // Almacenar la respuesta de la promesa
    const respuesta = await servicioLogin.loginUsuario({
      'nombre': nombre.value,
      'apellidos': apellidos.value,
      'contraseña': contraseña.value,
    })
    console.log('Respuesta recibida', respuesta)
    if (!respuesta) {
      console.error('La respuesta es undefined')
    }
      console.log('Usuario logueado correctamente');

      datosUsuario.establecerUsuario(respuesta.user)// Guardar los datos del usuario en el store

      console.log('Datos del usuario', datosUsuario.usuario)// Mostrar los datos del usuario en la consola

      handleLoginSuccess()// Llama a esta función para manejar el éxito del login

  } catch (error) {
    console.error(error)
    alert('Error al loguear el usuario')
  }
}

</script>

<template>
  <div class="form">
    <h1>Login</h1>
    <p>Introduce tus credenciales para acceder a la aplicación.</p>

    <label class="input" ><span>Nombre</span><input type="text" v-model="nombre" required></label>
    <label class="input" ><span>Apellidos</span><input type="text" v-model="apellidos" required></label>
    <label class="input" ><span>Contraseña</span><input type="text" v-model="contraseña" required></label>
    <button class="btn" type="submit" @click.prevent="entrar" >Entrar</button>
  </div>

  <div>
    <h2>Datos del usuario</h2>
    <p>Usuario logueado correctamente</p>
    <p>Usuario: {{datosUsuario.usuario.id}}</p>
    <p>Nombre: {{datosUsuario.usuario.nombre}}</p>
    <p>Apellidos: {{datosUsuario.usuario.apellidos}}</p>
    </div>

</template>