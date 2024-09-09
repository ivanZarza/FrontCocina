<script setup>

</script>

<template>

<div class="paginacion">
    <button @click="paginaAnterior" :disabled="pagina === 1">Anterior</button>
    <span>Página {{ pagina }}</span>
    <button @click="paginaSiguiente">Siguiente</button>
  </div>
  <div class="prueba">
    <div class="card" v-for="ingrediente in ingredientes" :key="ingrediente.id" @click="cambiarSeleccion(ingrediente)"
      :class="{ seleccionado: ingrediente.seleccionado }">
      <p>{{ ingrediente.name }}</p>
    </div>
  </div>
</template>