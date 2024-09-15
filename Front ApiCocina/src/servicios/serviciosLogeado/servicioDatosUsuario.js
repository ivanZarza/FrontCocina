import { ref } from 'vue'

export class ServicioDatosUsuario {
  constructor() {
    this.datosUsuario = ref([])
    this.recetasUsuario = ref([])
  }

  async obtenerDatosUsuario(id) {

    const response = await fetch(`http://localhost:3000/api/listadelacompra/usuarios/${id}/datos`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json()
      this.datosUsuario.value = data
    } else {
      console.error('Error al obtener usuario:', response.statusText);
      console.log(response);
    }
  }

}