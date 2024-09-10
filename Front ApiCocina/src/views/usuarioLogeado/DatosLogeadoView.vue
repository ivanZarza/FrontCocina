<script setup>
import { ref } from 'vue';
import { useDatosUsuario } from '@/stores/usuarioLogeado';

const datosUsuario = useDatosUsuario();
datosUsuario.obtenerDatosUsuario(); 

const user = ref(datosUsuario.usuario);

</script>

<template>
  <div>
    <div class="bienvenida">
      <h1>Hola {{ user.nombre }} {{ user.apellidos }}</h1>
      <h3>Aqui podras recuperar tus recetas guardadas, tambien podras crear,modificar o eliminar tus propios
        ingredientes
      </h3>
    </div>
  </div>
</template>

