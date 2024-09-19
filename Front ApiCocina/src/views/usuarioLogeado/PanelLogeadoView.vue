<script setup>
import { ref } from 'vue'

const nuevoIngrediente = ref({
  nombre: '',
  tipo: '',
  principal : '',
  acompañamiento: '',
  condimento: ''
})

</script>

<template>
  <h1>Aqui podras crear,modificar o eliminar tus propios ingredientes</h1>

  <p>{{ nuevoIngrediente.nombre }}</p>

  <div class="contenedor2">
    <div class="rotulo">
      <h1>Crear ingrediente</h1>
    </div>
    <div class="form">
      <form>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="nuevoIngrediente.nombre" />

        <label for="tipo">Tipo</label>
        <input type="text" id="tipo" v-model="nuevoIngrediente.tipo" />

        <label for="principal">Principal</label>
        <input type="text" id="principal" v-model="nuevoIngrediente.principal" />

        <label for="acompañamiento">Acompañamiento</label>
        <input type="text" id="acompañamiento" v-model="nuevoIngrediente.acompañamiento" />

        <label for="condimento">Condimento</label>
        <input type="text" id="condimento" v-model="nuevoIngrediente.condimento" />

        <button type="submit">Crear</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contenedor2 {
  width: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  gap: 20px;
  background-color: rgb(255, 212, 42);
  text-align: center;
}

.contenedor2 .rotulo {
  width: 140%;
  padding: 0px;
  background-color: cornflowerblue;
  color: rgb(255, 255, 255);
  border: 3px solid rgb(255, 212, 42);
}

.contenedor2 .form {
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  color: rgb(255, 255, 255);
  background-color: cornflowerblue;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
}

label {
  font-size: 1.2em;
}

input {
  width: 190%;
  padding: 2px;
  border: 2px solid cornflowerblue;
}

button {
  width: 100%;
  font-size: large;
  padding: 10px;
  background-color: cornflowerblue;
  color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 212, 42);
}

button:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 89, 255);
}

</style>