<script setup>
import { useDatosUsuario } from '@/stores/usuarioLogeado'

const datosUsuario = useDatosUsuario()
console.log(useDatosUsuario);
console.log(datosUsuario);
</script>

<template>
<div class="bienvenida">
  <h1>Hola {{datosUsuario.usuario.nombre}} {{datosUsuario.usuario.apellidos}}</h1>
</div>


</template>