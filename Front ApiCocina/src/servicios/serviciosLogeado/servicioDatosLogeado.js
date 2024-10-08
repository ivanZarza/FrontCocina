import { ref } from 'vue';

export class ServicioDatosUsuario {
  constructor() {
    this.datosUsuario = ref([]);
    this.recetasUsuario = ref([]);
    this.ingredientesUsuario = ref([]);
  }

  async obtenerDatosUsuario() {
    try {
      const response = await fetch('http://localhost:3000/api/listadelacompra/me/datos', {
        credentials: 'include',
      })

      if (!response.ok) {
        // Lanza un error con el estado de la respuesta para ser manejado por el componente
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      this.datosUsuario.value = data.usuario;
      this.recetasUsuario.value = data.recetas;
      this.ingredientesUsuario.value = data.ingredientes;

      return data; // Devuelve los datos para ser manejados por el componente
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      // Lanza el error para ser capturado y manejado por el componente
      throw error;
    }
  }
}

export const servicioDatosUsuario = new ServicioDatosUsuario();