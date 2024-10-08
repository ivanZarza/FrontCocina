<script setup>
import { ref } from 'vue' 
import { servicioLogin } from '../servicios/servicioLogin'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


const nombre = ref('')
const apellidos = ref('')
const contraseña = ref('')

const datosDevueltos = ref({})

const entrar = async () => {
  try {
    // Almacenar la respuesta de la promesa
    const respuesta = await servicioLogin.loginUsuario({
      'nombre': nombre.value,
      'apellidos': apellidos.value,
      'contraseña': contraseña.value,
    })

    datosDevueltos.value = respuesta
console.log(datosDevueltos.value);

      AccesoCorrecto()// Llama a esta función para manejar el éxito del login

  } catch (error) {
    console.error(error)
    alert('Error al loguear el usuario')
  }
}

const AccesoCorrecto = () => {
      const redirectRoute = route.query.redirect || `/me/datos`
      router.push(redirectRoute)
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

</template>