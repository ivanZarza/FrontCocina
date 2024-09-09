<script setup>
import { ref, watch } from 'vue'
import ServicioIngredientes from '../servicios/servicioIngredientes'

const nombre = ref('')
const tipo = ref('')
const pagina = ref(1)
const service = new ServicioIngredientes()

const emits = defineEmits(['ingredienteSeleccionado'])

defineExpose({
  limpiarPanel
})

const clasesDeIngredientes = service.tipos
service.cargarTipos()

const ingredientes = service.ingredientes
service.cargarIngredientes()

function buscar() {
  service.cargarIngredientes({ nombre: nombre.value, tipo: tipo.value, pagina: pagina.value })
}

function lanzarBusqueda() {
  pagina.value = 1
  buscar()
}

const paginaSiguiente = () => {
  if (ingredientes.value.length >= 20) {
    pagina.value++;
    buscar();
  }
}

const paginaAnterior = () => {
  if (pagina.value > 1) {
    pagina.value--;
    buscar()
  }
}

function cambiarSeleccion(ingrediente) {
  if (!ingrediente.seleccionado) {
    ingrediente.seleccionado = true;
    emits('ingredienteSeleccionado', ingrediente);
    console.log(ingrediente);
  }
}

watch(tipo, () => {
  buscar()
})

function limpiarPanel() {
  ingredientes.value.forEach(ingrediente => {
    ingrediente.seleccionado = false
    nombre.value = ''
    tipo.value = ''
    pagina.value = 1
  })
  buscar()
}

</script>

<template>



</template>