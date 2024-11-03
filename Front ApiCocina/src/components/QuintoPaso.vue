<script setup>
import { ref, watch } from 'vue';

const descripcion = ref('')

const emit = defineEmits([
  'textoDescripcion',
  'mostrarDiv',
  'resultado'
])

watch(descripcion, (value) => {
  emit('textoDescripcion', value)
})

</script>

<template>
  <div>
    <h2 class="texto-pasos">PASO 5</h2>
    <h3>Finaliza la receta escribiendo una descripcion si es necesario</h3>
    <h3>¿Qué tal si compartes tu receta con la comunidad?</h3>
  </div>
  <div class="descripcion">
    <textarea v-model="descripcion"></textarea>
    <div class="contenedor-botones">
      <button class="btn" @click="$emit('mostrarDiv',4)">ANTERIOR</button>
      <button class="btn" @click="$emit('resultado')">FINALIZAR</button>
    </div>
  </div>
</template>

<style scoped>

.descripcion {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

textarea {
  width: 100%;
  max-height: 150px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background-color: #ffa9fb;
  margin: 10px;
  resize: none;
  padding: 10px;
  font-size: 1rem;
  field-sizing: content;
}



.contenedor-botones {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn {
  background-color:#2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border:none;
  margin: 10px;
}

.btn:hover {
  background-color: rgb(51, 102, 255);
  color: white;
}

</style>