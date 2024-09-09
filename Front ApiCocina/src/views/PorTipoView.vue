<script setup>
import BuscadorIngredientesView from '../views/BuscadorIngredientesView.vue'
import ServicioIngredientes from '../servicios/servicioIngredientes'


const service = new ServicioIngredientes()
service.cargarTipos()
const clasesDeIngredientes = service.tipos

</script>
<template>

  <BuscadorIngredientesView />

  <div class="about">
    <div class="wrapper">
      <div>
        <h1>Ingredientes</h1>
        <p>En esta sección podrás ver todos los ingredientes que tenemos disponibles para ti.</p>
          <div class="card" v-for="clases in clasesDeIngredientes" :key="clases.tipo" >
            <h3>{{ clases.tipo }}</h3>
          </div>
      </div>
    </div>
  </div>  

</template>