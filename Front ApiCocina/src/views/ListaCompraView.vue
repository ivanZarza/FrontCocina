<script setup>
import { ref } from 'vue'

const listaCompra = ref([])

function recuperarRecetas() {
  listaCompra.value = JSON.parse(localStorage.getItem('recetas')) || []
}

recuperarRecetas()

console.log(listaCompra.value)

</script>

<template>

  <div>
    <h1>Lista de la compra</h1>
    <ul>
      <li v-for="receta in listaCompra" :key="receta.id">
        {{ receta.nombre }}
      </li>
    </ul>
  </div>

</template>