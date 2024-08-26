<script setup>
import { ref } from 'vue'

const recetasRecuperadas = ref([])
const recetaSeleccionada = ref(null)

function recuperarRecetas() {
  recetasRecuperadas.value = JSON.parse(localStorage.getItem('recetas')) || []
}

function seleccionarReceta(receta) {
  recetaSeleccionada.value = receta
}

function borrarReceta() {
  const recetasFiltradas = recetasRecuperadas.value.filter(receta => receta.nombre !== recetaSeleccionada.value.nombre);
  if (recetasFiltradas.length === 0) {
    localStorage.removeItem('recetas'); // Elimina la entrada si el array está vacío
  } else {
    localStorage.setItem('recetas', JSON.stringify(recetasFiltradas)); // Guarda el array filtrado si no está vacío
  }
  recuperarRecetas();
  recetaSeleccionada.value = null;
}

recuperarRecetas()

console.log(recetasRecuperadas.value)

</script>

<template>
  <div v-for="receta in recetasRecuperadas" :key="receta.nombre">
    <button @click="seleccionarReceta(receta)">{{ receta.nombre }}</button>
  </div>

  <div v-if="recetaSeleccionada" class="container">
    <div class="resumen">
      <h1>Resumen de la Receta</h1>
      <h2>Para {{ recetaSeleccionada.numeroDePersonas }} {{ recetaSeleccionada.numeroDePersonas === 1 ? 'persona' :
    'personas' }}</h2>
      <h2>Principal</h2>
      <div class="listaIngredientes">
        <ol>
          <li v-for="ingrediente in recetaSeleccionada.principal" :key="ingrediente.id">{{ ingrediente.name }} - {{
    ingrediente.cantidad
  }} Grs</li>
        </ol>
      </div>
      <h2>Acompañamiento</h2>
      <div class="listaIngredientes">
        <ol>
          <li v-for="ingrediente in recetaSeleccionada.acompanamiento" :key="ingrediente.id">{{ ingrediente.name }} - {{
    ingrediente.cantidad }} Grs</li>
        </ol>
      </div>
      <h2>Condimentos</h2>
      <div class="listaIngredientes">
        <ol>
          <li v-for="ingrediente in recetaSeleccionada.condimentos" :key="ingrediente.id">{{ ingrediente.name }} - {{
    ingrediente.cantidad }} Grs</li>
        </ol>
      </div>
      <h2><strong>Descripción:</strong></h2>
      <pre class="descripcionFinal">{{ recetaSeleccionada.descripcion }}</pre>
      <p>Si quieres puedes borrar la receta seleccionada pulsando el siguiente botón:</p>
      <button @click="borrarReceta">Borrar receta</button>
    </div>
    <div class="listaFinal">
      <h2>Estas son las cantidades de ingredientes que tienes que comprar para las recetas que has creado</h2>
    </div>
  </div>


</template>

<style scoped>
.container {
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
}

.resumen {
  border-radius: 20px;
  border: 1px solid black;
  padding: 10px;
  margin-top: 20px;
  font-size: 0.9rem;
  margin: 20px;
}

.listaFinal {
  width: 50%;
  margin-top: 10px;
  border: 1px solid black;
}
</style>