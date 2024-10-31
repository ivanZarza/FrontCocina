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
            <button  class="btn" @click="$emit('mostrarDiv', anterior)">ANTERIOR</button>
            <button  class="btn" @click="$emit('mostrarDiv', siguiente)">SIGUIENTE</button>
        </div>
      </div>
</template>

<style scoped>

contenedor-botones{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btn{
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
