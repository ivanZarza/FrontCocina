<script setup>


defineProps({
  ingredientes: Array,
  siguiente: Number,
  anterior: Number
})

defineEmits(['mostrarDiv'])

</script>

<template>
  <div class="pasosIngredientes">
          <div class="listaIngredientes">
            <ol>
              <li v-for="(ingrediente, i) in ingredientes" :key="i">
                {{ ingrediente.nombre }}
              </li>
            </ol>
          </div>
          <div class="contenedor-botones">
            <button @click="$emit('mostrarDiv', anterior)">ANTERIOR</button>
            <button @click="$emit('mostrarDiv', siguiente)">SIGUIENTE</button>
        </div>
      </div>
</template>

<style scoped>

button {
  background-color: rgb(86, 126, 245);
  border: none;
  color: rgb(255, 255, 255);
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
</style>
