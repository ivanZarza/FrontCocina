<script setup>
import Servicio from '@/servicios/servicio'

const service = new Servicio()
const ingredientes = service.cargarIngredientes()


</script>

<template>
<pre><code>{{ ingredientes }}</code></pre>

  <div class="about">
    <div class="wrapper">
      <div v-for="ingrediente in ingredientes" :key="ingrediente.id" >
        <h1>Ingredientes</h1>
        <p>En esta sección podrás ver todos los ingredientes que tenemos disponibles para ti.</p>
          <div class="card">
            <h2>{{ ingrediente.id }}</h2>
            <p>{{ ingrediente.name }}</p>
            <p>{{ ingrediente.tipo }}</p>
            <p>{{ ingrediente.principal }}</p>
            <p>{{ ingrediente.acompañamiento }}</p>
            <p>{{ ingrediente.condimento }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
