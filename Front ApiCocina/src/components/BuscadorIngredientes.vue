<script setup>
import { ref, watch } from 'vue'

const palabra = ref('')
const tipo = ref('')


defineProps({
  clasesDeIngredientes: Array
})

defineEmits([
  'buscar'
])


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
        <input type="search" v-model="palabra" placeholder="Busca por una palabra">
      </div>
      <button @click="$emit('buscar', { palabra: palabra.value, clase: clase.value })">Buscar</button>
    </form>
  </div>

</template>

<style scoped>
.bus {
  margin: none;
  padding: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.tipo {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
}

.buscador {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: start;
  justify-content: center;
  white-space: nowrap;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid #ccc;
}

button {
  background-color: #b5bafd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  background-color: #949bf8;
}
</style>