import { ref } from 'vue'
import router from '../router' // Asegúrate de ajustar la ruta de importación según la estructura de tu proyecto

export class ServicioLogout {
  constructor() {
    this.logout = ref({})
  }

  async logoutUsuario(){
    try {
      const response = await fetch('http://localhost:3000/api/listadelacompra/logout')
      // Asumiendo que la respuesta es exitosa sin necesidad de procesar un JSON
      if (response.ok) {
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const servicioLogout = new ServicioLogout()