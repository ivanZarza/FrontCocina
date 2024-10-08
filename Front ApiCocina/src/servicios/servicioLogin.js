import { ref } from 'vue'

class ServicioLogin {
  constructor() {
    this.datosLogin = ref({})
  }

  async loginUsuario({ nombre,apellidos, contraseña }) {
    try {
      console.log('loginUsuario', { nombre,apellidos, contraseña })

      const response = await fetch('http://localhost:3000/api/listadelacompra/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'nombre': nombre,
          'apellidos': apellidos,
          'contraseña': contraseña,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        // Lanza un error si la respuesta no es exitosa
        throw new Error('Error al loguear usuario: ' + response.status);
      }
      // Convierte la respuesta en un objeto de JavaScript
      const data = await response.json();
      console.log('datos del usuario', data);
      this.datosLogin.value = data
      console.log('loginUsuario:responseData', this.datosLogin.value);

    } catch (error) {
      // Maneja tanto errores de red como errores lanzados manualmente
      console.error(error);
      console.log(error);
    }
  }
}

export const servicioLogin = new ServicioLogin()