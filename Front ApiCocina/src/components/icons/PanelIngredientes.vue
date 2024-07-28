<script setup>
import { ref, watchEffect } from 'vue'
import ServicioIngredientes from '../../servicios/servicioIngredientes'

const nombre = ref('')
const tipo = ref('')
const pagina = ref(1)

const service = new ServicioIngredientes()
const clasesDeIngredientes = service.tipos
const ingredientes = ref([]) // Ahora es reactivo y se actualiza con la respuesta

// Cargar tipos al inicio
service.cargarTipos()

// Observador para cargar ingredientes cuando cambien los criterios de búsqueda o la página
watchEffect(() => {
  const respuesta = service.cargarIngredientes({ nombre: nombre.value, tipo: tipo.value, pagina: pagina.value })
  ingredientes.value = respuesta.ingredientes
})

function buscar() {
  pagina.value = 1 // Reinicia a la primera página para una nueva búsqueda
}
</script>

<template>

<form @submit.prevent="buscar">
    <div class="tipo">
      <select v-model="tipo">
        <option value="null">Selecciona un tipo</option>
        <option v-for="clase in clasesDeIngredientes" :key="clase.tipo" :value="clase.tipo">{{ clase.tipo }}</option>
      </select>
    </div>
    <div class="search">
      <input type="search" v-model="nombre" placeholder="Buscar ingrediente">
      <button type="submit">Buscar</button>
    </div>
    <div class="pagina">
      <button type="button" @click="pagina = pagina > 1 ? pagina - 1 : 1" :disabled="pagina === 1">Anterior</button>
      <button type="button" @click="pagina++" :disabled="ingredientes.length < 20">Siguiente</button>
    </div>
  </form>

  <div class="prueba">
    <p>esto es una prueba</p>
    <div class="card" v-for="ingrediente in ingredientes" :key="ingrediente.id" >
            <h3>{{ ingrediente.name }}</h3>
          </div>
  </div>
</template>