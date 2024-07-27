<script setup>
import ServicioIngredientes from '../../servicios/servicioIngredientes'

const service = new ServicioIngredientes()
const clasesDeIngredientes = service.tipos
const ingredientes = service.ingredientes
service.cargarTipos()
service.cargarIngredientes()

const name = ref('')
const tipo = ref('')
const pagina = ref()

</script>

<template>
<div class="tipo">
  <select>
    <option v-for="clase in clasesDeIngredientes" :key="clase.tipo" >{{ clase.tipo }}</option>
  </select>
</div>
  
</template>