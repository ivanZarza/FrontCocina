<script setup>
import { servicioDatosUsuario } from '../../servicios/serviciosLogeado/servicioDatosUsuario';

const props = defineProps({
  id: Number
})


const service = servicioDatosUsuario
service.obtenerDatosUsuario(props.id)
const usuario = service.datosUsuario
const recetas = service.recetasUsuario



console.log(usuario);
console.log(recetas);



</script>

<template>
  <div>
    <div class="bienvenida">
      <h1>Hola {{ usuario.nombre }} {{ usuario.apellidos }}</h1>
      <h3>Aqui podras recuperar tus recetas guardadas, tambien podras crear,modificar o eliminar tus propios
        ingredientes
      </h3>
      <p>{{ recetas }}</p>
      <div class="recetas" v-for="receta in recetas" :key="recetas.id" >
        <h2>{{ receta.id }}</h2>
        <h2>{{ receta.usuarioId }}</h2>
        <p>{{ receta.datosJSON }}</p>
        <h2>{{ JSON.parse(receta.datosJSON).nombre }}</h2>
        <h2>{{ JSON.parse(receta.datosJSON).ingredientes }}</h2>
      </div>
    </div>
  </div>
</template>

