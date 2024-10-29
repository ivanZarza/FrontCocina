<script setup>


defineProps({
  principal: Array
})

defineEmits(['mostrarDiv'])

</script>

<template>
  <div class="pasosIngredientes">
          <h2>PASO 2</h2>
          <h3>Elige el ingrediente principal</h3>
          <div class="listaIngredientes">
            <ol>
              <li v-for="(ingrediente, i) in principal" :key="i">
                {{ ingrediente.nombre }}
              </li>
            </ol>
          </div>
          <div class="contenedor-botones">
            <button @click="$emit('mostrarDiv', 1)">ANTERIOR</button>
            <button @click="$emit('mostrarDiv', 3)">SIGUIENTE</button>
        </div>
      </div>
</template>
