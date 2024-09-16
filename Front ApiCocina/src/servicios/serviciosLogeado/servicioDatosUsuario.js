import { ref } from 'vue'

export class ServicioDatosUsuario {
  constructor() {
    this.datosUsuario = ref([])
    this.recetasUsuario = ref([])
  }

  async obtenerDatosUsuario(id) {
    const response = await fetch(`http://localhost:3000/api/listadelacompra/me/${id}/datos`)
    const data = await response.json()
    this.datosUsuario.value = data.usuario
    this.recetasUsuario.value = data.recetas
}
}
export const servicioDatosUsuario = new ServicioDatosUsuario()