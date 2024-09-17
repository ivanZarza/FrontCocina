import { ref } from "vue"

class ServicioRecetasLogeado {
  constructor() {
    this.recetasUsuario = ref([])
    this.recetaGuardada = ref([])
  }

  async obtenerRecetasUsuario(usuarioId) {
    const response = await fetch(`http://localhost:3000/api/listadelacompra/me/${usuarioId}/recetas`)
    const data = await response.json()
    this.recetasUsuario.value = data
  }

  async guardarRecetaUsuario(usuarioId, recetaJson) {
    try {
      // Corrección de la URL para eliminar el doble slash
      const url = new URL(`http://localhost:3000/api/listadelacompra/me/${usuarioId}/recetas`);
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recetaJson)
      });
  
      // Verificar si la respuesta del servidor es exitosa
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      // Opcional: Retornar la respuesta del servidor, por ejemplo, en formato JSON
      const data = await response.json()
      this.recetaGuardada.value = data
      alert("Receta guardada con éxito")
      return 'Receta guardada con éxito'
    } catch (error) {
      // Manejo de errores de la solicitud o de la red
      console.error("Error al guardar la receta del usuario:", error);
      throw error; // Re-lanzar el error para manejo externo si es necesario
    }
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

export const servicioRecetasLogeado = new ServicioRecetasLogeado()