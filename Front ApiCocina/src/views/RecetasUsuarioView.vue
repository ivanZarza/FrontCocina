<script setup>
import PanelIngredientes from '../components/icons/PanelIngredientes.vue'
import { ref, nextTick } from 'vue'

const mostrarDiv2 = ref(false)
const mostrarDiv3 = ref(false)
const div2 = ref(null)
const div3 = ref(null)

function mostrarSiguienteDiv2() {
  mostrarDiv2.value = true
  nextTick(() => {
    if (div2.value) {
      div2.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  })
}

function mostrarSiguienteDiv3() {
  mostrarDiv3.value = true
  nextTick(() => {
    if (div3.value) {
      div3.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
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
        <h3>PASO 1</h3>
        <button @click="mostrarSiguienteDiv2">siguiente</button>
      </div>
      <div class="p2" v-if="mostrarDiv2" ref="div2">
        <h3>PASO 2</h3>
        <button @click="mostrarSiguienteDiv3">siguiente</button>
      </div>
      <div class="p3" v-if="mostrarDiv3" ref="div3">
        <h3>PASO 3</h3>
        <button>siguiente</button>
      </div>
    </div>
    <div class="panel">
      <PanelIngredientes />
    </div>
  </div>
</div>
</template>

<style scoped>


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
  justify-content:space-between ;
}

.pasos {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.p1 {
  width:80%;
  background-color: lightblue;
  padding: 10px;
  height: 500px;
  margin: 20px
}

.p2 {
  width:80%;
  background-color: lightgreen;
  padding: 10px;
  height: 500px;
  margin: 20px
}

.p3 {
  width:80%;
  background-color: lightcoral;
  padding: 10px;
  height: 500px;
  margin: 20px 0;
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

</style>