import { ref } from 'vue'

class ServicioIngredientesLogeado {
  constructor() {
    this.ingredientesUsuario = ref([])
  }

  async cargarIngredientes() {
    const response = await fetch(`http://localhost:3000/api/listadelacompra/me/ingredientes`,{
      credentials: 'include',
    })
    const data = await response.json()
    console.log('linea 11 servicio ingredientres pidiendo data',data);
    this.ingredientesUsuario.value = data.resultados
  }

  async agregarIngredienteUsuario(nuevoIngrediente) {
    const response = await fetch(`http://localhost:3000/api/listadelacompra/me/ingredientes`, {
      method: 'POST',
      credentials: 'include',
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

  async borrarIngredienteUsuario() {
    await fetch(`http://localhost:3000/api/listadelacompra/me/ingredientes`, {
      method: 'DELETE',
      credentials: 'include',
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