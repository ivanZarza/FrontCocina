<script setup>
import ExplicacionRecetas from "../components/ExplicacionRecetas.vue";
import PrimerPaso from "../components/PrimerPaso.vue";
import PasosIngredientes from "../components/PasosIngredientes.vue";
import QuintoPaso from "../components/QuintoPaso.vue";
import PanelIngredientes from "../components/PanelIngredientes.vue";
import ResumenReceta from "../components/ResumenReceta.vue";
import VentanaToast from "../components/VentanaToast.vue";
import IndicePasos from "../components/IndicePasos.vue";
import {
  cantidadPrincipal,
  cantidadAcompañamiento,
  cantidadCondimento,
  dividirPorCantidadDeIngredientes,
} from "./../helpers/cantidades.helper";
import { ref, nextTick } from "vue";

const numeroDePersonas = ref(1);
const principal = ref([]);
const acompanamiento = ref([]);
const condimentos = ref([]);
const descripcion = ref("");
const nombreReceta = ref("");
const explicacion = ref(true);

const div1 = ref(false);
const div2 = ref(false);
const div3 = ref(false);
const div4 = ref(false);
const div5 = ref(false);

const divActivo = ref(0);

const panelIngredientesRef = ref(null);

const mostrarPanelIngredientes = ref(false);
const mostrarResumen = ref(false);

const mensajeToast = ref("");
const verToast = ref(false);

function mostrarToast(mensaje) {
  mensajeToast.value = mensaje;
  verToast.value = true;
  setTimeout(() => {
    verToast.value = false;
  }, 2000);
}

function actualizarNumeroDePersonas(numero) {
  numeroDePersonas.value = numero;
}

function ActualizarDescripcion(texto) {
  descripcion.value = texto;
  console.log(descripcion.value);
}

function actualizarNombreReceta(nombre) {
  nombreReceta.value = nombre;
}

function llamarLimpiarPanel() {
  if (panelIngredientesRef.value) {
    panelIngredientesRef.value.limpiarPanel();
  }
}

const divMap = {
  1: div1,
  2: div2,
  3: div3,
  4: div4,
  5: div5,
};

function mostrarDiv(numero) {
  divActivo.value = numero;

  if (numero === 1) {
    explicacion.value = false;
  }

  const div = divMap[numero];
  if (div) {
    div.value = true;
    nextTick(() => {
      mostrarPanelIngredientes.value = true;
      div.value.scrollIntoView({ behavior: "smooth", block: "center" });
      llamarLimpiarPanel();
    });
  }

  if (numero === 5) {
    mostrarPanelIngredientes.value = true;
  }
}

function agregarIngrediente(ingrediente) {
  if (divActivo.value === 1) {
  }

  if (divActivo.value === 2) {
    principal.value.push(
      cantidadPrincipal(ingrediente, numeroDePersonas.value)
    );
  }

  if (divActivo.value === 3) {
    acompanamiento.value.push(
      cantidadAcompañamiento(ingrediente, numeroDePersonas.value)
    );
  }

  if (divActivo.value === 4) {
    condimentos.value.push(
      cantidadCondimento(ingrediente, numeroDePersonas.value)
    );
  }

  if (divActivo.value === 5) {
    return;
  }
}

function resultado() {
  principal.value = dividirPorCantidadDeIngredientes(principal.value);
  acompanamiento.value = dividirPorCantidadDeIngredientes(acompanamiento.value);
  condimentos.value = dividirPorCantidadDeIngredientes(condimentos.value);
  nextTick(() => {
    mostrarPanelIngredientes.value = false;
    mostrarResumen.value = true;
  });
}

function agregarReceta() {
  let recetas = JSON.parse(localStorage.getItem("recetas")) || [];

  recetas.push({
    nombre: nombreReceta.value,
    numeroDePersonas: numeroDePersonas,
    principal: principal.value,
    acompanamiento: acompanamiento.value,
    condimentos: condimentos.value,
    descripcion: descripcion.value,
  });

  localStorage.setItem(`recetas`, JSON.stringify(recetas));
  mostrarToast("Receta añadida a la lista de la compra");
  setTimeout(() => {
    window.location.reload();
  }, 2100);
}
</script>

<template>
  <div class="recetas-usuario-view">
    <div class="indice">
      <IndicePasos
        :div1="true"
        :div2="true"
        :div3="true"
        :div4="true"
        :div5="true"
        :divActivo="divActivo"
        @mostrarDiv="mostrarDiv"
      />
    </div>

    <div class="explicacion" v-if="explicacion">
      <ExplicacionRecetas @mostrarDiv="mostrarDiv" />
    </div>

    <div class="contenedor">
      <div class="pasos">
        <div
          :class="['p1', { active: divActivo === 1 }]"
          v-if="div1"
          ref="div1"
        >
          <PrimerPaso
            :numeroDePersonas="numeroDePersonas"
            @mostrarDiv="mostrarDiv"
            @cantidadDePersonas="actualizarNumeroDePersonas"
          />
        </div>

        <div
          :class="['p2', { active: divActivo === 2 }]"
          v-if="div2"
          ref="div2"
        >
          <PasosIngredientes
            :ingredientes="principal"
            :anterior="1"
            :siguiente="3"
            :titulo="'PASO 2'"
            :informacion="'Elige el ingrediente principal'"
            @mostrarDiv="mostrarDiv"
          />
        </div>

        <div
          :class="['p3', { active: divActivo === 3 }]"
          v-if="div3"
          ref="div3"
        >
          <PasosIngredientes
            :ingredientes="acompanamiento"
            :anterior="2"
            :siguiente="4"
            :titulo="'PASO 3'"
            :informacion="'Elige el acompañamiento'"
            @mostrarDiv="mostrarDiv"
          />
        </div>

        <div
          :class="['p4', { active: divActivo === 4 }]"
          v-if="div4"
          ref="div4"
        >
          <PasosIngredientes
            :ingredientes="condimentos"
            :anterior="3"
            :siguiente="5"
            :titulo="'PASO 4'"
            :informacion="'Elige los condimentos'"
            @mostrarDiv="mostrarDiv"
          />
        </div>

        <div
          :class="['p5', { active: divActivo === 5 }]"
          v-if="div5"
          ref="div5"
        >
          <QuintoPaso
            @textoDescripcion="ActualizarDescripcion"
            @mostrarDiv="mostrarDiv"
            @resultado="resultado"
          />
        </div>
      </div>

      <div v-if="mostrarPanelIngredientes">
        <div class="panel">
          <PanelIngredientes
            @ingredienteSeleccionado="agregarIngrediente"
            ref="panelIngredientesRef"
          />
        </div>
      </div>

      <div class="resumen" v-if="mostrarResumen">
        <ResumenReceta
          :numeroDePersonas="numeroDePersonas"
          :principal="principal"
          :acompanamiento="acompanamiento"
          :condimentos="condimentos"
          :descripcion="descripcion"
          @agregarReceta="agregarReceta"
          @actualizarNombreReceta="actualizarNombreReceta"
        />
      </div>
    </div>
  </div>
  <div>
    <VentanaToast :verToast="verToast" :mensajeToast="mensajeToast" />
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.indice {
  margin: none;
  position: sticky;
  top: 0;
  right: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}

.recetas-usuario-view {
  width: 100%;
  min-height: 200vh;
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

.explicaciom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
}

.explicacion h2 {
  margin: 50px;
}

.explicacion .btn {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
}

.explicacion .btn:hover {
  background-color: rgb(51, 102, 255);
  color: white;
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
  justify-content: space-between;
  border-radius: 20px;
  padding: 30px;
  min-height: 300px;
  margin: 10px;
  gap: 10px;
}

.texto-pasos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
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

.p1 .contenedor-botones {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.p1 .btn {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin: 10px;
}

.p1 .btn:hover {
  background-color: rgb(51, 102, 255);
  color: white;
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
  max-height: 700px;
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
  border-radius: 20px;
  margin-bottom: 150px;
}

.descripcionFinal {
  font-size: 1rem;
  text-align: center;
  white-space: pre-wrap;
}

.active {
  border: #2c3e50 3px solid;
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
