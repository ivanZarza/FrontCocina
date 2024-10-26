<script setup>
import PanelIngredientes from '../components/PanelIngredientes.vue'
import { cantidadPrincipal, cantidadAcompañamiento, cantidadCondimento, dividirPorCantidadDeIngredientes } from './../helpers/cantidades.helper'
import { ref, nextTick } from 'vue'


const nombreReceta = ref('')
const numeroDePersonas = ref(1)
const principal = ref([])
const acompanamiento = ref([])
const condimentos = ref([])
const descripcion = ref('')

const div1 = ref(true)
const div2 = ref(null)
const div3 = ref(null)
const div4 = ref(null)
const div5 = ref(null)



const divActivo = ref(1)

const panelIngredientesRef = ref(null)

const mostrarPanelIngredientes = ref(false)
const mostrarResumen = ref(false)


function llamarLimpiarPanel() {
  if (panelIngredientesRef.value) {
    panelIngredientesRef.value.limpiarPanel()
  }
}


function mostrarDiv(numero) {
  divActivo.value = numero

    switch (numero) {
      case 1:
      mostrarPanelIngredientes.value = false
      nextTick(() => {
        div1.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
        break
      case 2:
        div2.value = true
        mostrarPanelIngredientes.value = true
        nextTick(() => {
          div2.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
        break
      case 3:
        div3.value = true
        nextTick(() => {
          div3.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
        break
      case 4:
        div4.value = true
        nextTick(() => {
          div4.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
        break
      case 5:
        div5.value = true
        nextTick(() => {
          div5.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
        break
    }
    if (numero !== 5) {
    llamarLimpiarPanel()
  }
  }



function agregarIngrediente(ingrediente) {

  if (divActivo.value === 2) {
    principal.value.push(cantidadPrincipal(ingrediente, numeroDePersonas.value))
  }

  if (divActivo.value === 3) {
    acompanamiento.value.push(cantidadAcompañamiento(ingrediente, numeroDePersonas.value))
  }

  if (divActivo.value === 4) {
    condimentos.value.push(cantidadCondimento(ingrediente, numeroDePersonas.value))
  }

  if (divActivo.value === 5) {
    return
  }
} 

function resultado() {
  principal.value = dividirPorCantidadDeIngredientes(principal.value)
  console.log(principal.value)
  acompanamiento.value = dividirPorCantidadDeIngredientes(acompanamiento.value)
  condimentos.value = dividirPorCantidadDeIngredientes(condimentos.value)
  nextTick(() => {
    mostrarPanelIngredientes.value = false
    mostrarResumen.value = true
  })
}

function agregarReceta() {
  let recetas = JSON.parse(localStorage.getItem("recetas")) || [];

  recetas.push({
    nombre: nombreReceta.value,
    numeroDePersonas: numeroDePersonas.value,
    principal: principal.value,
    acompanamiento: acompanamiento.value,
    condimentos: condimentos.value,
    descripcion: descripcion.value
  })

  localStorage.setItem(`recetas`, JSON.stringify(recetas))
  window.alert('Receta agregada a la lista de la compra con éxito')
  window.location.reload()
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

        <div class="p1" :class="{ 'active': divActivo.value === 1 }" v-if="div1" ref="div1">
          <h2>PASO 1</h2>
          <h3>Ingresa el número de personas</h3>
          <div class="numero-personas">
            <label><span>Número de personas:</span>
              <input type="number" v-model="numeroDePersonas" min="1" />
            </label>
          </div>
          <button @click="mostrarDiv(2)">SIGUIENTE</button>
        </div>

        <div class="p2" :class="{ 'active': divActivo.value === 2 }" v-if="div2" ref="div2">
          <h2>PASO 2</h2>
          <h3>Elige el ingrediente principal</h3>
          <div class="listaIngredientes">
            <ol>
              <li v-for="(ingrediente, i) in principal" :key="i">
                {{ ingrediente.name }}
              </li>
            </ol>
          </div>
          <button @click="mostrarDiv(3)">SIGUIENTE</button>
        </div>

        <div class="p3" :class="{ 'active': divActivo.value === 3 }" v-if="div3" ref="div3">
          <h2>PASO 3</h2>
          <h3>Elige el acompañamiento</h3>
          <div class="listaIngredientes">
            <ol>
              <li v-for="ingrediente in acompanamiento" :key="ingrediente.id">
                {{ ingrediente.name }}
              </li>
            </ol>
          </div>
          <button @click="mostrarDiv(4)">SIGUIENTE</button>
        </div>

        <div class="p4" :class="{ 'active': divActivo.value === 4 }" v-if="div4" ref="div4">
          <h2>PASO 4</h2>
          <h3>Elige los condimentos para hacer la receta</h3>
          <div class="listaIngredientes">
            <ol>
              <li v-for="ingrediente in condimentos" :key="ingrediente.id">
                {{ ingrediente.name }}
              </li>
            </ol>
          </div>
          <button @click="mostrarDiv(5)">SIGUIENTE</button>
        </div>

        <div class="p5" :class="{ 'active': divActivo.value === 5 }" v-if="div5" ref="div5">
          <h2>PASO 5</h2>
          <h3>Finaliza la receta escribiendo una descripcion si es necesario</h3>
          <h3>¿Qué tal si compartes tu receta con la comunidad?</h3>
          <div class="descripcion">
            <textarea v-model="descripcion"></textarea>
            <button @click="resultado">FINALIZAR</button>
          </div>
        </div>
      </div>

      <div v-if="mostrarPanelIngredientes">
        <div class="panel">
          <PanelIngredientes @ingredienteSeleccionado="agregarIngrediente" 
          ref="panelIngredientesRef" />
        </div>
      </div>
      <div class="resumen" v-if="mostrarResumen">
        <h2>Resumen de la Receta</h2>
        <h3>Para {{ numeroDePersonas }} {{ numeroDePersonas === 1 ? 'persona' : 'personas' }}</h3>
        <h3>Principal</h3>
        <div class="listaIngredientes">
          <ol>
            <li v-for="ingrediente in principal" :key="ingrediente.id">{{ ingrediente.name }} - {{ ingrediente.cantidad
              }} Grs</li>
          </ol>
        </div>
        <h3>Acompañamiento</h3>
        <div class="listaIngredientes">
          <ol>
            <li v-for="ingrediente in acompanamiento" :key="ingrediente.id">{{ ingrediente.name }} - {{
          ingrediente.cantidad }} Grs</li>
          </ol>
        </div>
        <h3>Condimentos</h3>
        <div class="listaIngredientes">
          <ol>
            <li v-for="ingrediente in condimentos" :key="ingrediente.id">{{ ingrediente.name }} - {{
          ingrediente.cantidad }} Grs</li>
          </ol>
        </div>
        <h3><strong>Descripción:</strong></h3>
        <pre class="descripcionFinal">{{ descripcion }}</pre>
        <div class="textoFinal">
          <h3>¿QUIERES PASAR TU RECETA A LA LISTA DE LA COMPRA?</h3>
          <h3>Agrega un nombre a tu receta</h3>
          <input type="text" v-model="nombreReceta" />
          <button @click="agregarReceta()">AGREGAR A LA LISTA DE LA COMPRA</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- no consigo que se active la clase active en los divs p1, p2, p3, p4 y p5, cuando hago click en los botones SIGUIENTE, el valor de divActivo.value cambia correctamente, pero no se activa la clase active en los divs, ¿qué estoy haciendo mal? -->

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
.p4,
.p5 {
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.numero-personas label {
  font-size: 1.2rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.numero-personas input {
  width: 80px;
  height: 80px;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background-color: rgb(217, 243, 252);
  text-align: center;
  font-size: 2.5rem;
}

.p2 {
  background-color: lightgreen;
}

.p3 {
  background-color: lightcoral;
}

.p4 {
  background-color: lightsteelblue;
}

.p5 {
  background-color: lightseagreen;
}

.p5 .descripcion {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.p5 .descripcion textarea {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background-color: #ffa9fb;
  margin: 10px;
  resize: none;
  padding: 10px;
  font-size: 1rem;
}

button {
  background-color: rgb(86, 126, 245);
  border: none;
  color: rgb(20, 20, 20);
  padding: 10px 20px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  margin-top: auto;
}

button:hover {
  background-color: rgb(0, 26, 102);
  color: white;
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
  top: 25%;
  right: 8%;
  width: 40%;
  max-height: 630px;
  /* Limita la altura máxima del div */
  overflow-y: auto;
  /* Habilita el desplazamiento vertical si el contenido excede la altura máxima */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* Cambiado de center a flex-start para manejar mejor el contenido cuando se desborda */
  gap: 5px;
  padding: 5px;
  background-color: #ffa9fb;
  border-radius: 20%;
  margin-bottom: 150px;
}

.descripcionFinal {
  font-size: 1rem;
  text-align: center;
  white-space: pre-wrap;
}

/* esto no me lo aplica */
div.p1.active,
div.p2.active,
div.p3.active,
div.p4.active,
div.p5.active {
  border: rgb(0, 26, 102) 3px solid;
}

.textoFinal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.textoFinal input {
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  color: #63235f;
}
</style>