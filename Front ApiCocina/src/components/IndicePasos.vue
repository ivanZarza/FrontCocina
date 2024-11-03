<script setup>

const props = defineProps({
  div1: Boolean,
  div2: Boolean,
  div3: Boolean,
  div4: Boolean,
  div5: Boolean,
  divActivo: Number
})

const emit = defineEmits(['mostrarDiv'])

function mostrarDiv(numero) {
  emit('mostrarDiv', numero)
}
</script>

<template>
  <button v-if="div1" @click="mostrarDiv(1)" :class="['button', { 'active': divActivo === 1 }]">PASO 1</button>
  <button v-if="div2" @click="mostrarDiv(2)" :class="['button', { 'active': divActivo === 2 }]">PASO 2</button>
  <button v-if="div3" @click="mostrarDiv(3)" :class="['button', { 'active': divActivo === 3 }]">PASO 3</button>
  <button v-if="div4" @click="mostrarDiv(4)" :class="['button', { 'active': divActivo === 4 }]">PASO 4</button>
  <button v-if="div5" @click="mostrarDiv(5)" :class="['button', { 'active': divActivo === 5 }]">PASO 5</button>
</template>

<style scoped>
.button {
  margin: none;
  height: 50px;
  padding: 10px;
  border: none;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  color: rgb(133, 133, 133);
  font-size: 1.5rem;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(129, 129, 129);
  color: white;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
}

.button.active {
  background-color: rgb(107, 252, 107);
  color: white;
  box-shadow: inset 0 0 14px rgba(31, 255, 50, 0.2);
}
</style>