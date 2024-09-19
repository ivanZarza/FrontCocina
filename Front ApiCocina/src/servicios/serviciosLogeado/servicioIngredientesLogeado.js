import { ref } from 'vue'

class ServicioIngredientesLogeado {
  constructor() {
    this.ingredientes = ref([])
  }

  async cargarIngredientes() {
    const response = await fetch(`http://localhost:3000//api/listadelacompra/me/${usuarioId}/ingredientes`)
    const data = await response.json()
    this.ingredientesUsuario.value = data
  }

  async agregarIngredienteUsuario(usuarioId, nuevoIngrediente) {
    const response = await fetch(`http://localhost:3000//api/listadelacompra/me/${usuarioId}/ingredientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nuevoIngrediente.nombre,
        tipo: nuevoIngrediente.tipo,
        principal: nuevoIngrediente.principal,
        acompañamiento: nuevoIngrediente.acompañamiento,
        condimento: nuevoIngrediente.condimento,
      })
    })
    if (response.ok) {
      alert("Ingrediente agregado con éxito")
      return 'Ingrediente agregado con éxito'
    } else {
      alert("Error al agregar ingrediente")
      return 'Error al agregar ingrediente'
    }
  }

  async borrarIngredienteUsuario(usuarioId, ingredienteId) {
    await fetch(`http://localhost:3000//api/listadelacompra/me/${usuarioId}/ingredientes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(`${ingredienteId}`)
    })
    if (response.ok) {
      return "Ingrediente eliminado"
    } else {
      return "Error al eliminar ingrediente"
    }
  }
}

export const servicioIngredientesLogeado = new ServicioIngredientesLogeado()