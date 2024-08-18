<script setup>
import { ref } from 'vue'
import ServicioIngredientes from '../../servicios/servicioIngredientes'

const nombre = ref('')
const tipo = ref('')
const pagina = ref(1)
const service = new ServicioIngredientes()


const clasesDeIngredientes = service.tipos
service.cargarTipos()

const ingredientes = service.ingredientes
service.cargarIngredientes()

function buscar() {
  service.cargarIngredientes({ nombre: nombre.value, tipo: tipo.value, pagina: pagina.value })
}

function lanzarBusqueda() {
  pagina.value = 1
  buscar()
}

const paginaSiguiente = () => {
  if (ingredientes.value.length >= 20) {
    pagina.value++;
    buscar();
  }
}

const paginaAnterior = () => {
  if (pagina.value > 1) {
    pagina.value--;
    buscar()
  }
}

</script>

<template>
    <h1>Busca tus ingredientes</h1>
    <form action="">
      <div class="tipo">
        <p>Selecciona por tipo de ingrediente</p>
        <select v-model="tipo">
          <option value="null">Selecciona un tipo</option>
          <option v-for="clase in clasesDeIngredientes" :key="clase.tipo" :value="clase.tipo">{{ clase.tipo }}</option>
        </select>
      </div>
      <div class="buscador">
        <input type="search" v-model="nombre" placeholder="Buscar ingrediente">
        <button @click.prevent="lanzarBusqueda">Buscar</button>
      </div>
    </form>
    <div class="paginacion">
      <button @click="paginaAnterior" :disabled="pagina === 1">Anterior</button>
      <span>Página {{ pagina }}</span>
      <button @click="paginaSiguiente">Siguiente</button>
    </div>
    <div class="prueba">
      <div class="card" v-for="ingrediente in ingredientes" :key="ingrediente.id">
        <p>{{ ingrediente.name }}</p>
      </div>
    </div>

</template>

<style scoped>



.prueba {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3px;
}

.card {
  width: 8rem;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 1rem;
  text-align: center;
  background-color: #c4c4c4;
  padding: 3px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card::first-letter {
  text-transform: uppercase;
}

.card:hover {
  background-color: #ffffff;
}
</style>