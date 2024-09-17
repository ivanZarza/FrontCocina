<script setup>
import { ref } from 'vue';
import { servicioDatosUsuario } from '../../servicios/serviciosLogeado/servicioDatosUsuario';

const props = defineProps({
  usuarioId: Number
})

const usuario = ref({})




const service = servicioDatosUsuario
service.obtenerDatosUsuario(props.usuarioId)
usuario.value = service.datosUsuario
const recetas = service.recetasUsuario

console.log('Usuario', usuario.value)
console.log('Recetas', recetas)


</script>

<template>
  <div>
    <div class="bienvenida">
      <h1>Hola {{ usuario.nombre }} {{ usuario.apellidos }}</h1>
      <h3>Aquí podrás recuperar tus recetas guardadas, también podrás crear, modificar o eliminar tus propios
        ingredientes</h3>
        <p>esto que es?{{ recetas }}</p>
    </div>
  </div>
</template>
