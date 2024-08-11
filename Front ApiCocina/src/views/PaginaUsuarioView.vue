<script setup>
import { ref } from 'vue';
import { useDatosUsuario } from '@/stores/usuarioLogeado';

const datosUsuario = useDatosUsuario();
datosUsuario.obtenerDatosUsuario(); // Llama directamente al método

// Crea una referencia reactiva para el usuario que se utilizará en el template
const user = ref(datosUsuario.usuario);

</script>

<template>
<div class="bienvenida">
  <h1>Hola {{ user.nombre }} {{ user.id }}</h1>
</div>
</template>