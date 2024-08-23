<script setup>
import PanelIngredientes from '../components/icons/PanelIngredientes.vue'
import { cantidadPrincipal, cantidadAcompañamiento, cantidadCondimento } from './../helpers/cantidades.helper'
import { ref, nextTick } from 'vue'

const principal = ref([])
const acompanamiento = ref([])
const condimentos = ref([])
const descripcion = ref('')

const mostrarDiv2 = ref(false)
const mostrarDiv3 = ref(false)
const mostrarDiv4 = ref(false)

const div2 = ref(null)
const div3 = ref(null)
const div4 = ref(null)

const numeroDePersonas = ref(1)

const panelIngredientesRef = ref(null)

const mostrarPanelIngredientes = ref(true)

function llamarLimpiarPanel() {
  if (panelIngredientesRef.value) {
    panelIngredientesRef.value.limpiarPanel()
  }
}

function mostrarSiguienteDiv2() {
  mostrarDiv2.value = true
  nextTick(() => {
    if (div2.value) {
      div2.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    llamarLimpiarPanel()
  })
}

function mostrarSiguienteDiv3() {
  mostrarDiv3.value = true
  nextTick(() => {
    if (div3.value) {
      div3.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    llamarLimpiarPanel()
  })
}

function mostrarSiguienteDiv4() {
  mostrarDiv4.value = true
  nextTick(() => {
    if (div4.value) {
      div4.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    llamarLimpiarPanel()
  })
}

function agregarIngrediente(ingrediente) {

  if (!mostrarDiv2.value && !mostrarDiv3.value) {
    principal.value.push(ingrediente)
  }

  if (mostrarDiv2.value && !mostrarDiv3.value) {
    acompanamiento.value.push(ingrediente)
  }

  if (mostrarDiv3.value) {
    condimentos.value.push(ingrediente);
  }
}

function resultado() {
  cantidadPrincipal(principal.value, numeroDePersonas.value)
  console.log('Principal:', principal.value);
  cantidadAcompañamiento(acompanamiento.value, numeroDePersonas.value)
  console.log('Acompañamiento:', acompanamiento.value);
  cantidadCondimento(condimentos.value, numeroDePersonas.value)
  console.log('Condimentos:', condimentos.value);
  nextTick(() => {
    mostrarPanelIngredientes.value = false
  })
}
</script>

<template>
  <div class="recetas-usuario-view">
    <div>
      <h1>Recetas</h1>
      <h2>Crear receta</h2>
    </div>
    <div class="contenedor">
      <div class="pasos">
        <div class="p1">
          <h2>PASO 1</h2>
          <div class="numero-personas">
            <label><span>Número de personas:</span></label>
            <input type="number" v-model="numeroDePersonas" min="1" />
          </div>
          <h3>Elige el ingrediente principal</h3>
          <div class="listaIngredientes">
          <ol>
            <li v-for="(ingrediente, i) in principal" :key="i">
              {{ ingrediente.name }} 
            </li>
          </ol>
          </div>
          <button @click="mostrarSiguienteDiv2">SIGUIENTE</button>
        </div>
        <div class="p2" v-if="mostrarDiv2" ref="div2">
          <h2>PASO 2</h2>
          <h3>Elige el acompañamiento</h3>
          <div class="listaIngredientes">
          <ol>
            <li v-for="ingrediente in acompanamiento" :key="ingrediente.id">
              {{ ingrediente.name }} 
            </li>
          </ol>
        </div>
          <button @click="mostrarSiguienteDiv3">SIGUIENTE</button>
        </div>
        <div class="p3" v-if="mostrarDiv3" ref="div3">
          <h2>PASO 3</h2>
          <h3>Elige los condimentos para hacer la receta</h3>
          <div class="listaIngredientes">
          <ol>
            <li v-for="ingrediente in condimentos" :key="ingrediente.id">
              {{ ingrediente.name }} 
            </li>
          </ol>
        </div>
          <button @click="mostrarSiguienteDiv4">SIGUIENTE</button>
        </div>
        <div class="p4" v-if="mostrarDiv4" ref="div4">
          <h2>PASO 4</h2>
          <h3>Finaliza la receta escribiendo una descripcion si es necesario</h3>
          <h3>¿Qué tal si compartes tu receta con la comunidad?</h3>
          <div class="cap">
            <textarea v-model="descripcion"></textarea>
            <button @click="resultado">FINALIZAR</button>
          </div>
        </div>
      </div>
      <div v-if="mostrarPanelIngredientes">
        <div class="panel">
          <PanelIngredientes @ingredienteSeleccionado="agregarIngrediente" ref="panelIngredientesRef" />
        </div>
      </div>
      <div class="resumen" v-else>
        <h3>Resumen de la Receta</h3>
        <h2>Principal</h2>
        <ul>
          <li v-for="ingrediente in principal" :key="ingrediente.id">{{ ingrediente.name }} - {{ ingrediente.cantidad }} Grs</li>
        </ul>
        <h2>Acompañamiento</h2>
        <ul>
          <li v-for="ingrediente in acompanamiento" :key="ingrediente.id">{{ ingrediente.name }} - {{ ingrediente.cantidad }} Grs</li>
        </ul>
        <h2>Condimentos</h2>
        <ul>
          <li v-for="ingrediente in condimentos" :key="ingrediente.id">{{ ingrediente.name }} - {{ ingrediente.cantidad }} Grs</li>
        </ul>
        <p><strong>Descripción:</strong> {{ descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Asegura que padding y border estén incluidos en el ancho total y alto de los elementos */
}

.recetas-usuario-view {
  width: 100%;
  min-height: 100vh;
  text-align: center;
  background-color: #ffffbe;
}

.contenedor {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.pasos {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.p1,
.p2,
.p3,
.p4 {
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20%;
  padding: 30px;
  min-height: 300px;
  margin: 20px;
  gap: 10px;
}

ol {
  width: 100%;
}

li {
  text-align: center;
  text-transform: capitalize;
}

.p1 {
  background-color: lightblue;
}

.numero-personas {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.numero-personas label {
  font-size: 1.2rem;
}

.numero-personas input {
  width: 50px;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background-color: rgb(217, 243, 252);
  text-align: center;
}

.p2 {
  background-color: lightgreen;
}

.p3 {
  background-color: lightcoral;
}

.p4 {
  background-color: lightseagreen;
}

textarea {
  width: 500px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background-color: #ffa9fb;
  margin: 10px;
  resize: none;
}

.cap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  background-color: #b5bafd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  margin-top: auto;
}

.panel {
  position: fixed;
  top: 30%;
  right: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.resumen {
  position: fixed;
  top: 30%;
  right: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>