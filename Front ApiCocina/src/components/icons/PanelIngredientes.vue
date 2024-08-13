<script setup>
import { ref } from 'vue'
import ServicioIngredientes from '../../servicios/servicioIngredientes'

const nombre = ref('')
const tipo = ref('')
const pagina = ref(0)
const tamañoPagina = ref(20)
const service = new ServicioIngredientes()

const clasesDeIngredientes = service.tipos
service.cargarTipos()

const ingredientes = service.ingredientes
const totalElementos = service.totalElementos
console.log(totalElementos);
service.cargarIngredientes()

const totalPaginas = Math.ceil(totalElementos.value / tamañoPagina.value)

function buscar() {
  service.cargarIngredientes({ nombre: nombre.value, tipo: tipo.value, pagina: pagina.value })
}

function siguiente() {
  if (pagina.value < totalPaginas) {
    pagina.value++
    buscar()
  }
}

function anterior() {
  if (pagina.value > 0) {
    pagina.value--
    buscar()
  }
}

</script>

<template>

  <form action="">
    <div class="tipo">
      <select v-model="tipo">
        <option value="null">Selecciona un tipo</option>
        <option v-for="clase in clasesDeIngredientes" :key="clase.tipo" :value="clase.tipo">{{ clase.tipo }}</option>
      </select>
    </div>
    <div class="search">
      <input type="search" v-model="nombre" placeholder="Buscar ingrediente">
      <button @click.prevent="buscar">Buscar</button>
    </div>
  </form>

  <button @click="paginaAnterior" :disabled="pagina.value === 0">Anterior</button>
  <button @click="siguientePagina" :disabled="pagina.value === totalPaginas - 1">Siguiente</button>

  <div class="prueba">
    <p>esto es una prueba</p>
    <div class="card" v-for="ingrediente in ingredientes" :key="ingrediente.id" >
            <h3>{{ ingrediente.name }}</h3>
          </div>
  </div>
</template>