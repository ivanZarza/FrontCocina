<script setup>
import { ref } from 'vue'
import ServicioIngredientes from '../../servicios/servicioIngredientes'

const nombre = ref('')
const tipo = ref('')
const pagina = ref(0)
const service = new ServicioIngredientes()

const clasesDeIngredientes = service.tipos
service.cargarTipos()

const ingredientes = service.ingredientes
service.cargarIngredientes()



function buscar() {
  service.cargarIngredientes({ nombre: nombre.value, tipo: tipo.value, pagina: pagina.value })
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

  <div class="prueba">
    <div class="card" v-for="ingrediente in ingredientes" :key="ingrediente.id" >
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
  color: black;
  font-size: 1rem;
  text-align: center;
  background-color: #c4c4c4;
  padding: 3px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card:hover {
  background-color: #ffffff;
}



</style>