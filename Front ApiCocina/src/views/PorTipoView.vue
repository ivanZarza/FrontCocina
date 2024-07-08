<script setup>
import { ref } from "vue"
import ServicioIngredientes from '../servicios/servicio'

const tipo = ref('carne')
const pagina = ref(1)

const service = new ServicioIngredientes()
service .cargarPorTipo(tipo.value, pagina.value)
const ingredientesPorTipo = service.porTipo

</script>
<template>

  <div class="about">
    <div class="wrapper">
      <div>
        <h1>Ingredientes</h1>
        <p>En esta sección podrás ver todos los ingredientes que tenemos disponibles para ti.</p>
          <div class="card" v-for="ingrediente in ingredientesPorTipo" :key="ingrediente.id" >
            <h3>{{ ingrediente.name }}</h3>
          </div>
      </div>
    </div>
  </div>  

</template>