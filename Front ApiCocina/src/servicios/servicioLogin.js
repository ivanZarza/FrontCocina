import { ref } from 'vue'

export class ServicioLogin {
  constructor() {
    this.login = ref({})
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
        })
      });

      if (!response.ok) {
        // Lanza un error si la respuesta no es exitosa
        throw new Error('Error al loguear usuario: ' + response.statusText);
      }
      // Convierte la respuesta en un objeto de JavaScript
      this.login.value = await response.json();
      console.log('loginUsuario:responseData', this.login.value);
      // Devuelve la respuesta
      return this.login.value;
      //

    } catch (error) {
      // Maneja tanto errores de red como errores lanzados manualmente
      console.error(error);
      console.log(error);
    }
  }
}

export const servicioLogin = new ServicioLogin()