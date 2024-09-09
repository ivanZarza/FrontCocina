<script setup>
import { ref, watch } from 'vue'

const nombre = ref('')
const tipo = ref('')

defineProps({
  clasesDeIngredientes: Array
})

defineEmits(['buscar'])

</script>

<template>

<div class="bus">
    <h1>Busca tus ingredientes</h1>
    <form>
      <div class="tipo">
        <span>Selecciona por tipo de ingrediente</span>
        <select v-model="tipo">
          <option value="null">Selecciona un tipo</option>
          <option v-for="clase in clasesDeIngredientes" :key="clase.tipo" :value="clase.tipo">{{ clase.tipo }}
          </option>
        </select>
      </div>
      <div class="buscador">
        <input type="search" v-model="nombre" placeholder="Busca por una palabra">
      </div>
<button @click.prevent="$emit('buscar', { nombre: nombre.value, tipo: tipo.value })">Buscar</button>
    </form>
  </div>

</template>