<script setup>
import { ref } from 'vue';
import { servicioDatosUsuario } from '../../servicios/serviciosLogeado/servicioDatosUsuario';

const props = defineProps({
  usuarioId: Number
})

console.log(props.usuarioId);

const usuario = ref({})
const recetas = ref([])

const service = servicioDatosUsuario
service.obtenerDatosUsuario(props.usuarioId)
usuario.value = service.datosUsuario
recetas.value = service.recetasUsuario
console.log(recetas.value);

console.log(Array.isArray(recetas.value))
</script>

<template>
  <div>
    <div class="bienvenida">
      <h1>Hola {{ usuario.nombre }} {{ usuario.apellidos }}</h1>
      <h3>Aqui podras recuperar tus recetas guardadas, tambien podras crear,modificar o eliminar tus propios
        ingredientes
      </h3>
      <p>{{ recetas }}</p>
      <div class="recetas" v-for="receta in recetas" :key="receta.id" >
        <h2>{{ receta.id }}</h2>
        <h2>{{ receta.usuarioId }}</h2>
        <p>{{ receta.datosJSON }}</p>
      </div>
    </div>
  </div>
</template>

