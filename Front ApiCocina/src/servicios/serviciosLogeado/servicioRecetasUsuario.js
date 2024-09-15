import { ref } from "vue"

export class servicioRecetasUsuario {
  constructor() {
    this.recetasUsuario = ref([])
  }

  async obtenerRecetasUsuario(usuarioId) {
    const response = await fetch(`http://localhost:3000//api/listadelacompra/me/${usuarioId}/recetas`)
    const data = await response.json()
    this.recetasUsuario.value = data
  }

  async GuardarRecetaUsuario(usuarioId, recetaJson) {
    const url = new URL(`http://localhost:3000//api/listadelacompra/${usuarioId}/recetas`)

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recetaJson)
    })
  }

  async borrarRecetaUsuario(usuarioId,recetaId) {
    await fetch(`http://localhost:3000//api/listadelacompra/me/${usuarioId}/recetas/${recetaId}`, {
      method: 'DELETE'
    })

    if(response.ok){
      return "Receta eliminada"
    } else {
      return "Error al eliminar receta"
    } 
  }
}

