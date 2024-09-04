<script setup>
import CrearUsuario from '@/components/CrearUsuario.vue'

import { servicioRegistro } from '../servicios/servicioRegistro'



async function registrar({nombre, apellidos, contraseña,contraseña2}) {
  if(contraseña !== contraseña2){
    alert('Las contraseñas no coinciden')
    return
  }
  try {
    await servicioRegistro.registrarUsuario({
    nombre,
    apellidos,
    contraseña,
  })
  alert('Usuario registrado correctamente')
} catch (error) {
  console.error(error)
  alert('Error al registrar el usuario')
}}


</script>

<template>

  <CrearUsuario @crearUsuario="registrar" />

</template>

<style scoped>


</style>