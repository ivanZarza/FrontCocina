import { ref } from 'vue'

export class ServicioDatosUsuario {
  constructor() {
    this.datosUsuario = ref([])
    this.recetasUsuario = ref([])
    this.ingredientesUsuario = ref([])  
  }

  async obtenerDatosUsuario(id) {
    const response = await fetch(`http://localhost:3000/api/listadelacompra/me/${id}/datos`,  {
      credentials: 'include',
    })
    const data = await response.json()
    this.datosUsuario.value = data.usuario
    this.recetasUsuario.value = data.recetas
    this.ingredientesUsuario.value = data.ingredientes
    console.log(this.ingredientesUsuario.value)
}
}
export const servicioDatosUsuario = new ServicioDatosUsuario()