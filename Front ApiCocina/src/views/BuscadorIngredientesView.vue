<script setup>
import BuscadorIngredientes from '../components/BuscadorIngredientes.vue'
import { ref, watch } from 'vue'
import ServicioIngredientes from '../servicios/servicioIngredientes'

const nombreBusqueda = ref('')
const tipoBusqueda = ref('')



const service = new ServicioIngredientes()
const clasesDeIngredientes = service.tipos
service.cargarTipos()

function valoresDelHijo({ nombre, tipo }) {
  nombreBusqueda.value = nombre
  tipoBusqueda.value = tipo
}


</script>

<template>

  <BuscadorIngredientes :clasesDeIngredientes="clasesDeIngredientes" @buscar="valoresDelHijo" />

<!--   <div class="bus">
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
      <button @click.prevent="lanzarBusqueda">Buscar</button>
    </form>
  </div> -->
</template>