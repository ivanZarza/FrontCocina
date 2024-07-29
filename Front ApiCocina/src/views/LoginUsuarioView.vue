<script setup>
import { ref } from 'vue' 
import { servicioLogin } from '../servicios/servicioLogin'
import { useDatosUsuario } from '@/stores/usuarioLogeado'


const nombre = ref('')
const apellidos = ref('')
const contraseña = ref('')
const datosUsuario = useDatosUsuario()


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

      datosUsuario.establecerUsuario(respuesta.user);//
      console.log('Datos del usuario', datosUsuario.usuario);
      //redirigir a la página del usuario
      
      //router.push({ name: 'RecetasUsuarioView' })
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