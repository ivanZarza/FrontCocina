<script setup>
import { ref, onMounted } from 'vue'
import { servicioDatosUsuario } from '../../servicios/serviciosLogeado/servicioDatosLogeado';

const props = defineProps({
  usuarioId: Number
})

const usuario = ref({});
const recetas = ref([]);
const ingredientes = ref([]);



// Función asíncrona para cargar los datos del usuario y sus recetas
const cargarDatos = async () => {
  const service = servicioDatosUsuario
  await service.obtenerDatosUsuario(props.usuarioId) // Asegúrate de esperar la respuesta
  usuario.value = service.datosUsuario // Actualiza la referencia reactiva después de obtener los datos
  const recetasUsuario = service.recetasUsuario // Asegúrate de que recetas es una referencia reactiva y se actualiza aquí
  const ingredientesUsuario = service.ingredientesUsuario // Asegúrate de que ingredientes es una referencia reactiva y se actualiza aquí

  recetas.value = recetasUsuario.value.map(receta => {
    let resumen = JSON.parse(receta.datosJSON);
    return {
      id: receta.id,
      usuarioId: receta.usuarioId,
      nombre: resumen.nombre,
      numeroDePersonas: resumen.numeroDePersonas,
      principal: resumen.principal,
      acompanamiento: resumen.acompanamiento,
      condimentos: resumen.condimentos,
      descripcion: resumen.descripcion
    }
  })

  ingredientes.value = ingredientesUsuario.value

  return recetas.value, ingredientes.value
}
console.log(recetas)
console.log(ingredientes);
function AListaDeLaCompra(receta) {
  let recetas = JSON.parse(localStorage.getItem("recetasUsuario")) || [];

  recetas.push({
    nombre: receta.nombre,
    numeroDePersonas: receta.numeroDePersonas,
    principal: receta.principal,
    acompanamiento: receta.acompanamiento,
    condimentos: receta.condimentos,
    descripcion: receta.descripcion,
  })
  localStorage.setItem(`recetasUsuario`, JSON.stringify(recetas))
}
onMounted(cargarDatos)
</script>

<template>
  <div class="container">
    <div class="bienvenida">
      <h1>Hola {{ usuario.nombre }} {{ usuario.apellidos }}</h1>
      <h3>Aquí podrás recuperar tus recetas guardadas, también podrás crear, modificar o eliminar tus propios
        ingredientes</h3>
      <div class="contenidoUsuario">
        <div class="recetas">
          <h1>Recetas creadas por ti</h1>
          <div v-for="receta in recetas" :key="receta.id">
            <div class="postalRecetas">
              <h3>Nombre: {{ receta.nombre }} para {{ receta.numeroDePersonas }} personas</h3>
              <h3>¿Quieres pasar esta receta a la lista de la compra?</h3>
              <button @click="AListaDeLaCompra(receta)">SI</button>
            </div>
          </div>
        </div>
        <div class="ingredientes">
          <h3>Ingredientes creados por ti</h3>
          <div class="postales">
            <div class="postalIngredientes" v-for="ingrediente in ingredientes" :key="ingrediente.nombre">
              <p>Nombre: {{ ingrediente.nombre }}</p>
              <p>Tipo: {{ ingrediente.tipo }}</p>
              <p>Principal: {{ ingrediente.principal }}</p>
              <p>Acompañamiento: {{ ingrediente.acompañamiento }}</p>
              <p>Condimento: {{ ingrediente.condimento }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bienvenida {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contenidoUsuario {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.recetas {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: royalblue;
  gap: 10px;
  padding: 10px;
  color: rgb(119, 246, 250);
}

.postalRecetas {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: royalblue;
  background-color: rgb(119, 246, 250);
  border: 1px solid black;
  border-radius: 20px;
  font-size: 0.9rem;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.ingredientes {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(119, 160, 250);
}

.postales {
  display: flex;
  flex-direction: row;
  padding: 5px;
  color: rgb(0, 58, 182);
  background-color: rgb(0, 58, 182);
  border: 1px solid black;
  border-radius: 20px;
  font-size: 0.9rem;
  gap: 10px;
}

.postalIngredientes {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: rgb(0, 58, 182);
  background-color: rgb(119, 246, 250);
  border: 1px solid black;
  border-radius: 20px;
  font-size: 0.9rem;
  gap: 5px;
}
</style>
