<script setup>
import { useDatosUsuario } from '@/stores/usuarioLogeado'

const datosUsuario = useDatosUsuario()

const userString = localStorage.getItem('usuario'); // Obtiene el string JSON
const user = JSON.parse(userString); // Parsea el string a un objeto JavaScript
console.log(user);


console.log(datosUsuario);
</script>

<template>
<div class="bienvenida">
  <h1>Hola {{user.nombre}} {{user.id}}</h1>
</div>


</template>