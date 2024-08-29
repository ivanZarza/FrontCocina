<script setup>
import { ref } from 'vue'

const recetasRecuperadas = ref([])
const recetaSeleccionada = ref(recetasRecuperadas.value[0])
const indiceActual = ref(0)


recuperarRecetas()

function recuperarRecetas() {
  recetasRecuperadas.value = JSON.parse(localStorage.getItem('recetas')) || []
  seleccionarRecetaPorIndice()

}

function seleccionarReceta(receta) {
  recetaSeleccionada.value = receta
}

function seleccionarRecetaPorIndice() {
  if (recetasRecuperadas.value.length > 0) {
    recetaSeleccionada.value = recetasRecuperadas.value[indiceActual.value]
  } else {
    recetaSeleccionada.value = null
    window.alert('No hay recetas guardadas, por favor crea una receta en la zona de RECETAS')
  }
}

function siguienteReceta() {
  if (indiceActual.value < recetasRecuperadas.value.length - 1) {
    indiceActual.value++
    seleccionarRecetaPorIndice()
  }
}

function recetaAnterior() {
  if (indiceActual.value > 0) {
    indiceActual.value--
    seleccionarRecetaPorIndice()
  }
}

function borrarReceta() {
  const recetasFiltradas = recetasRecuperadas.value.filter(receta => receta.nombre !== recetaSeleccionada.value.nombre);
  if (recetasFiltradas.length === 0) {
    localStorage.removeItem('recetas'); // Elimina la entrada si el array está vacío
  } else {
    localStorage.setItem('recetas', JSON.stringify(recetasFiltradas)); // Guarda el array filtrado si no está vacío
  }
  recuperarRecetas();
  recetaSeleccionada.value = null;
}

//explica que hace la funcion extraerIngredientes y la ejecuta con las recetas recuperadas del localStorage 
//extrae los ingredientes de las recetas y los guarda en un array de objetos con la cantidad total de cada ingrediente
//con la cantidad total de cada ingrediente que se necesita para todas las recetas

function extraerIngredientes(recetas) {
  const ingredientesMap = {};

  recetas.forEach(receta => {
    ['principal', 'acompañamiento', 'condimentos'].forEach(seccion => {
      if (receta[seccion]) {
        receta[seccion].forEach(ingrediente => {
          const clave = ingrediente.name;
          if (!ingredientesMap[clave]) {
            ingredientesMap[clave] = {
              nombre: ingrediente.name,
              cantidad: ingrediente.cantidad,
              tipo: ingrediente.tipo,
              principal: ingrediente.principal,
              acompañamiento: ingrediente.acompañamiento,
              condimento: ingrediente.condimento
            };
          } else {
            ingredientesMap[clave].cantidad += ingrediente.cantidad;
          }
        });
      }
    });
  });

  const ingredientesTotales = Object.values(ingredientesMap);
  return ingredientesTotales;
}

const todosLosIngredientes = extraerIngredientes(recetasRecuperadas.value);
console.log(todosLosIngredientes);

</script>

<template>
<div class="pagRecetas">
      <div v-for="receta in recetasRecuperadas" :key="receta.nombre" >
    <button @click="seleccionarReceta(receta)">{{ receta.nombre }}</button>
  </div>
</div>
  <div v-if="recetaSeleccionada" class="container">
    <div class="resumen">
      <div class="pag">
        <button @click="recetaAnterior">Anterior</button>
        <button @click="siguienteReceta">Siguiente</button>
      </div>
      <h1>Receta: {{ recetaSeleccionada.nombre }}</h1>
      <h2>Para {{ recetaSeleccionada.numeroDePersonas }} {{ recetaSeleccionada.numeroDePersonas === 1 ? 'persona' :
    'personas' }}</h2>
      <h2>Principal</h2>
      <div class="listaIngredientes">
        <ol>
          <li v-for="ingrediente in recetaSeleccionada.principal" :key="ingrediente.id">{{ ingrediente.name }} - {{
    ingrediente.cantidad
  }} Grs</li>
        </ol>
      </div>
      <h2>Acompañamiento</h2>
      <div class="listaIngredientes">
        <ol>
          <li v-for="ingrediente in recetaSeleccionada.acompanamiento" :key="ingrediente.id">{{ ingrediente.name }} - {{
    ingrediente.cantidad }} Grs</li>
        </ol>
      </div>
      <h2>Condimentos</h2>
      <div class="listaIngredientes">
        <ol>
          <li v-for="ingrediente in recetaSeleccionada.condimentos" :key="ingrediente.id">{{ ingrediente.name }} - {{
    ingrediente.cantidad }} Grs</li>
        </ol>
      </div>
      <h2><strong>Descripción:</strong></h2>
      <pre class="descripcionFinal">{{ recetaSeleccionada.descripcion }}</pre>
      <div class="borrar">
        <p>Si quieres puedes borrar la receta seleccionada pulsando el siguiente botón:</p>
        <button @click="borrarReceta">Borrar receta</button>
      </div>
    </div>
    <div class="listaFinal">
      <h2>Estas son las cantidades de ingredientes que tienes que comprar para las recetas que has creado</h2>
      <ul>
        <li v-for="ingrediente in todosLosIngredientes" :key="ingrediente.nombre">{{ ingrediente.nombre }} - {{
    ingrediente.cantidad }} Grs</li>
      </ul>
    </div>
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

.pagRecetas {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  background-color: darkcyan;
} 

.pagRecetas button {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: aquamarine;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
}

.pagRecetas button:hover {
  background-color: rgb(25, 255, 178);
}

.container {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  background-color: darkcyan;

}

.resumen {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  border-radius: 20px;
  border: 1px solid black;
  padding: 20px;
  margin-top: 20px;
  font-size: 0.9rem;
  margin: 20px;
  gap: 10px;

}

.resumen .pag {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
}

.resumen .pag button {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #30ff41;
  cursor: pointer;
}

.resumen .pag button:hover {
  background-color: #e1ff37;
}

.borrar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
}

.borrar button {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #ff9292;
  cursor: pointer;
}

.borrar button:hover {
  background-color: #fa5b5b;
  color: yellow;
}

.listaFinal {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid black;
  padding: 20px;
  margin-top: 20px;
  font-size: 0.9rem;
  margin: 20px;
  gap: 10px;
}
</style>